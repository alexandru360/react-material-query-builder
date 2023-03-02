import {BehaviorSubject} from "rxjs";
import LogicalCondition from "../common/enum-logical-condition";

export class OperationItemWithSql {
    operation: OperationItem = new OperationItem();
    sql: string = "";
}

export class OperationItem {
    id: number = Date.now();
    condition: LogicalCondition | any = LogicalCondition.None;
    rules: Array<OperationItem> = [];
}

export class OperationItemRule {
    id: number = Date.now();
    label: string = "";
    field: string = "";
    operator: string = "";
    type: string = "";
    value: string | any[] = "";
}

let store = new OperationItemWithSql;

const subject = new BehaviorSubject(store);

const OperationStoreJsonSql = {
    create: (par: OperationItemWithSql) => {
        debugger
    },
    update: (par: OperationItemWithSql) => {
        store = par;
        // update store.sql based on store.rules and store.condition

        subject.next(store);
    },
    delete: (par: number) => {
        debugger
    },
    subscribe: (setState: any) => subject.subscribe(setState),
};

export default OperationStoreJsonSql;
