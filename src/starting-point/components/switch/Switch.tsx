import Required from '@sp-components/required/Required';
import { ISwitchProps } from '@sp-interfaces';
import { Switch as AntSwitch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const Switch = (props: ISwitchProps) => {
  const { className, required, type } = props;
  return (
    <Required show={required}>
      <AntSwitch
        {...props}
        className={className}
        style={props.checked ? {} : { backgroundColor: 'gray' }}
        defaultChecked
        checkedChildren={type === 'check' ? <CheckOutlined /> : null}
        unCheckedChildren={type === 'check' ? <CloseOutlined /> : null}
      />
    </Required>
  );
};

export default Switch;
