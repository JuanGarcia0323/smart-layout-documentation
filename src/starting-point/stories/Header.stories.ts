import { Meta, StoryObj } from '@storybook/react';
import Header from '@sp-components/header/Header';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    className: '',
    placement: 'top',
    title: 'Title',
    closeIcon: '',
    children: 'This is the header',
    tabs: [
      {
        key: 'Landing',
        href: '#Landing',
        title: 'Landing',
      },
      {
        key: 'Description',
        href: '#Description',
        title: 'Description',
      },
      {
        key: 'Configuration',
        href: '#Configuration',
        title: 'Configuration',
      },
    ],
  },
};
