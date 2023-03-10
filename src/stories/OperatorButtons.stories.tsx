import React from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';

import OperatorButtons, {OperatorButtonsProps} from "../components/operator-buttons/OperatorButtons";

export default {
    title: 'Buttons/Operator buttons',
    component: OperatorButtons,
} as ComponentMeta<typeof OperatorButtons>;

const clickHandler = (param: any) => {console.log("Click handler called with: " + param)};

const operatorProps = {
    handleOperationTypeClick: (par: any) => clickHandler(par),
    handleLogicalOperationClick: (par: any) => clickHandler(par),
    addClick: () => clickHandler("Add")
} as OperatorButtonsProps;

export const Primary: ComponentStory<typeof OperatorButtons> = (args: any) =>
    <OperatorButtons {...args}></OperatorButtons>;

Primary.args = operatorProps;
