import { useState } from 'react';
import { stepOne } from './onCloseExample';
import CustomComponentLayout from '@components/CustomComponentLayout';
import { Tooltip } from 'antd';

import config from 'starting-point/project.config';
import { RedoOutlined } from '@ant-design/icons';
const LayoutExampleOnClosePartTwo = () => {
  const [elements, setElements] = useState([1, 2, 3, 4]);

  return (
    <div className="h-[500px] w-full">
      <CustomComponentLayout
        customConfig={{
          onClose: (e) => setElements(elements.filter((el) => el !== e.name)),
          elementsNames: elements,
        }}
        code={stepOne}
        id="onCloseLayoutExamplePartTwo"
        className={'!border-0'}
        showCodeOut={true}
        tools={
          <Tooltip title="Restart Example" color={config.colors.primary}>
            <button
              className="button flex items-center justify-center"
              onClick={() => setElements([1, 2, 3, 4])}
            >
              <RedoOutlined />
            </button>
          </Tooltip>
        }
      >
        {elements.map((e) => (
          <div
            key={e}
            className="w-full h-full flex items-center justify-center border-2 border-primary"
          >
            {e}
          </div>
        ))}
      </CustomComponentLayout>
    </div>
  );
};

export default LayoutExampleOnClosePartTwo;
