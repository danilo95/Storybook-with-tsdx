import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    minWidth: '100px',
    height: '32px',
    border: 'none',
    color: '#FFFFFF',
    borderRadius: ' 8px',
    '&:hover, &:active, &:focus': {
      border: `1px solid ${palette.secondary.main}`,
      cursor: 'pointer',
    },
  },
  primary: {
    background: palette.primary.main,
  },
  secondary: {
    background: palette.secondary.main,
    '&:hover, &:active, &:focus': {
      border: `1px solid ${palette.primary.main}`,
    },
  },
}));
