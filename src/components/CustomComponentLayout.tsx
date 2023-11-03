import { ReactNode, useState } from 'react';
import { ComponentLayout, customLayout } from 'smart-layout';
import Animation from '@sp-components/animation/Animation';
import CodeText from './CodeText';
import {
  ColumnHeightOutlined,
  ColumnWidthOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Tooltip } from 'antd';
import config from '@config';
import { IConfig } from 'smart-layout';

const CustomComponentLayout = ({
  children,
  id,
  layout,
  tools,
  customConfig,
  code,
  className,
  showCodeOut,
}: {
  tools?: ReactNode;
  children: ReactNode;
  id: string;
  layout?: customLayout;
  customConfig?: IConfig;
  code?: string;
  className?: string;
  showCodeOut?: boolean;
}) => {
  const [showConfig, setShowConfig] = useState(false);
  const [hideMenuBar, setHideMenubar] = useState(false);
  const [limitMovement, setLimitMovement] = useState<
    'horizontal' | 'vertical' | undefined
  >(undefined);
  const [showCode, setShowCode] = useState(showCodeOut);
  const configLayout: IConfig = {
    hideMenubar: hideMenuBar,
    customLayout: layout,
    limitMovement: limitMovement,
    ...customConfig,
  };
  return (
    <div
      className="w-full h-full flex flex-col gap-2 relative"
      onMouseEnter={() => setShowConfig(true)}
      onMouseLeave={() => setShowConfig(false)}
    >
      <div className="w-full h-10">
        <Animation
          show={showConfig}
          className="flex gap-4 justify-end w-full h-8 absolute right-2"
          animationIn="top-0 opacity-100"
          animationOut="top-10 opacity-0"
        >
          <Tooltip
            title={`${hideMenuBar ? 'Show' : 'Hide'} menu-bar`}
            color={config.colors.primary}
          >
            <button
              className={`button flex items-center justify-center`}
              onClick={() => setHideMenubar(!hideMenuBar)}
            >
              <SettingOutlined
                style={{
                  color: hideMenuBar
                    ? config.colors.primary
                    : config.colors.text,
                }}
              />
            </button>
          </Tooltip>
          <Tooltip
            title={`Only horizontal movement`}
            color={config.colors.primary}
          >
            <button
              className={`button flex items-center justify-center`}
              onClick={() =>
                setLimitMovement(
                  'horizontal' === limitMovement ? undefined : 'horizontal'
                )
              }
            >
              <ColumnWidthOutlined
                style={{
                  color:
                    limitMovement === 'horizontal'
                      ? config.colors.primary
                      : config.colors.text,
                }}
              />
            </button>
          </Tooltip>
          <Tooltip
            title={`Only vertical movement`}
            color={config.colors.primary}
          >
            <button
              className={`button flex items-center justify-center`}
              onClick={() =>
                setLimitMovement(
                  'vertical' === limitMovement ? undefined : 'vertical'
                )
              }
            >
              <ColumnHeightOutlined
                style={{
                  color:
                    limitMovement === 'vertical'
                      ? config.colors.primary
                      : config.colors.text,
                }}
              />
            </button>
          </Tooltip>
          {code && (
            <Tooltip title={`Show code`} color={config.colors.primary}>
              <button
                className={`button flex items-center justify-center w-[34.95px] h-[32px]`}
                onClick={() => setShowCode(!showCode)}
              >
                <span
                  className="text-sm"
                  style={{
                    color: showCode
                      ? config.colors.primary
                      : config.colors.text,
                  }}
                >
                  {showCode ? '</>' : '<>'}
                </span>
              </button>
            </Tooltip>
          )}
          {tools}
        </Animation>
      </div>
      <div
        className={`w-full h-full border-2 border-primary p-2 bg-background rounded ${className}`}
      >
        <ComponentLayout config={configLayout} id={id}>
          {showCode && code ? (
            <div className="h-full overflow-auto">
              <CodeText className="p-0 border-0 h-full w-full overflow-y-scroll ">
                {code}
              </CodeText>
            </div>
          ) : (
            children
          )}
        </ComponentLayout>
      </div>
    </div>
  );
};

export default CustomComponentLayout;
