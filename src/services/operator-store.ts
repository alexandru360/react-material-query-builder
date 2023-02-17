import {Subject} from "rxjs";
import IOperationRow from "../interfaces/IOperationRow";

const subject = new Subject();

let store = new Array<IOperationRow>;

const OperatorStore = {
    init: () => subject.next(store),
    create: (row: any) => {
        store = [...store, row];
        subject.next(store);
    },
    update: (operation: IOperationRow) => {
        debugger
    },
    delete: (rowId: number) => {
        store = store.filter((row: IOperationRow) => row.id !== rowId);
        subject.next(store);
    },
    subscribe: (setState: any) => subject.subscribe(setState),
};

export default OperatorStore;
