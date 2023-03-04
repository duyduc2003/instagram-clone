import { PaletteMode, ThemeOptions } from '@mui/material';

import darkMode from './dark';
import lightMode from './light';

const getPalette = (theme: PaletteMode) => (theme === 'dark' ? darkMode : lightMode);

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
  return {
    palette: {
      ...getPalette(mode),
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 876,
        xl: 1264,
      },
    },
    typography: {
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif`,
    },
  };
};
