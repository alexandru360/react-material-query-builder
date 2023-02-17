import LogicalCondition from "../common/enum-logical-condition";
import OperationType from "../common/enum-operation-type";

export default interface IConditionRow {
    logicalCondition: LogicalCondition;
    operationType: OperationType;
}
