import React from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';

import AddButton from "../components/add-speed-dial/AddButton";

export default {
    title: 'Buttons/Add button speed dial',
    component: AddButton,
} as ComponentMeta<typeof AddButton>;

export const Primary: ComponentStory<typeof AddButton> = (args: any) => <AddButton {...args}>Button</AddButton>;
