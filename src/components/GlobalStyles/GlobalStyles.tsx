import * as React from 'react';

import { ChildrenProps } from '~/interfaces/common';

import 'normalize.css';
import 'animate.css';

import './global.scss';

const GlobalStyles: React.FC<ChildrenProps> = ({ children }) => <>{children}</>;

export default GlobalStyles;
