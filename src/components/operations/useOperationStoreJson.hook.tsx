import React from 'react';
import OperationStoreJsonSql, {OperationItemWithSql} from "../../services/operations-store-json-sql";

export default function useOperationStoreJson() {
    const [operations, setOperations] = React.useState<OperationItemWithSql>(new OperationItemWithSql());

    React.useEffect(() => {
        const sub = OperationStoreJsonSql.subscribe((par: OperationItemWithSql) => setOperations(par));
        return () => sub.unsubscribe();
    }, []);

    return operations;
}
