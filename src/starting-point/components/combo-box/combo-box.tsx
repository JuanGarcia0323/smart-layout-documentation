import { useState, useRef } from 'react';
import type { InputRef } from 'antd';
import { IPropsComboBox } from 'starting-point/interfaces';
import { Select, Divider, Space, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Required from '@sp-components/required/Required';

const ComboBox = ({
  onInputChange,
  required,
  bordered,
  ...rest
}: IPropsComboBox) => {
  const [name, setName] = useState('');
  const inputRef = useRef<InputRef>(null);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setName('');
    onInputChange && onInputChange(name);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  return (
    <Required show={required}>
      <Select
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider className="m-2" />
            <Space className="h-auto">
              <Input
                aria-placeholder="Enter layout name"
                className="w-full"
                placeholder="Please enter item"
                ref={inputRef}
                value={name}
                onChange={onNameChange}
              />
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={addItem}
                className="w-full"
              />
            </Space>
          </>
        )}
        {...rest}
        bordered={bordered ?? true}
      />
    </Required>
  );
};

export default ComboBox;
