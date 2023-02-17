import React from 'react';
import IOperationRow from "../../interfaces/IOperationRow";
import OperatorStore from "../../services/operator-store";

export default function useOperationRows() {
    const [conditionRows, setConditionRows] = React.useState<Array<IOperationRow>>([]);

    React.useEffect(() => {
        const sub = OperatorStore.subscribe((rows: Array<IOperationRow>) => setConditionRows(rows));
        return () => sub.unsubscribe();
    }, []);

    return conditionRows;
}
