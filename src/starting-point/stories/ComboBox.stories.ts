import type { Meta, StoryObj } from '@storybook/react';
import ComboBox from '@sp-components/combo-box/combo-box';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/ComboBox',
  component: ComboBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    status: {
      options: ['error', 'warning', undefined],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'large', 'middle'],
      control: { type: 'select' },
    },
    mode: {
      options: ['multiple', 'tags', undefined],
      control: { type: 'select' },
    },
    defaultValue: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    mode: undefined,
    className: 'w-40',
    size: 'large',
    status: '',
    loading: false,
    allowClear: false,
    bordered: false,
    defaultOpen: false,
    defaultValue: undefined,
    disabled: false,
    popupClassName: '',
    placeholder: 'Select Data',
    options: [
      { label: 'test', value: 'test' },
      { label: 'test two', value: 'test two' },
    ],
    required: false,
    value: undefined,
  },
};
