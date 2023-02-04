import React from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';
import ComboBox, {ComboBoxProps} from "../components/combobox/ComboBox";
import KeyValueEntity from "../common/key-value-entity";
import operatorOptions from "../common/operator-options";

export default {
    title: 'ComboBox',
    component: ComboBox,
} as ComponentMeta<typeof ComboBox>;

const getData = (): Array<KeyValueEntity> => {
    return [
        {key: 'The Shawshank Redemption', value: 1994},
        {key: 'The Godfather', value: 1972},
        {key: 'The Godfather: Part II', value: 1974},
    ]
}

const primaryOptions = {
    options: getData(),
    label: "Movies",
    onChange: (value: string) => {
        console.log(value);
    },
    width: "100%"
} as ComboBoxProps;

const secondaryOptions = operatorOptions;

export const Primary: ComponentStory<typeof ComboBox> = (args: any) => <ComboBox {...args}></ComboBox>;

export const Operator: ComponentStory<typeof ComboBox> = (args: any) => <ComboBox {...args}></ComboBox>;

Primary.args = primaryOptions;

Operator.args = secondaryOptions;
