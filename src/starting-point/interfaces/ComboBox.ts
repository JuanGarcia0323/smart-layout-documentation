import { SelectProps } from 'antd';

interface IPropsComboBox extends SelectProps {
  required?: boolean;
  onInputChange?: (name: string) => void;
}

export type { IPropsComboBox };
