import { useState } from 'react';
import { stepOne } from './onCloseExample';
import CustomComponentLayout from '@components/CustomComponentLayout';
const LayoutExampleOnClose = () => {
  const [elements, setElements] = useState([1, 2, 3, 4]);

  return (
    <div className="h-[500px] w-full">
      <CustomComponentLayout
        customConfig={{
          onClose: (e) => setElements(elements.filter((el) => el !== e.id)),
        }}
        code={stepOne}
        id="onCloseLayoutExample"
        className={'!border-0'}
        showCodeOut={true}
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

export default LayoutExampleOnClose;
