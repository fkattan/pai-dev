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

  const approveTransaction = async () => {
    setLoadingApproval(true);
    console.log("Params:", change.params);
    let response: any;
    change.type === "creation"
      ? (response = await liquity.send.approveTroveTransaction(change.params.borrowLUSD))
      : change.type === "closure"
      ? (response = approveClosure())
      : (response = await liquity.send.approveTroveTransaction(
          change.params?.depositCollateral ?? change.params?.withdrawCollateral
        ));
    if (response.success) {
      setApproved(true);
      setLoadingApproval(false);
    } else {
      setApproved(false);
      setLoadingApproval(false);
    }
  };

  const approveClosure = () => {
    return { success: true };
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
