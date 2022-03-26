import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<any>;

export const Button = (props: Props) => {
  const { children, className, ...buttonProps } = props;

  const classes = [
    'flex',
    'items-center',
    'justify-center',
    'rounded-md',
    'border',
    'border-transparent',
    'px-4',
    'py-3',
    'text-base',
    'font-medium',
    'shadow-sm',
    'hover:bg-yellow-50',
    'sm:px-8',
    className,
  ].join(' ');

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
};
