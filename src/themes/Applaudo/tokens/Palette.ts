import createPalette from '@material-ui/core/styles/createPalette';
import * as colors from '../styles/Colors';
import { PaletteOptions as MuiPaletteOptions } from '@material-ui/core/styles/createPalette';

export const paletteOptions: MuiPaletteOptions = {
  primary: {
    main: colors.ApplaudoRed,
    contrastText: colors.ApplaudoPurple,
  },
  secondary: {
    main: colors.ApplaudoNavyBlue,
    contrastText: colors.ApplaudoLigth,
  },
};

const palette = createPalette(paletteOptions);

export default palette;
