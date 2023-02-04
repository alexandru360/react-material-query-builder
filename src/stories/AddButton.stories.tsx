import React from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';

import AddButton, {AddButtonProps} from "../components/add-speed-dial/AddButton";
import {LightOperationMatrixModel} from "../common/operation-matrix.model";
import {ComboBoxProps} from "../components/combobox/ComboBox";

export default {
    title: 'Buttons/Add button speed dial',
    component: AddButton,
} as ComponentMeta<typeof AddButton>;

const primaryOptions = {
    onClick: () => {
        console.log('Add button clicked');
    }
} as AddButtonProps;

export const Primary: ComponentStory<typeof AddButton> = (args: any) =>
    <AddButton {...args}>Button</AddButton>;

Primary.args = primaryOptions;
