const Input = ({ title }: { title: string }) => {
  return (
    <div className={`w-full flex items-center gap-2 relative`}>
      <span className="absolute text-sm -top-[10px] left-5 bg-background">
        {title}
      </span>
      <input className="w-full border-2 border-primary rounded bg-transparent outline-none focus:outline-none px-2 text-sm h-10" />
    </div>
  );
};

export default Input;
