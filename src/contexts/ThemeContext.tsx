import {
  createTheme,
  PaletteOptions,
  Theme,
  ThemeOptions,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import createPalette from '@mui/material/styles/createPalette';
import { useLocalStorage } from 'hooks-react-custom';
import * as React from 'react';

import { ChildrenProps } from '~/interfaces/common';
import { getDesignTokens } from '~/utils/helper/theme';

export type ITheme = 'dark' | 'light';
export const THEME_MODE_LOCAL = 'THEME_MODE_LOCAL';

interface IThemeContext {
  theme: Theme | null;
  toggleTheme: () => void;
  setTheme: (theme: ITheme) => void;
}

const themeState: IThemeContext = {
  theme: null,
  toggleTheme: () => {},
  setTheme: (theme: ITheme) => {},
};

export const ThemeContext = React.createContext<IThemeContext>(themeState);

export const ThemeProvider: React.FC<ChildrenProps> = (props) => {
  const { children } = props;

  const [currentTheme, setCurrentTheme] = useLocalStorage<ITheme>(THEME_MODE_LOCAL, 'light');

  const toggleTheme = React.useCallback(
    () => setCurrentTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    [setCurrentTheme]
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(currentTheme)), [currentTheme]);

  const values: IThemeContext = React.useMemo(
    () => ({
      theme,
      toggleTheme,
      setTheme: setCurrentTheme,
    }),
    [setCurrentTheme, theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={values}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
