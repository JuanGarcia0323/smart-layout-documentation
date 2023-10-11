import { IPropsCheckBox } from '@sp-interfaces';
import Required from '@sp-components/required/Required';
import { Checkbox as AntCheckBox } from 'antd';

const CheckBox = (props: IPropsCheckBox) => {
  const { required, className } = props;
  return (
    <Required show={required} classNameChildren={className}>
      <AntCheckBox {...props} />
    </Required>
  );
};

export default CheckBox;
