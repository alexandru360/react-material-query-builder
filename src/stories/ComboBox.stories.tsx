import React from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';

import AddButton from "../components/add-speed-dial/AddButton";
import ComboBox from "../components/combobox/ComboBox";

export default {
    title: 'ComboBox',
    component: ComboBox,
} as ComponentMeta<typeof ComboBox>;

export const Primary: ComponentStory<typeof ComboBox> = (args: any) => <ComboBox {...args}>Button</ComboBox>;
