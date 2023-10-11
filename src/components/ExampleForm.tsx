import Input from './Input';

const ExampleForm = () => {
  return (
    <div className="w-full h-full border-primary border-2 flex flex-col items-center p-2 justify-around font-mono px-6 bg-background">
      <h1 className="font-bold uppercase">
        <span className="text-primary">New</span> User
      </h1>
      <div className="flex flex-col gap-8 w-full h-52">
        <Input title="Name"></Input>
        <Input title="Mail"></Input>
        <Input title="Password"></Input>
      </div>
      <button className="text-sm lg:text-base border-2 border-primary p-1 lg:p-2 rounded text-white hover:text-primary hover:border-secondary transition-colors duration-300 ease-in-out">
        Create
      </button>
    </div>
  );
};

export default ExampleForm;
