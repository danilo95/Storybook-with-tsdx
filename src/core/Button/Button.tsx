import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from './Button.types';
import { useStyles } from './Button.styles';

const Button = ({ children, variant, ...props }: ButtonProps) => {
  const classes = useStyles();
  return (
    <>
      <button
        {...props}
        className={clsx(classes.root, {
          [classes.primary]: variant === 'primary',
          [classes.secondary]: variant === 'secondary',
        })}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
