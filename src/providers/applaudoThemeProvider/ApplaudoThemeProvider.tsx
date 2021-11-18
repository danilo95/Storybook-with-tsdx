import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { ApplaudoTheme } from '../../themes';
import { Props } from './ApplaudoThemeProvider.types';

function ApplaudoThemeProvider({ children }: Props) {
  return (
    <MuiThemeProvider theme={ApplaudoTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default ApplaudoThemeProvider;
