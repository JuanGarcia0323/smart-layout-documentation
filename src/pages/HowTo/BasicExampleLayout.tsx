import ExampleComponentLayout from '@components/ExampleComponentLayout';
import ExampleForm from '@components/ExampleForm';
import List from '@components/List';

const ExampleHowTo = () => {
  return (
    <div className="w-full h-full">
      <ExampleComponentLayout id="how-to-example">
        <List></List>
        <div className="w-full h-full bg-primary"></div>
        <ExampleForm></ExampleForm>
      </ExampleComponentLayout>
    </div>
  );
};

export default ExampleHowTo;
