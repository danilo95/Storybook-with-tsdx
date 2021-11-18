import React from 'react';
import { Meta, Story } from '@storybook/react';
import VainillaButton from '../src/core/VainillaButton';

export default {
  title: 'Molecules/VainillaButton',
  component: VainillaButton,
  argTypes: {
    label: {
      description: 'this is the content of the button',
      type: 'string',
    },
    handleClick: {
      description:
        ' this is the function that is trigerred when the user clicked the button',
      type: 'function',
    },
  },
} as Meta;

const Template: Story = (props) => <VainillaButton {...props} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Click Me',
  handleClick: () => console.log('click'),
};
