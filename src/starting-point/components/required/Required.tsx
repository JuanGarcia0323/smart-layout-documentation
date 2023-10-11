import { IPropsRequired } from '@sp-interfaces';

const Required = ({ children, show }: IPropsRequired) => {
  return (
    <div className={`flex gap-2 items-center`}>
      {children}
      {!!show && <span className="font-bold text-error">*</span>}
    </div>
  );
};

export default Required;
