import React from "react";
import { Button, Spinner } from "theme-ui";

import { Decimal, TroveChange } from "@liquity/lib-base";

import { useLiquity } from "../../hooks/LiquityContext";
import { useTransactionFunction } from "../Transaction";

type TroveActionProps = {
  transactionId: string;
  change: Exclude<TroveChange<Decimal>, { type: "invalidCreation" }>;
  maxBorrowingRate: Decimal;
  borrowingFeeDecayToleranceMinutes: number;
};

export const TroveAction: React.FC<TroveActionProps> = ({
  children,
  transactionId,
  change,
  maxBorrowingRate,
  borrowingFeeDecayToleranceMinutes
}) => {
  const { liquity } = useLiquity();
  const [approved, setApproved] = React.useState(false);
  const [loadingApproval, setLoadingApproval] = React.useState(false);

  const [sendTransaction] = useTransactionFunction(
    transactionId,
    change.type === "creation"
      ? liquity.send.openTrove.bind(liquity.send, change.params, {
          maxBorrowingRate,
          borrowingFeeDecayToleranceMinutes
        })
      : change.type === "closure"
      ? liquity.send.closeTrove.bind(liquity.send)
      : liquity.send.adjustTrove.bind(liquity.send, change.params, {
          maxBorrowingRate,
          borrowingFeeDecayToleranceMinutes
        })
  );

  const [sendAuth, authState] = useTransactionFunction(
    "troveAuth",
    change.type === "creation"
      ? liquity.send.approveTroveTransaction.bind(liquity.send, change.params.borrowLUSD, {
          maxBorrowingRate,
          borrowingFeeDecayToleranceMinutes
        })
      : liquity.send.approveTroveTransaction.bind(liquity.send, change.params.borrowLUSD, {
          maxBorrowingRate,
          borrowingFeeDecayToleranceMinutes
        })
  );

  React.useEffect(() => {
    console.log("Auth State", authState);
    const { type } = authState;
    if (type === "waitingForApproval" || type === "waitingForConfirmation") {
      setLoadingApproval(true);
    } else if (type === "confirmed" || type === "confirmedOneShot") {
      setApproved(true);
      setLoadingApproval(false);
    } else if (type === "failed" || type === "cancelled") {
      setApproved(false);
      setLoadingApproval(false);
    }
  }, [authState]);

  const approveTransaction = async () => {
    setLoadingApproval(true);
    const response: any = await liquity.send.approveTroveTransaction(change.params.borrowLUSD);
    console.log("Response:", response.data.confirmations);
    if (response.success) {
      setApproved(true);
      setLoadingApproval(false);
    } else {
      setApproved(false);
      setLoadingApproval(false);
      console.log("Error", response.data);
    }
  };

  return loadingApproval ? (
    <Button disabled={true}>
      <Spinner size="24px" sx={{ color: "background" }} />
    </Button>
  ) : (
    <Button onClick={approved ? sendTransaction : approveTransaction}>
      {approved ? children : "Aprobar"}
    </Button>
  );
};
