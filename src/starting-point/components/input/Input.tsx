import { Input as AntInput } from 'antd';
import { IPropsInput } from '@sp-interfaces';

const Input = (props: IPropsInput) => {
  return <AntInput {...props} />;
};

export default Input;
