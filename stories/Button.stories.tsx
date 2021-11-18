import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '../src/core/Button';

export default {
  title: 'Molecules/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (props) => <Button {...props} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
  variant: 'primary',
  onClick: () => console.log('im the button'),
};
