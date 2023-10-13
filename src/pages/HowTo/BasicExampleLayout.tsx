import ExampleComponentLayout from '@components/ExampleComponentLayout';
import ExampleForm from '@components/ExampleForm';
import List from '@components/List';
import { customLayout } from 'smart-layout';

const layoutAdvanceExample: customLayout = {
  name: 'Advance',
  layout: [
    {
      id: 1697140248385,
      key: '1697140248385',
      orientation: 'vertical',
      parentId: -1,
    },
    {
      id: 0,
      key: '0how-to-example',
      orientation: 'horizontal',
      parentId: 1697140248385,
    },
    {
      id: 1,
      key: '1how-to-example',
      orientation: 'horizontal',
      parentId: 1697140248385,
    },
    {
      id: 2,
      key: '2how-to-example',
      orientation: 'horizontal',
      parentId: -1,
    },
  ],
};

const ExampleHowTo = () => {
  return (
    <div className="w-full h-full">
      <ExampleComponentLayout id="how-to-example" layout={layoutAdvanceExample}>
        <List></List>
        <div className="w-full h-full bg-primary"></div>
        <ExampleForm></ExampleForm>
      </ExampleComponentLayout>
    </div>
  );
};

export default ExampleHowTo;
