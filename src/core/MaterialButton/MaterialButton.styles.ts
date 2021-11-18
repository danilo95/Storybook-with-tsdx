import MuiButton from '@material-ui/core/Button';
import { createStyles, makeStyles, withStyles } from '@material-ui/styles';
import { MaterialButtonProps } from './MaterialButton.types';

export const useStyles = ({ size }: MaterialButtonProps) =>
  makeStyles(() => ({
    button: {
      height: size === 'small' ? '16px' : '48px',
      minWidth: size === 'small' ? '32px' : '48px',
    },
  }));

const StyledButton = withStyles(({ palette }) =>
  createStyles({
    root: {
      border: 'none',
      boxShadow: 'none',
      borderRadius: '8px',
      color: '#FFFFFF',
      backgroundColor: palette.primary.main,
      textAlign: 'center',

      '&:hover, &:active, &:focus': {
        boxShadow: 'none',
        border: `1px solid ${palette.secondary.main}`,
        backgroundColor: palette.secondary.main,
      },
    },
    label: {
      textTransform: 'none',
      fontStyle: 'normal',
    },

    outlined: {
      color: palette.secondary.main,
      backgroundColor: 'transparent',
      border: `1px solid ${palette.primary.main}`,
      textAlign: 'center',

      '&:hover, &:active, &:focus': {
        backgroundColor: palette.primary.main,
        border: `1px solid ${palette.secondary.main}`,
      },
    },
    text: {
      backgroundColor: 'transparent',
      border: 'none',
      color: palette.primary.main,
      '&:hover, &:active, &:focus': {
        backgroundColor: 'transparent',
        color: palette.secondary.main,
        border: 'none',
      },
    },
  })
)(MuiButton);

export default StyledButton;
