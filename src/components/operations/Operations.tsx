import React from "react";
import OperatorButtons, {OperatorButtonsProps} from "../operator-buttons/OperatorButtons";
import ConditionRow from "../condition-row/ConditionRow";
import KeyValueEntity from "../../common/key-value-entity";

export default function Operations() {
    const [opAnd, setOpAnd] = React.useState<boolean>(false);
    const [opOr, setOpOr] = React.useState<boolean>(false);
    const [arrFields, setArrFields] = React.useState<KeyValueEntity[]>([]);
    const [conditionRows, setConditionRows] = React.useState<any[]>([]);

    const [opButtonsProps, setOpButtonsProps] = React.useState<OperatorButtonsProps>({} as OperatorButtonsProps);

    React.useEffect(() => {
        const opButtonsProps: OperatorButtonsProps = {
            andClick: handleAndClick,
            orClick: handleOrClick,
            addClick: handleOperationClick
        } as OperatorButtonsProps;
        setOpButtonsProps(opButtonsProps);

        const storyFields = [
            {key: 'Category', value: 'Category'},
            {key: 'PaymentMode', value: 'Payment Mode'},
            {key: 'Description', value: 'Description'},
        ];
        setArrFields(storyFields);
    }, []);

    const handleOrClick = () => {
        console.log("or")
    };

    const handleAndClick = () => {
        console.log("and")
    };

    const handleOperationClick = () => {
        console.log("and")
    };

    return (
        <React.Fragment>
            <OperatorButtons {...opButtonsProps}/>

            <ConditionRow arrFields={arrFields} btnDeleteClick={() => {

            }} />
        </React.Fragment>
    );
}
