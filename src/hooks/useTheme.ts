import * as React from 'react';

import { ThemeContext } from '~/contexts/ThemeContext';

const useTheme = () => React.useContext(ThemeContext);

export default useTheme;
