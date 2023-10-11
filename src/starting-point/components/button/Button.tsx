import Required from '@sp-components/required/Required';
import { IButtonProps } from '@sp-interfaces';
import { Button as AntButton } from 'antd';
import { cva } from 'class-variance-authority';

const buttonStyle = cva('button', {
  variants: {
    type: {
      primary: ['bg-primary'],
    },
  },
});

const Button = (props: IButtonProps) => {
  const { children, type, className, required } = props;
  return (
    <Required show={required}>
      <AntButton
        {...props}
        className={`${buttonStyle({
          type: type === 'primary' ? 'primary' : null,
        })} ${className} h-full w-full`}
      >
        {children}
      </AntButton>
    </Required>
  );
};

export default Button;
