import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import ConditionRow, {ConditionRowProps} from "../components/condition-row/ConditionRow";

export default {
    title: 'Query Builder/Row - operator',
    component: ConditionRow,
    parameters: {
        actions: {
            handles: ['onClick'],
        },
    },
} as ComponentMeta<typeof ConditionRow>;

const storyFields = [
    {key: 'Category', value: 'Category'},
    {key: 'PaymentMode', value: 'Payment Mode'},
    {key: 'Description', value: 'Description'},
];

const operatorProps = {
    arrFields: storyFields,
    btnDeleteClick: (value: string) => {
        console.log(value);
    }
} as ConditionRowProps;

export const Primary: ComponentStory<typeof ConditionRow> = (args: ConditionRowProps) =>
    <ConditionRow {...args}></ConditionRow>;

Primary.args = operatorProps;
