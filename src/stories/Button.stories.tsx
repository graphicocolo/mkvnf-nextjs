import { action } from '@storybook/addon-actions';

import { Button } from '@/components/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'], // 自動的にドキュメントが生成
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    label: {
      control: 'text',
    },
    onClick: { action: 'clicked' }, // 名前 clicked のアクションを実行
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'primary',
    onClick: action('Primary button clicked!'),
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'secondary',
    onClick: action('Secondary button clicked!'),
  },
};
