import { IPropsComboBox } from 'starting-point/interfaces';
import { Select } from 'antd';
import Required from '@sp-components/required/Required';

const ComboBox = (props: IPropsComboBox) => {
  return (
    <Required show={props.required} classNameChildren={props.className}>
      <Select {...props} bordered={props.bordered ?? true} />
    </Required>
  );
};

export default ComboBox;
