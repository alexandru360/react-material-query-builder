import React from 'react';
import IOperationRow from "../../interfaces/IOperationRow";
import OperationLinesStore from "../../services/operation-lines-store";

export default function useOperationRows() {
    const [conditionRows, setConditionRows] = React.useState<Array<IOperationRow>>([]);

    React.useEffect(() => {
        const sub = OperationLinesStore.subscribe((rows: Array<IOperationRow>) => setConditionRows(rows));
        return () => sub.unsubscribe();
    }, []);

    return conditionRows;
}
