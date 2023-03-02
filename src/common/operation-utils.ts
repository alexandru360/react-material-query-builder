import OperationLinesStore from "../services/operation-lines-store";
import OperationStoreJsonSql, {OperationItemRule, OperationItemWithSql} from "../services/operations-store-json-sql";
import useOperationStoreJson from "../components/operations/useOperationStoreJson.hook";

const operations: OperationItemWithSql = useOperationStoreJson();

export default class OperationUtils {
    static updateRules(field: any) {
        OperationLinesStore.create(field);
        const newObj: OperationItemWithSql = JSON.parse(JSON.stringify(operations));

        const newRule = new OperationItemRule();
        newRule.label = 'New Rule';
        newRule.operator = 'eq';

        newObj.operation.rules.push(field);
        OperationStoreJsonSql.update(newObj);
    }
}
