
import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { Log } from "@ethersproject/abstract-provider";
import { BytesLike } from "@ethersproject/bytes";
import {
  Overrides,
  CallOverrides,
  PayableOverrides,
  EventFilter
} from "@ethersproject/contracts";

import { _TypedLiquityContract, _TypedLogDescription } from "../src/contracts";

interface ActivePoolCalls {
  BOOTSTRAP_PERIOD(_overrides?: CallOverrides): Promise<BigNumber>;
  BORROWING_FEE_FLOOR(_overrides?: CallOverrides): Promise<BigNumber>;
  CCR(_overrides?: CallOverrides): Promise<BigNumber>;
  DAI_GAS_COMPENSATION(_overrides?: CallOverrides): Promise<BigNumber>;
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  HALF_PERCENT_DIVISOR(_overrides?: CallOverrides): Promise<BigNumber>;
  MAX_UINT(_overrides?: CallOverrides): Promise<BigNumber>;
  MCR(_overrides?: CallOverrides): Promise<BigNumber>;
  MIN_NET_DEBT(_overrides?: CallOverrides): Promise<BigNumber>;
  NAME(_overrides?: CallOverrides): Promise<string>;
  SECONDS_IN_ONE_MINUTE(_overrides?: CallOverrides): Promise<BigNumber>;
  activePool(_overrides?: CallOverrides): Promise<string>;
  borrowerOperations(_overrides?: CallOverrides): Promise<string>;
  collSurplusPool(_overrides?: CallOverrides): Promise<string>;
  core(_overrides?: CallOverrides): Promise<string>;
  defaultPool(_overrides?: CallOverrides): Promise<string>;
  gemToken(_overrides?: CallOverrides): Promise<string>;
  getColl(_overrides?: CallOverrides): Promise<BigNumber>;
  getDebt(_overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemColl(_overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemDebt(_overrides?: CallOverrides): Promise<BigNumber>;
  getGasCompensationBalance(_overrides?: CallOverrides): Promise<BigNumber>;
  myoStaking(_overrides?: CallOverrides): Promise<string>;
  myoToken(_overrides?: CallOverrides): Promise<string>;
  owner(_overrides?: CallOverrides): Promise<string>;
  paiToken(_overrides?: CallOverrides): Promise<string>;
  priceFeed(_overrides?: CallOverrides): Promise<string>;
  sortedTroves(_overrides?: CallOverrides): Promise<string>;
  vault(_overrides?: CallOverrides): Promise<string>;
}

interface ActivePoolTransactions {
  decreaseDebt(_amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  decreaseGasCompensationBalance(_overrides?: Overrides): Promise<void>;
  increaseDebt(_amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  increaseGasCompensationBalance(_overrides?: Overrides): Promise<void>;
  receiveColl(_sender: string, _amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  sendColl(_receiver: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  sendGasCompensation(_account: string, _overrides?: Overrides): Promise<void>;
  transferFeeToStacking(_amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface ActivePool
  extends _TypedLiquityContract<ActivePoolCalls, ActivePoolTransactions> {
  readonly filters: {
    ActivePoolCollUpdated(_coll?: null): EventFilter;
    ActivePoolDebtUpdated(_debt?: null): EventFilter;
    ActivePoolgasCompensationBalanceUpdated(gasBalance?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
  };
  extractEvents(logs: Log[], name: "ActivePoolCollUpdated"): _TypedLogDescription<{ _coll: BigNumber }>[];
  extractEvents(logs: Log[], name: "ActivePoolDebtUpdated"): _TypedLogDescription<{ _debt: BigNumber }>[];
  extractEvents(logs: Log[], name: "ActivePoolgasCompensationBalanceUpdated"): _TypedLogDescription<{ gasBalance: BigNumber }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
}

interface BorrowerOperationsCalls {
  BOOTSTRAP_PERIOD(_overrides?: CallOverrides): Promise<BigNumber>;
  BORROWING_FEE_FLOOR(_overrides?: CallOverrides): Promise<BigNumber>;
  CCR(_overrides?: CallOverrides): Promise<BigNumber>;
  DAI_GAS_COMPENSATION(_overrides?: CallOverrides): Promise<BigNumber>;
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  HALF_PERCENT_DIVISOR(_overrides?: CallOverrides): Promise<BigNumber>;
  MAX_UINT(_overrides?: CallOverrides): Promise<BigNumber>;
  MCR(_overrides?: CallOverrides): Promise<BigNumber>;
  MIN_NET_DEBT(_overrides?: CallOverrides): Promise<BigNumber>;
  SECONDS_IN_ONE_MINUTE(_overrides?: CallOverrides): Promise<BigNumber>;
  activePool(_overrides?: CallOverrides): Promise<string>;
  borrowerOperations(_overrides?: CallOverrides): Promise<string>;
  collSurplusPool(_overrides?: CallOverrides): Promise<string>;
  core(_overrides?: CallOverrides): Promise<string>;
  defaultPool(_overrides?: CallOverrides): Promise<string>;
  gemToken(_overrides?: CallOverrides): Promise<string>;
  getEntireSystemColl(_overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemDebt(_overrides?: CallOverrides): Promise<BigNumber>;
  myoStaking(_overrides?: CallOverrides): Promise<string>;
  myoToken(_overrides?: CallOverrides): Promise<string>;
  paiToken(_overrides?: CallOverrides): Promise<string>;
  priceFeed(_overrides?: CallOverrides): Promise<string>;
  sortedTroves(_overrides?: CallOverrides): Promise<string>;
  vault(_overrides?: CallOverrides): Promise<string>;
}

interface BorrowerOperationsTransactions {
  addColl(_collIncrease: BigNumberish, _upperHint: string, _lowerHint: string, _overrides?: Overrides): Promise<void>;
  adjustTrove(_collChange: BigNumberish, _isCollIncrease: boolean, _debtChange: BigNumberish, _isDebtIncrease: boolean, _upperHint: string, _lowerHint: string, _maxFeePercentage: BigNumberish, _overrides?: Overrides): Promise<void>;
  claimCollateral(_overrides?: Overrides): Promise<void>;
  closeTrove(_overrides?: Overrides): Promise<void>;
  openTrove(_maxFeePercentage: BigNumberish, _debt: BigNumberish, _coll: BigNumberish, _upperHint: string, _lowerHint: string, _overrides?: Overrides): Promise<void>;
  repayPAI(_paiAmount: BigNumberish, _upperHint: string, _lowerHint: string, _overrides?: Overrides): Promise<void>;
  withdrawColl(_collWithdrawal: BigNumberish, _upperHint: string, _lowerHint: string, _overrides?: Overrides): Promise<void>;
  withdrawPAI(_maxFeePercentage: BigNumberish, _paiWithdrawal: BigNumberish, _upperHint: string, _lowerHint: string, _overrides?: Overrides): Promise<void>;
}

export interface BorrowerOperations
  extends _TypedLiquityContract<BorrowerOperationsCalls, BorrowerOperationsTransactions> {
  readonly filters: {
    BorrowingFeePaid(_borrower?: string | null, _Fee?: null): EventFilter;
    TroveCreated(_borrower?: string | null, arrayIndex?: null): EventFilter;
    TroveUpdated(_borrower?: string | null, _debt?: null, _coll?: null, stake?: null, _borrowingFee?: null, operation?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "BorrowingFeePaid"): _TypedLogDescription<{ _borrower: string; _Fee: BigNumber }>[];
  extractEvents(logs: Log[], name: "TroveCreated"): _TypedLogDescription<{ _borrower: string; arrayIndex: BigNumber }>[];
  extractEvents(logs: Log[], name: "TroveUpdated"): _TypedLogDescription<{ _borrower: string; _debt: BigNumber; _coll: BigNumber; stake: BigNumber; _borrowingFee: BigNumber; operation: number }>[];
}

interface CollSurplusPoolCalls {
  BOOTSTRAP_PERIOD(_overrides?: CallOverrides): Promise<BigNumber>;
  BORROWING_FEE_FLOOR(_overrides?: CallOverrides): Promise<BigNumber>;
  CCR(_overrides?: CallOverrides): Promise<BigNumber>;
  DAI_GAS_COMPENSATION(_overrides?: CallOverrides): Promise<BigNumber>;
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  HALF_PERCENT_DIVISOR(_overrides?: CallOverrides): Promise<BigNumber>;
  MAX_UINT(_overrides?: CallOverrides): Promise<BigNumber>;
  MCR(_overrides?: CallOverrides): Promise<BigNumber>;
  MIN_NET_DEBT(_overrides?: CallOverrides): Promise<BigNumber>;
  NAME(_overrides?: CallOverrides): Promise<string>;
  SECONDS_IN_ONE_MINUTE(_overrides?: CallOverrides): Promise<BigNumber>;
  activePool(_overrides?: CallOverrides): Promise<string>;
  activePoolAddress(_overrides?: CallOverrides): Promise<string>;
  borrowerOperations(_overrides?: CallOverrides): Promise<string>;
  borrowerOperationsAddress(_overrides?: CallOverrides): Promise<string>;
  collSurplusPool(_overrides?: CallOverrides): Promise<string>;
  core(_overrides?: CallOverrides): Promise<string>;
  defaultPool(_overrides?: CallOverrides): Promise<string>;
  gemToken(_overrides?: CallOverrides): Promise<string>;
  getColl(_overrides?: CallOverrides): Promise<BigNumber>;
  getCollateral(_account: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemColl(_overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemDebt(_overrides?: CallOverrides): Promise<BigNumber>;
  myoStaking(_overrides?: CallOverrides): Promise<string>;
  myoToken(_overrides?: CallOverrides): Promise<string>;
  owner(_overrides?: CallOverrides): Promise<string>;
  paiToken(_overrides?: CallOverrides): Promise<string>;
  priceFeed(_overrides?: CallOverrides): Promise<string>;
  sortedTroves(_overrides?: CallOverrides): Promise<string>;
  troveManagerAddress(_overrides?: CallOverrides): Promise<string>;
  vault(_overrides?: CallOverrides): Promise<string>;
}

interface CollSurplusPoolTransactions {
  accountSurplus(_account: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  claimColl(_account: string, _overrides?: Overrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface CollSurplusPool
  extends _TypedLiquityContract<CollSurplusPoolCalls, CollSurplusPoolTransactions> {
  readonly filters: {
    CollBalanceUpdated(_account?: string | null, _newBalance?: null): EventFilter;
    CollSent(_to?: null, _amount?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
  };
  extractEvents(logs: Log[], name: "CollBalanceUpdated"): _TypedLogDescription<{ _account: string; _newBalance: BigNumber }>[];
  extractEvents(logs: Log[], name: "CollSent"): _TypedLogDescription<{ _to: string; _amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
}

interface CommunityIssuanceCalls {
  ISSUANCE_FACTOR(_overrides?: CallOverrides): Promise<BigNumber>;
  MYOSupplyCap(_overrides?: CallOverrides): Promise<BigNumber>;
  NAME(_overrides?: CallOverrides): Promise<string>;
  SECONDS_IN_ONE_MINUTE(_overrides?: CallOverrides): Promise<BigNumber>;
  deploymentTime(_overrides?: CallOverrides): Promise<BigNumber>;
  governor(_overrides?: CallOverrides): Promise<string>;
  myoToken(_overrides?: CallOverrides): Promise<string>;
  owner(_overrides?: CallOverrides): Promise<string>;
  totalMYOIssued(_overrides?: CallOverrides): Promise<BigNumber>;
}

interface CommunityIssuanceTransactions {
  issueMYO(_overrides?: Overrides): Promise<BigNumber>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  sendMYO(_account: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  setAddresses(_myoTokenAddress: string, _governor: string, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface CommunityIssuance
  extends _TypedLiquityContract<CommunityIssuanceCalls, CommunityIssuanceTransactions> {
  readonly filters: {
    MYOTokenAddressSet(_lqtyTokenAddress?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    TotalMYOIssuedUpdated(_totalLQTYIssued?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "MYOTokenAddressSet"): _TypedLogDescription<{ _lqtyTokenAddress: string }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "TotalMYOIssuedUpdated"): _TypedLogDescription<{ _totalLQTYIssued: BigNumber }>[];
}

interface DefaultPoolCalls {
  BOOTSTRAP_PERIOD(_overrides?: CallOverrides): Promise<BigNumber>;
  BORROWING_FEE_FLOOR(_overrides?: CallOverrides): Promise<BigNumber>;
  CCR(_overrides?: CallOverrides): Promise<BigNumber>;
  DAI_GAS_COMPENSATION(_overrides?: CallOverrides): Promise<BigNumber>;
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  HALF_PERCENT_DIVISOR(_overrides?: CallOverrides): Promise<BigNumber>;
  MAX_UINT(_overrides?: CallOverrides): Promise<BigNumber>;
  MCR(_overrides?: CallOverrides): Promise<BigNumber>;
  MIN_NET_DEBT(_overrides?: CallOverrides): Promise<BigNumber>;
  NAME(_overrides?: CallOverrides): Promise<string>;
  SECONDS_IN_ONE_MINUTE(_overrides?: CallOverrides): Promise<BigNumber>;
  activePool(_overrides?: CallOverrides): Promise<string>;
  borrowerOperations(_overrides?: CallOverrides): Promise<string>;
  coll(_overrides?: CallOverrides): Promise<BigNumber>;
  collSurplusPool(_overrides?: CallOverrides): Promise<string>;
  core(_overrides?: CallOverrides): Promise<string>;
  debt(_overrides?: CallOverrides): Promise<BigNumber>;
  defaultPool(_overrides?: CallOverrides): Promise<string>;
  gemToken(_overrides?: CallOverrides): Promise<string>;
  getColl(_overrides?: CallOverrides): Promise<BigNumber>;
  getDebt(_overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemColl(_overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemDebt(_overrides?: CallOverrides): Promise<BigNumber>;
  myoStaking(_overrides?: CallOverrides): Promise<string>;
  myoToken(_overrides?: CallOverrides): Promise<string>;
  paiToken(_overrides?: CallOverrides): Promise<string>;
  priceFeed(_overrides?: CallOverrides): Promise<string>;
  sortedTroves(_overrides?: CallOverrides): Promise<string>;
  vault(_overrides?: CallOverrides): Promise<string>;
}

interface DefaultPoolTransactions {
  decreaseDebt(_amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  increaseDebt(_amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  receiveColl(_amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  sendCollToActivePool(_amount: BigNumberish, _overrides?: Overrides): Promise<void>;
}

export interface DefaultPool
  extends _TypedLiquityContract<DefaultPoolCalls, DefaultPoolTransactions> {
  readonly filters: {
    DefaultPoolCollBalanceUpdated(_amount?: null): EventFilter;
    DefaultPoolDebtBalanceUpdated(_debt?: null): EventFilter;
    GemSent(_recipient?: null, _amount?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "DefaultPoolCollBalanceUpdated"): _TypedLogDescription<{ _amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "DefaultPoolDebtBalanceUpdated"): _TypedLogDescription<{ _debt: BigNumber }>[];
  extractEvents(logs: Log[], name: "GemSent"): _TypedLogDescription<{ _recipient: string; _amount: BigNumber }>[];
}

interface ERC20MockCalls {
  allowance(owner: string, spender: string, _overrides?: CallOverrides): Promise<BigNumber>;
  balanceOf(account: string, _overrides?: CallOverrides): Promise<BigNumber>;
  decimals(_overrides?: CallOverrides): Promise<number>;
  name(_overrides?: CallOverrides): Promise<string>;
  symbol(_overrides?: CallOverrides): Promise<string>;
  totalSupply(_overrides?: CallOverrides): Promise<BigNumber>;
}

interface ERC20MockTransactions {
  approve(spender: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  approveInternal(owner: string, spender: string, value: BigNumberish, _overrides?: Overrides): Promise<void>;
  burn(account: string, amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  decreaseAllowance(spender: string, subtractedValue: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  increaseAllowance(spender: string, addedValue: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  mint(account: string, amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  transfer(recipient: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  transferFrom(sender: string, recipient: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  transferInternal(from: string, to: string, value: BigNumberish, _overrides?: Overrides): Promise<void>;
}

export interface ERC20Mock
  extends _TypedLiquityContract<ERC20MockCalls, ERC20MockTransactions> {
  readonly filters: {
    Approval(owner?: string | null, spender?: string | null, value?: null): EventFilter;
    Transfer(from?: string | null, to?: string | null, value?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "Approval"): _TypedLogDescription<{ owner: string; spender: string; value: BigNumber }>[];
  extractEvents(logs: Log[], name: "Transfer"): _TypedLogDescription<{ from: string; to: string; value: BigNumber }>[];
}

interface GasPoolCalls {
}

interface GasPoolTransactions {
}

export interface GasPool
  extends _TypedLiquityContract<GasPoolCalls, GasPoolTransactions> {
  readonly filters: {
  };
}

interface HintHelpersCalls {
  BOOTSTRAP_PERIOD(_overrides?: CallOverrides): Promise<BigNumber>;
  BORROWING_FEE_FLOOR(_overrides?: CallOverrides): Promise<BigNumber>;
  CCR(_overrides?: CallOverrides): Promise<BigNumber>;
  DAI_GAS_COMPENSATION(_overrides?: CallOverrides): Promise<BigNumber>;
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  HALF_PERCENT_DIVISOR(_overrides?: CallOverrides): Promise<BigNumber>;
  MAX_UINT(_overrides?: CallOverrides): Promise<BigNumber>;
  MCR(_overrides?: CallOverrides): Promise<BigNumber>;
  MIN_NET_DEBT(_overrides?: CallOverrides): Promise<BigNumber>;
  NAME(_overrides?: CallOverrides): Promise<string>;
  SECONDS_IN_ONE_MINUTE(_overrides?: CallOverrides): Promise<BigNumber>;
  computeCR(_coll: BigNumberish, _debt: BigNumberish, _price: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  computeNominalCR(_coll: BigNumberish, _debt: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  getApproxHint(_CR: BigNumberish, _numTrials: BigNumberish, _inputRandomSeed: BigNumberish, _overrides?: CallOverrides): Promise<{ hintAddress: string; diff: BigNumber; latestRandomSeed: BigNumber }>;
  getRedemptionHints(_PAIamount: BigNumberish, _price: BigNumberish, _maxIterations: BigNumberish, _overrides?: CallOverrides): Promise<{ firstRedemptionHint: string; partialRedemptionHintNICR: BigNumber; truncatedPAIamount: BigNumber }>;
  owner(_overrides?: CallOverrides): Promise<string>;
  sortedTroves(_overrides?: CallOverrides): Promise<string>;
  vault(_overrides?: CallOverrides): Promise<string>;
}

interface HintHelpersTransactions {
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  setAddresses(_sortedTrovesAddress: string, _vaultAddress: string, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface HintHelpers
  extends _TypedLiquityContract<HintHelpersCalls, HintHelpersTransactions> {
  readonly filters: {
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    SortedTrovesAddressChanged(_sortedTrovesAddress?: null): EventFilter;
    VaultAddressChanged(_vaultAddress?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "SortedTrovesAddressChanged"): _TypedLogDescription<{ _sortedTrovesAddress: string }>[];
  extractEvents(logs: Log[], name: "VaultAddressChanged"): _TypedLogDescription<{ _vaultAddress: string }>[];
}

interface IERC20Calls {
  allowance(owner: string, spender: string, _overrides?: CallOverrides): Promise<BigNumber>;
  balanceOf(account: string, _overrides?: CallOverrides): Promise<BigNumber>;
  decimals(_overrides?: CallOverrides): Promise<number>;
  name(_overrides?: CallOverrides): Promise<string>;
  symbol(_overrides?: CallOverrides): Promise<string>;
  totalSupply(_overrides?: CallOverrides): Promise<BigNumber>;
}

interface IERC20Transactions {
  approve(spender: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  decreaseAllowance(spender: string, subtractedValue: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  increaseAllowance(spender: string, addedValue: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  transfer(recipient: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  transferFrom(sender: string, recipient: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
}

export interface IERC20
  extends _TypedLiquityContract<IERC20Calls, IERC20Transactions> {
  readonly filters: {
    Approval(owner?: string | null, spender?: string | null, value?: null): EventFilter;
    Transfer(from?: string | null, to?: string | null, value?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "Approval"): _TypedLogDescription<{ owner: string; spender: string; value: BigNumber }>[];
  extractEvents(logs: Log[], name: "Transfer"): _TypedLogDescription<{ from: string; to: string; value: BigNumber }>[];
}

interface LocupContractFactoryCalls {
  NAME(_overrides?: CallOverrides): Promise<string>;
  SECONDS_IN_ONE_YEAR(_overrides?: CallOverrides): Promise<BigNumber>;
  isRegisteredLockup(_contractAddress: string, _overrides?: CallOverrides): Promise<boolean>;
  lockupContractToDeployer(arg0: string, _overrides?: CallOverrides): Promise<string>;
  myoTokenAddress(_overrides?: CallOverrides): Promise<string>;
  owner(_overrides?: CallOverrides): Promise<string>;
}

interface LocupContractFactoryTransactions {
  deployLockupContract(_beneficiary: string, _unlockTime: BigNumberish, _overrides?: Overrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  setMYOTokenAddress(_myoTokenAddress: string, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface LocupContractFactory
  extends _TypedLiquityContract<LocupContractFactoryCalls, LocupContractFactoryTransactions> {
  readonly filters: {
    LockupContractDeployedThroughFactory(_lockupContractAddress?: null, _beneficiary?: null, _unlockTime?: null, _deployer?: null): EventFilter;
    MYOTokenAddressSet(_myoTokenAddress?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
  };
  extractEvents(logs: Log[], name: "LockupContractDeployedThroughFactory"): _TypedLogDescription<{ _lockupContractAddress: string; _beneficiary: string; _unlockTime: BigNumber; _deployer: string }>[];
  extractEvents(logs: Log[], name: "MYOTokenAddressSet"): _TypedLogDescription<{ _myoTokenAddress: string }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
}

interface LUSDTokenCalls {
  DOMAIN_SEPARATOR(_overrides?: CallOverrides): Promise<string>;
  allowance(owner: string, spender: string, _overrides?: CallOverrides): Promise<BigNumber>;
  balanceOf(account: string, _overrides?: CallOverrides): Promise<BigNumber>;
  decimals(_overrides?: CallOverrides): Promise<number>;
  name(_overrides?: CallOverrides): Promise<string>;
  nonces(owner: string, _overrides?: CallOverrides): Promise<BigNumber>;
  permitTypeHash(_overrides?: CallOverrides): Promise<string>;
  symbol(_overrides?: CallOverrides): Promise<string>;
  totalSupply(_overrides?: CallOverrides): Promise<BigNumber>;
  version(_overrides?: CallOverrides): Promise<string>;
}

interface LUSDTokenTransactions {
  approve(spender: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  burn(_account: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  decreaseAllowance(spender: string, subtractedValue: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  increaseAllowance(spender: string, addedValue: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  mint(_account: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  permit(owner: string, spender: string, amount: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, _overrides?: Overrides): Promise<void>;
  transfer(recipient: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  transferFrom(sender: string, recipient: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
}

export interface LUSDToken
  extends _TypedLiquityContract<LUSDTokenCalls, LUSDTokenTransactions> {
  readonly filters: {
    Approval(owner?: string | null, spender?: string | null, value?: null): EventFilter;
    PAITokenBalanceUpdated(_user?: null, _amount?: null): EventFilter;
    Transfer(from?: string | null, to?: string | null, value?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "Approval"): _TypedLogDescription<{ owner: string; spender: string; value: BigNumber }>[];
  extractEvents(logs: Log[], name: "PAITokenBalanceUpdated"): _TypedLogDescription<{ _user: string; _amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "Transfer"): _TypedLogDescription<{ from: string; to: string; value: BigNumber }>[];
}

interface LQTYStakingCalls {
  BOOTSTRAP_PERIOD(_overrides?: CallOverrides): Promise<BigNumber>;
  BORROWING_FEE_FLOOR(_overrides?: CallOverrides): Promise<BigNumber>;
  CCR(_overrides?: CallOverrides): Promise<BigNumber>;
  DAI_GAS_COMPENSATION(_overrides?: CallOverrides): Promise<BigNumber>;
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  F_GEM(_overrides?: CallOverrides): Promise<BigNumber>;
  F_PAI(_overrides?: CallOverrides): Promise<BigNumber>;
  HALF_PERCENT_DIVISOR(_overrides?: CallOverrides): Promise<BigNumber>;
  MAX_UINT(_overrides?: CallOverrides): Promise<BigNumber>;
  MCR(_overrides?: CallOverrides): Promise<BigNumber>;
  MIN_NET_DEBT(_overrides?: CallOverrides): Promise<BigNumber>;
  NAME(_overrides?: CallOverrides): Promise<string>;
  SECONDS_IN_ONE_MINUTE(_overrides?: CallOverrides): Promise<BigNumber>;
  activePool(_overrides?: CallOverrides): Promise<string>;
  borrowerOperations(_overrides?: CallOverrides): Promise<string>;
  collSurplusPool(_overrides?: CallOverrides): Promise<string>;
  core(_overrides?: CallOverrides): Promise<string>;
  defaultPool(_overrides?: CallOverrides): Promise<string>;
  gemToken(_overrides?: CallOverrides): Promise<string>;
  getAccruedGEMFees(_overrides?: CallOverrides): Promise<BigNumber>;
  getAccruedPAIFees(_overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemColl(_overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemDebt(_overrides?: CallOverrides): Promise<BigNumber>;
  getPendingGEMGain(_user: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getPendingPAIGain(_user: string, _overrides?: CallOverrides): Promise<BigNumber>;
  myoStaking(_overrides?: CallOverrides): Promise<string>;
  myoToken(_overrides?: CallOverrides): Promise<string>;
  paiToken(_overrides?: CallOverrides): Promise<string>;
  priceFeed(_overrides?: CallOverrides): Promise<string>;
  snapshots(arg0: string, _overrides?: CallOverrides): Promise<{ F_GEM_Snapshot: BigNumber; F_PAI_Snapshot: BigNumber }>;
  sortedTroves(_overrides?: CallOverrides): Promise<string>;
  stakes(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  totalMYOStaked(_overrides?: CallOverrides): Promise<BigNumber>;
  vault(_overrides?: CallOverrides): Promise<string>;
}

interface LQTYStakingTransactions {
  increaseF_GEM(_GEMFee: BigNumberish, _overrides?: Overrides): Promise<void>;
  increaseF_PAI(_PAIFee: BigNumberish, _overrides?: Overrides): Promise<void>;
  stake(_MYOamount: BigNumberish, _overrides?: Overrides): Promise<void>;
  unstake(_MYOamount: BigNumberish, _overrides?: Overrides): Promise<void>;
}

export interface LQTYStaking
  extends _TypedLiquityContract<LQTYStakingCalls, LQTYStakingTransactions> {
  readonly filters: {
    F_GEMUpdated(_F_GEM?: null): EventFilter;
    F_PAIUpdated(_F_PAI?: null): EventFilter;
    GEMSent(_account?: null, _amount?: null): EventFilter;
    PAISent(_account?: null, _amount?: null): EventFilter;
    StakeChanged(staker?: string | null, newStake?: null): EventFilter;
    StakerSnapshotsUpdated(_staker?: null, _F_GEM?: null, _F_PAI?: null): EventFilter;
    StakingGainsWithdrawn(staker?: string | null, PAIGain?: null, GEMGain?: null): EventFilter;
    TotalMYOStakedUpdated(_totalMYOStaked?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "F_GEMUpdated"): _TypedLogDescription<{ _F_GEM: BigNumber }>[];
  extractEvents(logs: Log[], name: "F_PAIUpdated"): _TypedLogDescription<{ _F_PAI: BigNumber }>[];
  extractEvents(logs: Log[], name: "GEMSent"): _TypedLogDescription<{ _account: string; _amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "PAISent"): _TypedLogDescription<{ _account: string; _amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "StakeChanged"): _TypedLogDescription<{ staker: string; newStake: BigNumber }>[];
  extractEvents(logs: Log[], name: "StakerSnapshotsUpdated"): _TypedLogDescription<{ _staker: string; _F_GEM: BigNumber; _F_PAI: BigNumber }>[];
  extractEvents(logs: Log[], name: "StakingGainsWithdrawn"): _TypedLogDescription<{ staker: string; PAIGain: BigNumber; GEMGain: BigNumber }>[];
  extractEvents(logs: Log[], name: "TotalMYOStakedUpdated"): _TypedLogDescription<{ _totalMYOStaked: BigNumber }>[];
}

interface LQTYTokenCalls {
  DOMAIN_SEPARATOR(_overrides?: CallOverrides): Promise<string>;
  ONE_YEAR_IN_SECONDS(_overrides?: CallOverrides): Promise<BigNumber>;
  allowance(owner: string, spender: string, _overrides?: CallOverrides): Promise<BigNumber>;
  balanceOf(account: string, _overrides?: CallOverrides): Promise<BigNumber>;
  communityIssuanceAddress(_overrides?: CallOverrides): Promise<string>;
  decimals(_overrides?: CallOverrides): Promise<number>;
  getDeploymentStartTime(_overrides?: CallOverrides): Promise<BigNumber>;
  getLpRewardsEntitlement(_overrides?: CallOverrides): Promise<BigNumber>;
  lockupContractFactory(_overrides?: CallOverrides): Promise<string>;
  multisigAddress(_overrides?: CallOverrides): Promise<string>;
  myoStakingAddress(_overrides?: CallOverrides): Promise<string>;
  name(_overrides?: CallOverrides): Promise<string>;
  nonces(owner: string, _overrides?: CallOverrides): Promise<BigNumber>;
  permitTypeHash(_overrides?: CallOverrides): Promise<string>;
  symbol(_overrides?: CallOverrides): Promise<string>;
  totalSupply(_overrides?: CallOverrides): Promise<BigNumber>;
  version(_overrides?: CallOverrides): Promise<string>;
}

interface LQTYTokenTransactions {
  approve(spender: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  decreaseAllowance(spender: string, subtractedValue: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  increaseAllowance(spender: string, addedValue: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  permit(owner: string, spender: string, amount: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, _overrides?: Overrides): Promise<void>;
  sendToMYOStaking(_sender: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  transfer(recipient: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  transferFrom(sender: string, recipient: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
}

export interface LQTYToken
  extends _TypedLiquityContract<LQTYTokenCalls, LQTYTokenTransactions> {
  readonly filters: {
    Approval(owner?: string | null, spender?: string | null, value?: null): EventFilter;
    CommunityIssuanceAddressSet(_communityIssuanceAddress?: null): EventFilter;
    LockupContractFactoryAddressSet(_lockupContractFactoryAddress?: null): EventFilter;
    MYOStakingAddressSet(_myoStakingAddress?: null): EventFilter;
    Transfer(from?: string | null, to?: string | null, value?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "Approval"): _TypedLogDescription<{ owner: string; spender: string; value: BigNumber }>[];
  extractEvents(logs: Log[], name: "CommunityIssuanceAddressSet"): _TypedLogDescription<{ _communityIssuanceAddress: string }>[];
  extractEvents(logs: Log[], name: "LockupContractFactoryAddressSet"): _TypedLogDescription<{ _lockupContractFactoryAddress: string }>[];
  extractEvents(logs: Log[], name: "MYOStakingAddressSet"): _TypedLogDescription<{ _myoStakingAddress: string }>[];
  extractEvents(logs: Log[], name: "Transfer"): _TypedLogDescription<{ from: string; to: string; value: BigNumber }>[];
}

interface MockDAICalls {
  allowance(owner: string, spender: string, _overrides?: CallOverrides): Promise<BigNumber>;
  balanceOf(account: string, _overrides?: CallOverrides): Promise<BigNumber>;
  decimals(_overrides?: CallOverrides): Promise<number>;
  name(_overrides?: CallOverrides): Promise<string>;
  symbol(_overrides?: CallOverrides): Promise<string>;
  totalSupply(_overrides?: CallOverrides): Promise<BigNumber>;
}

interface MockDAITransactions {
  approve(spender: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  burn(_amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  decreaseAllowance(spender: string, subtractedValue: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  increaseAllowance(spender: string, addedValue: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  mint(_recipient: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  transfer(recipient: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  transferFrom(sender: string, recipient: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
}

export interface MockDAI
  extends _TypedLiquityContract<MockDAICalls, MockDAITransactions> {
  readonly filters: {
    Approval(owner?: string | null, spender?: string | null, value?: null): EventFilter;
    Transfer(from?: string | null, to?: string | null, value?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "Approval"): _TypedLogDescription<{ owner: string; spender: string; value: BigNumber }>[];
  extractEvents(logs: Log[], name: "Transfer"): _TypedLogDescription<{ from: string; to: string; value: BigNumber }>[];
}

interface MultiTroveGetterCalls {
  getMultipleSortedTroves(_startIdx: BigNumberish, _count: BigNumberish, _overrides?: CallOverrides): Promise<{ owner: string; debt: BigNumber; coll: BigNumber; stake: BigNumber; snapshotETH: BigNumber; snapshotLUSDDebt: BigNumber }[]>;
  sortedTroves(_overrides?: CallOverrides): Promise<string>;
  troveManager(_overrides?: CallOverrides): Promise<string>;
}

interface MultiTroveGetterTransactions {
}

export interface MultiTroveGetter
  extends _TypedLiquityContract<MultiTroveGetterCalls, MultiTroveGetterTransactions> {
  readonly filters: {
  };
}

interface PriceFeedCalls {
  WAT(_overrides?: CallOverrides): Promise<string>;
  age(_overrides?: CallOverrides): Promise<number>;
  bar(_overrides?: CallOverrides): Promise<BigNumber>;
  bud(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  fetchPrice(_overrides?: CallOverrides): Promise<BigNumber>;
  orcl(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  owner(_overrides?: CallOverrides): Promise<string>;
  peek(_overrides?: CallOverrides): Promise<[BigNumber, boolean]>;
  slot(arg0: BigNumberish, _overrides?: CallOverrides): Promise<string>;
}

interface PriceFeedTransactions {
  diss(_a: string[], _overrides?: Overrides): Promise<void>;
  diss(_a: string, _overrides?: Overrides): Promise<void>;
  drop(_a: string[], _overrides?: Overrides): Promise<void>;
  kiss(_a: string[], _overrides?: Overrides): Promise<void>;
  kiss(_a: string, _overrides?: Overrides): Promise<void>;
  lift(_a: string[], _overrides?: Overrides): Promise<void>;
  poke(_val: BigNumberish[], _age: BigNumberish[], _v: BigNumberish[], _r: BytesLike[], _s: BytesLike[], _overrides?: Overrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  setBar(_bar: BigNumberish, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface PriceFeed
  extends _TypedLiquityContract<PriceFeedCalls, PriceFeedTransactions> {
  readonly filters: {
    LastGoodPriceUpdated(_lastGoodPrice?: null): EventFilter;
    LogMedianPrice(val?: null, age?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
  };
  extractEvents(logs: Log[], name: "LastGoodPriceUpdated"): _TypedLogDescription<{ _lastGoodPrice: BigNumber }>[];
  extractEvents(logs: Log[], name: "LogMedianPrice"): _TypedLogDescription<{ val: BigNumber; age: BigNumber }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
}

interface PriceFeedTesterCalls {
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  ETHUSD_TELLOR_REQ_ID(_overrides?: CallOverrides): Promise<BigNumber>;
  MAX_PRICE_DEVIATION_FROM_PREVIOUS_ROUND(_overrides?: CallOverrides): Promise<BigNumber>;
  MAX_PRICE_DIFFERENCE_BETWEEN_ORACLES(_overrides?: CallOverrides): Promise<BigNumber>;
  NAME(_overrides?: CallOverrides): Promise<string>;
  TARGET_DIGITS(_overrides?: CallOverrides): Promise<BigNumber>;
  TELLOR_DIGITS(_overrides?: CallOverrides): Promise<BigNumber>;
  TIMEOUT(_overrides?: CallOverrides): Promise<BigNumber>;
  isOwner(_overrides?: CallOverrides): Promise<boolean>;
  lastGoodPrice(_overrides?: CallOverrides): Promise<BigNumber>;
  owner(_overrides?: CallOverrides): Promise<string>;
  priceAggregator(_overrides?: CallOverrides): Promise<string>;
  status(_overrides?: CallOverrides): Promise<number>;
  tellorCaller(_overrides?: CallOverrides): Promise<string>;
}

interface PriceFeedTesterTransactions {
  fetchPrice(_overrides?: Overrides): Promise<BigNumber>;
  setAddresses(_priceAggregatorAddress: string, _tellorCallerAddress: string, _overrides?: Overrides): Promise<void>;
  setLastGoodPrice(_lastGoodPrice: BigNumberish, _overrides?: Overrides): Promise<void>;
  setStatus(_status: BigNumberish, _overrides?: Overrides): Promise<void>;
}

export interface PriceFeedTester
  extends _TypedLiquityContract<PriceFeedTesterCalls, PriceFeedTesterTransactions> {
  readonly filters: {
    LastGoodPriceUpdated(_lastGoodPrice?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    PriceFeedStatusChanged(newStatus?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "LastGoodPriceUpdated"): _TypedLogDescription<{ _lastGoodPrice: BigNumber }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "PriceFeedStatusChanged"): _TypedLogDescription<{ newStatus: number }>[];
}

interface SortedTrovesCalls {
  NAME(_overrides?: CallOverrides): Promise<string>;
  borrowerOperationsAddress(_overrides?: CallOverrides): Promise<string>;
  contains(_id: string, _overrides?: CallOverrides): Promise<boolean>;
  data(_overrides?: CallOverrides): Promise<{ head: string; tail: string; maxSize: BigNumber; size: BigNumber }>;
  findInsertPosition(_NICR: BigNumberish, _prevId: string, _nextId: string, _overrides?: CallOverrides): Promise<[string, string]>;
  getFirst(_overrides?: CallOverrides): Promise<string>;
  getLast(_overrides?: CallOverrides): Promise<string>;
  getMaxSize(_overrides?: CallOverrides): Promise<BigNumber>;
  getNext(_id: string, _overrides?: CallOverrides): Promise<string>;
  getPrev(_id: string, _overrides?: CallOverrides): Promise<string>;
  getSize(_overrides?: CallOverrides): Promise<BigNumber>;
  isEmpty(_overrides?: CallOverrides): Promise<boolean>;
  isFull(_overrides?: CallOverrides): Promise<boolean>;
  owner(_overrides?: CallOverrides): Promise<string>;
  validInsertPosition(_NICR: BigNumberish, _prevId: string, _nextId: string, _overrides?: CallOverrides): Promise<boolean>;
  vault(_overrides?: CallOverrides): Promise<string>;
}

interface SortedTrovesTransactions {
  insert(_id: string, _NICR: BigNumberish, _prevId: string, _nextId: string, _overrides?: Overrides): Promise<void>;
  reInsert(_id: string, _newNICR: BigNumberish, _prevId: string, _nextId: string, _overrides?: Overrides): Promise<void>;
  remove(_id: string, _overrides?: Overrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  setParams(_size: BigNumberish, _vaultAddress: string, _borrowerOperationsAddress: string, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface SortedTroves
  extends _TypedLiquityContract<SortedTrovesCalls, SortedTrovesTransactions> {
  readonly filters: {
    BorrowerOperationsAddressChanged(_borrowerOperationsAddress?: null): EventFilter;
    NodeAdded(_id?: null, _NICR?: null): EventFilter;
    NodeRemoved(_id?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    VaultAddressChanged(_vaultAddress?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "BorrowerOperationsAddressChanged"): _TypedLogDescription<{ _borrowerOperationsAddress: string }>[];
  extractEvents(logs: Log[], name: "NodeAdded"): _TypedLogDescription<{ _id: string; _NICR: BigNumber }>[];
  extractEvents(logs: Log[], name: "NodeRemoved"): _TypedLogDescription<{ _id: string }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "VaultAddressChanged"): _TypedLogDescription<{ _vaultAddress: string }>[];
}

interface StabilityPoolCalls {
  BORROWING_FEE_FLOOR(_overrides?: CallOverrides): Promise<BigNumber>;
  CCR(_overrides?: CallOverrides): Promise<BigNumber>;
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  LUSD_GAS_COMPENSATION(_overrides?: CallOverrides): Promise<BigNumber>;
  MCR(_overrides?: CallOverrides): Promise<BigNumber>;
  MIN_NET_DEBT(_overrides?: CallOverrides): Promise<BigNumber>;
  NAME(_overrides?: CallOverrides): Promise<string>;
  P(_overrides?: CallOverrides): Promise<BigNumber>;
  PERCENT_DIVISOR(_overrides?: CallOverrides): Promise<BigNumber>;
  SCALE_FACTOR(_overrides?: CallOverrides): Promise<BigNumber>;
  _100pct(_overrides?: CallOverrides): Promise<BigNumber>;
  activePool(_overrides?: CallOverrides): Promise<string>;
  borrowerOperations(_overrides?: CallOverrides): Promise<string>;
  communityIssuance(_overrides?: CallOverrides): Promise<string>;
  currentEpoch(_overrides?: CallOverrides): Promise<BigNumber>;
  currentScale(_overrides?: CallOverrides): Promise<BigNumber>;
  defaultPool(_overrides?: CallOverrides): Promise<string>;
  depositSnapshots(arg0: string, _overrides?: CallOverrides): Promise<{ S: BigNumber; P: BigNumber; G: BigNumber; scale: BigNumber; epoch: BigNumber }>;
  deposits(arg0: string, _overrides?: CallOverrides): Promise<{ initialValue: BigNumber; frontEndTag: string }>;
  epochToScaleToG(arg0: BigNumberish, arg1: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  epochToScaleToSum(arg0: BigNumberish, arg1: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  frontEndSnapshots(arg0: string, _overrides?: CallOverrides): Promise<{ S: BigNumber; P: BigNumber; G: BigNumber; scale: BigNumber; epoch: BigNumber }>;
  frontEndStakes(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  frontEnds(arg0: string, _overrides?: CallOverrides): Promise<{ kickbackRate: BigNumber; registered: boolean }>;
  getCompoundedFrontEndStake(_frontEnd: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getCompoundedLUSDDeposit(_depositor: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getDepositorETHGain(_depositor: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getDepositorLQTYGain(_depositor: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getETH(_overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemColl(_overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemDebt(_overrides?: CallOverrides): Promise<BigNumber>;
  getFrontEndLQTYGain(_frontEnd: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getTotalLUSDDeposits(_overrides?: CallOverrides): Promise<BigNumber>;
  isOwner(_overrides?: CallOverrides): Promise<boolean>;
  lastETHError_Offset(_overrides?: CallOverrides): Promise<BigNumber>;
  lastLQTYError(_overrides?: CallOverrides): Promise<BigNumber>;
  lastLUSDLossError_Offset(_overrides?: CallOverrides): Promise<BigNumber>;
  lusdToken(_overrides?: CallOverrides): Promise<string>;
  owner(_overrides?: CallOverrides): Promise<string>;
  priceFeed(_overrides?: CallOverrides): Promise<string>;
  sortedTroves(_overrides?: CallOverrides): Promise<string>;
  troveManager(_overrides?: CallOverrides): Promise<string>;
}

interface StabilityPoolTransactions {
  offset(_debtToOffset: BigNumberish, _collToAdd: BigNumberish, _overrides?: Overrides): Promise<void>;
  provideToSP(_amount: BigNumberish, _frontEndTag: string, _overrides?: Overrides): Promise<void>;
  registerFrontEnd(_kickbackRate: BigNumberish, _overrides?: Overrides): Promise<void>;
  setAddresses(_borrowerOperationsAddress: string, _troveManagerAddress: string, _activePoolAddress: string, _lusdTokenAddress: string, _sortedTrovesAddress: string, _priceFeedAddress: string, _communityIssuanceAddress: string, _overrides?: Overrides): Promise<void>;
  withdrawETHGainToTrove(_upperHint: string, _lowerHint: string, _overrides?: Overrides): Promise<void>;
  withdrawFromSP(_amount: BigNumberish, _overrides?: Overrides): Promise<void>;
}

export interface StabilityPool
  extends _TypedLiquityContract<StabilityPoolCalls, StabilityPoolTransactions> {
  readonly filters: {
    ActivePoolAddressChanged(_newActivePoolAddress?: null): EventFilter;
    BorrowerOperationsAddressChanged(_newBorrowerOperationsAddress?: null): EventFilter;
    CommunityIssuanceAddressChanged(_newCommunityIssuanceAddress?: null): EventFilter;
    DefaultPoolAddressChanged(_newDefaultPoolAddress?: null): EventFilter;
    DepositSnapshotUpdated(_depositor?: string | null, _P?: null, _S?: null, _G?: null): EventFilter;
    ETHGainWithdrawn(_depositor?: string | null, _ETH?: null, _LUSDLoss?: null): EventFilter;
    EpochUpdated(_currentEpoch?: null): EventFilter;
    EtherSent(_to?: null, _amount?: null): EventFilter;
    FrontEndRegistered(_frontEnd?: string | null, _kickbackRate?: null): EventFilter;
    FrontEndSnapshotUpdated(_frontEnd?: string | null, _P?: null, _G?: null): EventFilter;
    FrontEndStakeChanged(_frontEnd?: string | null, _newFrontEndStake?: null, _depositor?: null): EventFilter;
    FrontEndTagSet(_depositor?: string | null, _frontEnd?: string | null): EventFilter;
    G_Updated(_G?: null, _epoch?: null, _scale?: null): EventFilter;
    LQTYPaidToDepositor(_depositor?: string | null, _LQTY?: null): EventFilter;
    LQTYPaidToFrontEnd(_frontEnd?: string | null, _LQTY?: null): EventFilter;
    LUSDTokenAddressChanged(_newLUSDTokenAddress?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    P_Updated(_P?: null): EventFilter;
    PriceFeedAddressChanged(_newPriceFeedAddress?: null): EventFilter;
    S_Updated(_S?: null, _epoch?: null, _scale?: null): EventFilter;
    ScaleUpdated(_currentScale?: null): EventFilter;
    SortedTrovesAddressChanged(_newSortedTrovesAddress?: null): EventFilter;
    StabilityPoolETHBalanceUpdated(_newBalance?: null): EventFilter;
    StabilityPoolLUSDBalanceUpdated(_newBalance?: null): EventFilter;
    TroveManagerAddressChanged(_newTroveManagerAddress?: null): EventFilter;
    UserDepositChanged(_depositor?: string | null, _newDeposit?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "ActivePoolAddressChanged"): _TypedLogDescription<{ _newActivePoolAddress: string }>[];
  extractEvents(logs: Log[], name: "BorrowerOperationsAddressChanged"): _TypedLogDescription<{ _newBorrowerOperationsAddress: string }>[];
  extractEvents(logs: Log[], name: "CommunityIssuanceAddressChanged"): _TypedLogDescription<{ _newCommunityIssuanceAddress: string }>[];
  extractEvents(logs: Log[], name: "DefaultPoolAddressChanged"): _TypedLogDescription<{ _newDefaultPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "DepositSnapshotUpdated"): _TypedLogDescription<{ _depositor: string; _P: BigNumber; _S: BigNumber; _G: BigNumber }>[];
  extractEvents(logs: Log[], name: "ETHGainWithdrawn"): _TypedLogDescription<{ _depositor: string; _ETH: BigNumber; _LUSDLoss: BigNumber }>[];
  extractEvents(logs: Log[], name: "EpochUpdated"): _TypedLogDescription<{ _currentEpoch: BigNumber }>[];
  extractEvents(logs: Log[], name: "EtherSent"): _TypedLogDescription<{ _to: string; _amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "FrontEndRegistered"): _TypedLogDescription<{ _frontEnd: string; _kickbackRate: BigNumber }>[];
  extractEvents(logs: Log[], name: "FrontEndSnapshotUpdated"): _TypedLogDescription<{ _frontEnd: string; _P: BigNumber; _G: BigNumber }>[];
  extractEvents(logs: Log[], name: "FrontEndStakeChanged"): _TypedLogDescription<{ _frontEnd: string; _newFrontEndStake: BigNumber; _depositor: string }>[];
  extractEvents(logs: Log[], name: "FrontEndTagSet"): _TypedLogDescription<{ _depositor: string; _frontEnd: string }>[];
  extractEvents(logs: Log[], name: "G_Updated"): _TypedLogDescription<{ _G: BigNumber; _epoch: BigNumber; _scale: BigNumber }>[];
  extractEvents(logs: Log[], name: "LQTYPaidToDepositor"): _TypedLogDescription<{ _depositor: string; _LQTY: BigNumber }>[];
  extractEvents(logs: Log[], name: "LQTYPaidToFrontEnd"): _TypedLogDescription<{ _frontEnd: string; _LQTY: BigNumber }>[];
  extractEvents(logs: Log[], name: "LUSDTokenAddressChanged"): _TypedLogDescription<{ _newLUSDTokenAddress: string }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "P_Updated"): _TypedLogDescription<{ _P: BigNumber }>[];
  extractEvents(logs: Log[], name: "PriceFeedAddressChanged"): _TypedLogDescription<{ _newPriceFeedAddress: string }>[];
  extractEvents(logs: Log[], name: "S_Updated"): _TypedLogDescription<{ _S: BigNumber; _epoch: BigNumber; _scale: BigNumber }>[];
  extractEvents(logs: Log[], name: "ScaleUpdated"): _TypedLogDescription<{ _currentScale: BigNumber }>[];
  extractEvents(logs: Log[], name: "SortedTrovesAddressChanged"): _TypedLogDescription<{ _newSortedTrovesAddress: string }>[];
  extractEvents(logs: Log[], name: "StabilityPoolETHBalanceUpdated"): _TypedLogDescription<{ _newBalance: BigNumber }>[];
  extractEvents(logs: Log[], name: "StabilityPoolLUSDBalanceUpdated"): _TypedLogDescription<{ _newBalance: BigNumber }>[];
  extractEvents(logs: Log[], name: "TroveManagerAddressChanged"): _TypedLogDescription<{ _newTroveManagerAddress: string }>[];
  extractEvents(logs: Log[], name: "UserDepositChanged"): _TypedLogDescription<{ _depositor: string; _newDeposit: BigNumber }>[];
}

interface TroveManagerCalls {
  BETA(_overrides?: CallOverrides): Promise<BigNumber>;
  BOOTSTRAP_PERIOD(_overrides?: CallOverrides): Promise<BigNumber>;
  BORROWING_FEE_FLOOR(_overrides?: CallOverrides): Promise<BigNumber>;
  CCR(_overrides?: CallOverrides): Promise<BigNumber>;
  DAI_GAS_COMPENSATION(_overrides?: CallOverrides): Promise<BigNumber>;
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  HALF_PERCENT_DIVISOR(_overrides?: CallOverrides): Promise<BigNumber>;
  L_Coll(_overrides?: CallOverrides): Promise<BigNumber>;
  L_Debt(_overrides?: CallOverrides): Promise<BigNumber>;
  MAX_BORROWING_FEE(_overrides?: CallOverrides): Promise<BigNumber>;
  MAX_UINT(_overrides?: CallOverrides): Promise<BigNumber>;
  MCR(_overrides?: CallOverrides): Promise<BigNumber>;
  MINUTE_DECAY_FACTOR(_overrides?: CallOverrides): Promise<BigNumber>;
  MIN_NET_DEBT(_overrides?: CallOverrides): Promise<BigNumber>;
  REDEMPTION_FEE_FLOOR(_overrides?: CallOverrides): Promise<BigNumber>;
  SECONDS_IN_ONE_MINUTE(_overrides?: CallOverrides): Promise<BigNumber>;
  TroveOwners(arg0: BigNumberish, _overrides?: CallOverrides): Promise<string>;
  Troves(arg0: string, _overrides?: CallOverrides): Promise<{ debt: BigNumber; coll: BigNumber; stake: BigNumber; status: number; arrayIndex: BigNumber }>;
  activePool(_overrides?: CallOverrides): Promise<string>;
  baseRate(_overrides?: CallOverrides): Promise<BigNumber>;
  borrowerOperations(_overrides?: CallOverrides): Promise<string>;
  collSurplusPool(_overrides?: CallOverrides): Promise<string>;
  core(_overrides?: CallOverrides): Promise<string>;
  defaultPool(_overrides?: CallOverrides): Promise<string>;
  gemToken(_overrides?: CallOverrides): Promise<string>;
  getBorrowingFee(_debt: BigNumberish, _price: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  getBorrowingFeeWithDecay(_debt: BigNumberish, _price: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  getBorrowingRate(_overrides?: CallOverrides): Promise<BigNumber>;
  getBorrowingRateWithDecay(_overrides?: CallOverrides): Promise<BigNumber>;
  getCurrentICR(_borrower: string, _price: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  getEntireDebtAndColl(_borrower: string, _overrides?: CallOverrides): Promise<{ debt: BigNumber; coll: BigNumber; pendingDebtReward: BigNumber; pendingCollReward: BigNumber }>;
  getEntireSystemColl(_overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemDebt(_overrides?: CallOverrides): Promise<BigNumber>;
  getNominalICR(_borrower: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getPendingCollReward(_borrower: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getPendingDebtReward(_borrower: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getRedemptionFeeWithDecay(_collDrawn: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  getRedemptionRate(_overrides?: CallOverrides): Promise<BigNumber>;
  getRedemptionRateWithDecay(_overrides?: CallOverrides): Promise<BigNumber>;
  getTCR(_price: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  getTroveColl(_borrower: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getTroveDebt(_borrower: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getTroveFromTroveOwnersArray(_index: BigNumberish, _overrides?: CallOverrides): Promise<string>;
  getTroveOwnersCount(_overrides?: CallOverrides): Promise<BigNumber>;
  getTroveStake(_borrower: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getTroveStatus(_borrower: string, _overrides?: CallOverrides): Promise<number>;
  hasPendingRewards(_borrower: string, _overrides?: CallOverrides): Promise<boolean>;
  lastCollError_Redistribution(_overrides?: CallOverrides): Promise<BigNumber>;
  lastDebtError_Redistribution(_overrides?: CallOverrides): Promise<BigNumber>;
  lastFeeOperationTime(_overrides?: CallOverrides): Promise<BigNumber>;
  myoStaking(_overrides?: CallOverrides): Promise<string>;
  myoToken(_overrides?: CallOverrides): Promise<string>;
  paiToken(_overrides?: CallOverrides): Promise<string>;
  priceFeed(_overrides?: CallOverrides): Promise<string>;
  rewardSnapshots(arg0: string, _overrides?: CallOverrides): Promise<{ coll: BigNumber; debt: BigNumber }>;
  sortedTroves(_overrides?: CallOverrides): Promise<string>;
  totalCollateralSnapshot(_overrides?: CallOverrides): Promise<BigNumber>;
  totalStakes(_overrides?: CallOverrides): Promise<BigNumber>;
  totalStakesSnapshot(_overrides?: CallOverrides): Promise<BigNumber>;
  vault(_overrides?: CallOverrides): Promise<string>;
}

interface TroveManagerTransactions {
  addTroveOwnerToArray(_borrower: string, _overrides?: Overrides): Promise<BigNumber>;
  applyPendingRewards(_borrower: string, _overrides?: Overrides): Promise<void>;
  batchLiquidateTroves(_troveArray: string[], _overrides?: Overrides): Promise<void>;
  closeTrove(_borrower: string, _overrides?: Overrides): Promise<void>;
  decayBaseRateFromBorrowing(_overrides?: Overrides): Promise<void>;
  decreaseTroveColl(_borrower: string, _collDecrease: BigNumberish, _overrides?: Overrides): Promise<BigNumber>;
  decreaseTroveDebt(_borrower: string, _debtDecrease: BigNumberish, _overrides?: Overrides): Promise<BigNumber>;
  increaseTroveColl(_borrower: string, _collIncrease: BigNumberish, _overrides?: Overrides): Promise<BigNumber>;
  increaseTroveDebt(_borrower: string, _debtIncrease: BigNumberish, _overrides?: Overrides): Promise<BigNumber>;
  liquidate(_borrower: string, _overrides?: Overrides): Promise<void>;
  liquidateTroves(_n: BigNumberish, _overrides?: Overrides): Promise<void>;
  redeemCollateral(_paiAmount: BigNumberish, _firstRedemptionHint: string, _upperPartialRedemptionHint: string, _lowerPartialRedemptionHint: string, _partialRedemptionHintNICR: BigNumberish, _maxIterations: BigNumberish, _maxFeePercentage: BigNumberish, _overrides?: Overrides): Promise<void>;
  removeStake(_borrower: string, _overrides?: Overrides): Promise<void>;
  setTroveStatus(_borrower: string, _num: BigNumberish, _overrides?: Overrides): Promise<void>;
  updateStakeAndTotalStakes(_borrower: string, _overrides?: Overrides): Promise<BigNumber>;
  updateTroveRewardSnapshots(_borrower: string, _overrides?: Overrides): Promise<void>;
}

export interface TroveManager
  extends _TypedLiquityContract<TroveManagerCalls, TroveManagerTransactions> {
  readonly filters: {
    BaseRateUpdated(_baseRate?: null): EventFilter;
    LTermsUpdated(_L_Coll?: null, _L_Debt?: null): EventFilter;
    LastFeeOpTimeUpdated(_lastFeeOpTime?: null): EventFilter;
    Liquidation(_liquidatedDebt?: null, _liquidatedColl?: null, _gasCompensation?: null): EventFilter;
    Redemption(_attemptedPAIAmount?: null, _actualPAIAmount?: null, _collSent?: null, _collFee?: null): EventFilter;
    SystemSnapshotsUpdated(_totalStakesSnapshot?: null, _totalCollateralSnapshot?: null): EventFilter;
    TotalStakesUpdated(_newTotalStakes?: null): EventFilter;
    TroveIndexUpdated(_borrower?: null, _newIndex?: null): EventFilter;
    TroveLiquidated(_borrower?: string | null, _debt?: null, _coll?: null, operation?: null): EventFilter;
    TroveSnapshotsUpdated(_L_Coll?: null, _L_Debt?: null): EventFilter;
    TroveUpdated(_borrower?: string | null, _debt?: null, _coll?: null, _borrowingFee?: null, _stake?: null, _operation?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "BaseRateUpdated"): _TypedLogDescription<{ _baseRate: BigNumber }>[];
  extractEvents(logs: Log[], name: "LTermsUpdated"): _TypedLogDescription<{ _L_Coll: BigNumber; _L_Debt: BigNumber }>[];
  extractEvents(logs: Log[], name: "LastFeeOpTimeUpdated"): _TypedLogDescription<{ _lastFeeOpTime: BigNumber }>[];
  extractEvents(logs: Log[], name: "Liquidation"): _TypedLogDescription<{ _liquidatedDebt: BigNumber; _liquidatedColl: BigNumber; _gasCompensation: BigNumber }>[];
  extractEvents(logs: Log[], name: "Redemption"): _TypedLogDescription<{ _attemptedPAIAmount: BigNumber; _actualPAIAmount: BigNumber; _collSent: BigNumber; _collFee: BigNumber }>[];
  extractEvents(logs: Log[], name: "SystemSnapshotsUpdated"): _TypedLogDescription<{ _totalStakesSnapshot: BigNumber; _totalCollateralSnapshot: BigNumber }>[];
  extractEvents(logs: Log[], name: "TotalStakesUpdated"): _TypedLogDescription<{ _newTotalStakes: BigNumber }>[];
  extractEvents(logs: Log[], name: "TroveIndexUpdated"): _TypedLogDescription<{ _borrower: string; _newIndex: BigNumber }>[];
  extractEvents(logs: Log[], name: "TroveLiquidated"): _TypedLogDescription<{ _borrower: string; _debt: BigNumber; _coll: BigNumber; operation: number }>[];
  extractEvents(logs: Log[], name: "TroveSnapshotsUpdated"): _TypedLogDescription<{ _L_Coll: BigNumber; _L_Debt: BigNumber }>[];
  extractEvents(logs: Log[], name: "TroveUpdated"): _TypedLogDescription<{ _borrower: string; _debt: BigNumber; _coll: BigNumber; _borrowingFee: BigNumber; _stake: BigNumber; _operation: number }>[];
}

interface UnipoolCalls {
  NAME(_overrides?: CallOverrides): Promise<string>;
  balanceOf(account: string, _overrides?: CallOverrides): Promise<BigNumber>;
  duration(_overrides?: CallOverrides): Promise<BigNumber>;
  earned(account: string, _overrides?: CallOverrides): Promise<BigNumber>;
  lastTimeRewardApplicable(_overrides?: CallOverrides): Promise<BigNumber>;
  lastUpdateTime(_overrides?: CallOverrides): Promise<BigNumber>;
  myoToken(_overrides?: CallOverrides): Promise<string>;
  owner(_overrides?: CallOverrides): Promise<string>;
  periodFinish(_overrides?: CallOverrides): Promise<BigNumber>;
  rewardPerToken(_overrides?: CallOverrides): Promise<BigNumber>;
  rewardPerTokenStored(_overrides?: CallOverrides): Promise<BigNumber>;
  rewardRate(_overrides?: CallOverrides): Promise<BigNumber>;
  rewards(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  totalSupply(_overrides?: CallOverrides): Promise<BigNumber>;
  uniToken(_overrides?: CallOverrides): Promise<string>;
  userRewardPerTokenPaid(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
}

interface UnipoolTransactions {
  claimReward(_overrides?: Overrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  setParams(_myoTokenAddress: string, _uniTokenAddress: string, _duration: BigNumberish, _overrides?: Overrides): Promise<void>;
  stake(amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
  withdraw(amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  withdrawAndClaim(_overrides?: Overrides): Promise<void>;
}

export interface Unipool
  extends _TypedLiquityContract<UnipoolCalls, UnipoolTransactions> {
  readonly filters: {
    MYOTokenAddressChanged(_myoTokenAddress?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    RewardAdded(reward?: null): EventFilter;
    RewardPaid(user?: string | null, reward?: null): EventFilter;
    Staked(user?: string | null, amount?: null): EventFilter;
    UniTokenAddressChanged(_uniTokenAddress?: null): EventFilter;
    Withdrawn(user?: string | null, amount?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "MYOTokenAddressChanged"): _TypedLogDescription<{ _myoTokenAddress: string }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "RewardAdded"): _TypedLogDescription<{ reward: BigNumber }>[];
  extractEvents(logs: Log[], name: "RewardPaid"): _TypedLogDescription<{ user: string; reward: BigNumber }>[];
  extractEvents(logs: Log[], name: "Staked"): _TypedLogDescription<{ user: string; amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "UniTokenAddressChanged"): _TypedLogDescription<{ _uniTokenAddress: string }>[];
  extractEvents(logs: Log[], name: "Withdrawn"): _TypedLogDescription<{ user: string; amount: BigNumber }>[];
}
