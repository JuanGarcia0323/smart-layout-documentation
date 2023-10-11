import { SwitchProps } from 'antd';

interface ISwitchProps extends SwitchProps {
  required?: boolean;
  type?: 'default' | 'check';
}

export type { ISwitchProps };
