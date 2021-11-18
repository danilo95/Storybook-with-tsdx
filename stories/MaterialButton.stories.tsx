import React from 'react';
import { Meta, Story } from '@storybook/react';
import MaterialButton, {
  MaterialButtonProps,
} from '../src/core/MaterialButton';

export default {
  title: 'Molecules/MaterialButton',
  component: MaterialButton,
} as Meta;

const Template: Story<MaterialButtonProps> = (props) => (
  <MaterialButton {...props} />
);

export const Default = Template.bind({});
Default.parameters = {
  controls: {
    include: ['size', 'variant', 'disabled', 'children'],
  },
};
Default.args = {
  children: 'Click Me',
  variant: 'contained',
  size: 'large',
};
