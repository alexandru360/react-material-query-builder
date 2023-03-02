import React from "react";
import OperatorButtons, {OperatorButtonsProps} from "../operator-buttons/OperatorButtons";
import KeyValueEntity from "../../common/key-value-entity";
import OperationType from "../../common/enum-operation-type";
import LogicalCondition from "../../common/enum-logical-condition";
import ConditionRow from "../condition-row/ConditionRow";
import IOperationRow from "../../interfaces/IOperationRow";
import OperationLinesStore from "../../services/operation-lines-store";
import useOperationRows from "./useOperationRows.hook";
import useOperationStoreJson from "./useOperationStoreJson.hook";
import OperationStoreJsonSql, {OperationItemWithSql} from "../../services/operations-store-json-sql";

export interface IOperationsProps {
    arrFields: KeyValueEntity[];
}

export default function Operations(props: IOperationsProps) {
    const conditionRows = useOperationRows();
    const operations: OperationItemWithSql = useOperationStoreJson();

    const [opButtonsProps, setOpButtonsProps] = React.useState<OperatorButtonsProps>({} as OperatorButtonsProps);
    const [btnLogicalOperation, setBtnLogicalOperation] = React.useState<LogicalCondition>(LogicalCondition.None);

    React.useEffect(() => {
        const opButtonsProps: OperatorButtonsProps = {
            handleOperationTypeClick: handleOperationClick,
            handleLogicalOperationClick: handleLogicalClick,
            addClick: handleOperationClick
        } as OperatorButtonsProps;
        setOpButtonsProps(opButtonsProps);
    }, []);

    const handleLogicalClick = (par: LogicalCondition) => {
        const newObj: OperationItemWithSql = JSON.parse(JSON.stringify(operations));
        newObj.operation.condition = par;
        OperationStoreJsonSql.update(newObj);
        setBtnLogicalOperation(par);
    };

    const handleOperationClick = (par: OperationType) => {
        const field = {
            id: Date.now(),
            logicalCondition: btnLogicalOperation,
            operationType: OperationType[par],
            arrFields: props.arrFields
        } as IOperationRow;

        OperationLinesStore.create(field);
    }

    const handleDeleteClick = (idx: number) => OperationLinesStore.delete(idx);

    return (
        <React.Fragment>
            <OperatorButtons {...opButtonsProps}/>
            <br/>
            <br/>
            {JSON.stringify(conditionRows)}
            <br/>
            {conditionRows.map((row: IOperationRow, idx: number) =>
                <ConditionRow key={idx} arrFields={row.arrFields} btnDeleteClick={handleDeleteClick} idx={row.id}/>
            )}
        </React.Fragment>
    );
}
