import { useState } from 'react';
import CustomComponentLayout from '@components/CustomComponentLayout';
import CodeText from '@components/CodeText';
import config from '@config';
import { Tooltip } from 'antd';

const ExampleSavingLayout = () => {
  const [showCode, setShowCode] = useState(false);
  return (
    <CustomComponentLayout
      id="example-saving-layout"
      tools={
        <Tooltip title={`Show code`} color={config.colors.primary}>
          <button
            className={`button flex items-center justify-center w-[34.95px] h-[32px]`}
            onClick={() => setShowCode(!showCode)}
          >
            <span
              className="text-sm"
              style={{
                color: showCode ? config.colors.primary : config.colors.text,
              }}
            >
              {showCode ? '</>' : '<>'}
            </span>
          </button>
        </Tooltip>
      }
    >
      {showCode ? (
        <div className="h-full overflow-auto">
          <CodeText className="p-0 border-0 h-full w-full overflow-y-scroll ">
            test
          </CodeText>
        </div>
      ) : (
        [
          <div className="w-full h-full bg-primary flex items-center justify-center font-bold text-background text-3xl">
            1
          </div>,
          <div className="w-full h-full bg-primary flex items-center justify-center font-bold text-background text-3xl">
            2
          </div>,
          <div className="w-full h-full bg-primary flex items-center justify-center font-bold text-background text-3xl">
            3
          </div>,
          <div className="w-full h-full bg-primary flex items-center justify-center font-bold text-background text-3xl">
            4
          </div>,
          <div className="w-full h-full bg-primary flex items-center justify-center font-bold text-background text-3xl">
            5
          </div>,
        ]
      )}
    </CustomComponentLayout>
  );
};

export default ExampleSavingLayout;
