import React from 'react';
import { MaterialButtonProps } from './MaterialButton.types';
import StyledButton, { useStyles } from './MaterialButton.styles';

/**
 * this is an example of how to add documentation
 *
 * - Enhanced [MUI Button](https://mui.com/api/button/)<br><br>
 *
 *
 * <strong>NOTE:</strong> you can use other html elements like bullets
 * <ul>
 * <li>example</li>
 * </ul>
 *
 *
 */

const MaterialButton = ({
  size = 'large',
  children,
  variant = 'contained',
  ...rest
}: MaterialButtonProps) => {
  const classes = useStyles({ size })();
  return (
    <div>
      <StyledButton
        size={size}
        variant={variant}
        className={classes.button}
        {...rest}
      >
        {children}
      </StyledButton>
    </div>
  );
};

export default MaterialButton;
