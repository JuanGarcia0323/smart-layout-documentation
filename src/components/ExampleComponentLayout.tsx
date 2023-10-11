import { ReactNode } from 'react';
import { ComponentLayout } from 'smart-layout';

const ExampleComponentLayout = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  return (
    <div className="w-full h-full border-2 border-primary p-2 bg-background rounded">
      <ComponentLayout id={id}>{children}</ComponentLayout>
    </div>
  );
};

export default ExampleComponentLayout;
