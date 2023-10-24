import Input from './Input';

const ExampleForm = () => {
  return (
    <div className="w-full h-full border-primary border-2 flex flex-col items-center p-2 justify-around font-mono px-6 bg-background overflow-auto">
      <h1 className="font-bold uppercase">
        <span className="text-primary">New</span> User
      </h1>
      <div className="flex flex-col gap-8 w-full h-3/6">
        <Input title="Name"></Input>
        <Input title="Mail"></Input>
        <Input title="Password"></Input>
        <div className="flex items-center justify-center">
          <button className="button">Create</button>
        </div>
      </div>
    </div>
  );
};

export default ExampleForm;
