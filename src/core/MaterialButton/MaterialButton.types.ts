import { ButtonProps as ButtonPropsMUI } from '@material-ui/core/Button';

export type ButtonCustomProps = {
  size?: 'small' | 'large';
};

export type MaterialButtonProps = Omit<
  ButtonPropsMUI,
  keyof ButtonCustomProps
> &
  ButtonCustomProps;

export type { ButtonClassKey, ButtonTypeMap } from '@material-ui/core/Button';
