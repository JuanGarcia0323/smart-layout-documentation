import { customLayout } from 'smart-layout';
import { useState } from 'react';
import CustomComponentLayout from '@components/CustomComponentLayout';
import ComboBox from '@sp-components/combo-box/combo-box';
import { DefaultOptionType } from 'antd/es/select';
import { Tooltip } from 'antd';
import config from '@config';
import CodeText from '@components/CodeText';
import TextExample from './TextExamplet';

const layoutExamples = [
  {
    name: '5/1-3/2/4',
    layout:
      '[{"id":4,"key":"4example-saving-layout","orientation":"horizontal","parentId":1697899562641},{"id":1697899562641,"key":"1697899562641","orientation":"vertical","parentId":1697899552617},{"id":1697899552617,"key":"1697899552617","orientation":"horizontal","parentId":-1},{"id":0,"key":"0example-saving-layout","orientation":"horizontal","parentId":1697899562641},{"id":1697899555466,"key":"1697899555466","orientation":"vertical","parentId":1697899552617},{"id":2,"key":"2example-saving-layout","orientation":"horizontal","parentId":1697899555466},{"id":1,"key":"1example-saving-layout","orientation":"horizontal","parentId":1697899555466},{"id":3,"key":"3example-saving-layout","orientation":"horizontal","parentId":1697899555466}]',
  },
  {
    name: '5-1-3/2/4',
    layout:
      '[{"id":4,"key":"4example-saving-layout","orientation":"horizontal","parentId":-1},{"id":1697899552617,"key":"1697899552617","orientation":"horizontal","parentId":-1},{"id":0,"key":"0example-saving-layout","orientation":"horizontal","parentId":1697899552617},{"id":1697899555466,"key":"1697899555466","orientation":"vertical","parentId":1697899552617},{"id":2,"key":"2example-saving-layout","orientation":"horizontal","parentId":1697899555466},{"id":1,"key":"1example-saving-layout","orientation":"horizontal","parentId":1697899555466},{"id":3,"key":"3example-saving-layout","orientation":"horizontal","parentId":1697899555466}]',
  },
  {
    name: 'default',
    layout:
      '[{"id":4,"key":"4example-saving-layout","orientation":"horizontal","parentId":-1},{"id":0,"key":"0example-saving-layout","orientation":"horizontal","parentId":-1},{"id":2,"key":"2example-saving-layout","orientation":"horizontal","parentId":-1},{"id":1,"key":"1example-saving-layout","orientation":"horizontal","parentId":-1},{"id":3,"key":"3example-saving-layout","orientation":"horizontal","parentId":-1}]',
  },
  {
    name: '4/(5/2-3/1)',
    layout:
      '[{"id":1697899633064,"key":"1697899633064","orientation":"vertical","parentId":-1},{"id":4,"key":"4example-saving-layout","orientation":"horizontal","parentId":1697899641608},{"id":3,"key":"3example-saving-layout","orientation":"horizontal","parentId":1697899633064},{"id":1697899641608,"key":"1697899641608","orientation":"horizontal","parentId":1697899633064},{"id":2,"key":"2example-saving-layout","orientation":"horizontal","parentId":1697899641608},{"id":1,"key":"1example-saving-layout","orientation":"horizontal","parentId":1697899643062},{"id":1697899643062,"key":"1697899643062","orientation":"horizontal","parentId":1697899633064},{"id":0,"key":"0example-saving-layout","orientation":"horizontal","parentId":1697899643062}]',
  },
];

const options = layoutExamples.map((l) => ({
  label: l.name,
  value: l.name,
}));

const ExampleSavingLayout = () => {
  const [layoutOptions, setLayoutOptions] =
    useState<DefaultOptionType[]>(options);
  const [layouts, setLayouts] =
    useState<{ name: string; layout: string }[]>(layoutExamples);
  const [layoutSelected, setLayoutSelected] = useState<string>('default');
  const [showCode, setShowCode] = useState(false);
  const handleNewElement = (name: string) => {
    const currentLayout = localStorage.getItem('example-saving-layout');
    if (!currentLayout) {
      return;
    }
    setLayouts([...layouts, { name, layout: currentLayout }]);
    setLayoutOptions([...layoutOptions, { label: name, value: name }]);
    setLayoutSelected(name);
  };
  const selectItem = (name: string) => {
    const selectedLayout = layouts.find((l) => l.name === name);
    localStorage.setItem('example-saving-layout', selectedLayout?.layout ?? '');
    if (!selectedLayout) {
      return;
    }
    setLayoutSelected(name);
  };

  const combo = () => (
    <>
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
      <div className="w-40">
        <ComboBox
          options={layoutOptions}
          className="w-full"
          onInputChange={handleNewElement}
          onChange={selectItem}
          value={layoutSelected}
        />
      </div>
    </>
  );
  const layout = layouts.find((l) => l.name === layoutSelected);
  return (
    <CustomComponentLayout
      id="example-saving-layout"
      tools={combo()}
      layout={
        layout &&
        ({
          name: layout.name,
          layout: JSON.parse(layout.layout),
        } as customLayout)
      }
    >
      {showCode ? (
        <div className="h-full overflow-auto">
          <CodeText
            className="p-0 border-0 h-full w-full overflow-y-scroll "
            split
          >
            {TextExample}
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
