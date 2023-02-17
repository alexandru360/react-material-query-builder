import React from "react";
import OperatorButtons, {OperatorButtonsProps} from "../operator-buttons/OperatorButtons";
import KeyValueEntity from "../../common/key-value-entity";
import OperationType from "../../common/enum-operation-type";
import LogicalCondition from "../../common/enum-logical-condition";
import ConditionRow from "../condition-row/ConditionRow";
import IOperationRow from "../../interfaces/IOperationRow";
import OperatorStore from "../../services/operator-store";
import useOperationRows from "./useOperationRows.hook";

export interface IOperationsProps {
    arrFields: KeyValueEntity[];
}

export default function Operations(props: IOperationsProps) {
    const conditionRows = useOperationRows();

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

    const handleLogicalClick = (par: LogicalCondition) => setBtnLogicalOperation(par);

    const handleOperationClick = (par: OperationType) => {
        // debugger
        if (OperationType[par] == OperationType.AddCondition) {
            const field = {
                id: Date.now(),
                logicalCondition: btnLogicalOperation,
                operationType: OperationType.AddCondition,
                arrFields: props.arrFields
            } as IOperationRow;

            OperatorStore.create(field);
        }
    }

    const handleDeleteClick = (idx: number) => OperatorStore.delete(idx);

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
