import React from "react";
import OperatorButtons, {OperatorButtonsProps} from "../operator-buttons/OperatorButtons";
import KeyValueEntity from "../../common/key-value-entity";
import OperationType from "../../common/enum-operation-type";
import LogicalCondition from "../../common/enum-logical-condition";
import ConditionRow from "../condition-row/ConditionRow";

interface IConditionRow {
    id: string;
    logicalCondition: LogicalCondition;
    operationType: OperationType;
}

interface IOperationRow extends IConditionRow {
    arrFields: KeyValueEntity[];
}

export default function Operations() {
    const [opButtonsProps, setOpButtonsProps] = React.useState<OperatorButtonsProps>({} as OperatorButtonsProps);
    const [btnLogicalOperation, setBtnLogicalOperation] = React.useState<LogicalCondition>(LogicalCondition.None);
    const [btnOperationType, setBtnOperationType] = React.useState<OperationType>(OperationType.None);
    const [conditionRows, setConditionRows] = React.useState<IOperationRow[]>([]);

    React.useEffect(() => {
        const opButtonsProps: OperatorButtonsProps = {
            handleOperationTypeClick: handleOperationClick,
            handleLogicalOperationClick: handleLogicalClick,
            addClick: handleOperationClick
        } as OperatorButtonsProps;
        setOpButtonsProps(opButtonsProps);
    }, []);

    React.useEffect(() => {
        const countConditions = conditionRows.length;

        const storyFields = [
            {key: 'Category', value: 'Category'},
            {key: 'PaymentMode', value: 'Payment Mode'},
            {key: 'Description', value: 'Description'},
        ];

        let field: IOperationRow = {} as IOperationRow;
        if (btnOperationType == OperationType.AddCondition) {
            field = {
                id: countConditions === 0 ? '1' : (countConditions + 1).toString(),
                logicalCondition: btnLogicalOperation,
                operationType: OperationType.AddCondition,
                arrFields: storyFields
            } as IOperationRow;
            if (countConditions === 0) {
                setConditionRows([field]);
            } else {
                setConditionRows([...conditionRows, field]);
            }
        }
    }, [btnLogicalOperation, btnOperationType]);

    const handleOperationClick = (par: OperationType) => setBtnOperationType(par);

    const handleLogicalClick = (par: LogicalCondition) => setBtnLogicalOperation(par);

    return (
        <React.Fragment>
            <OperatorButtons {...opButtonsProps}/>

            {JSON.stringify(conditionRows)}

            {conditionRows.map((row: IOperationRow, idx: number) =>
                <ConditionRow
                    key={idx}
                    arrFields={row.arrFields}
                    btnDeleteClick={() => {
                    }}/>
            )}
        </React.Fragment>
    );
}
