import { ReactNode } from 'react';
import { Link } from 'remix';

type Props = {
  children: ReactNode;
  className?: string;
  to: string;
};

export const LinkButton = (props: Props) => {
  const { children, className, to } = props;

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
    <Link
      className={classes}
      to={to}
    >
      {children}
    </Link>
  );
};
