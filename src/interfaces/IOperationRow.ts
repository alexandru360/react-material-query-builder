import KeyValueEntity from "../common/key-value-entity";
import IConditionRow from "./IConditionRow";

export default interface IOperationRow extends IConditionRow {
    id: number;
    arrFields: KeyValueEntity[];
}
