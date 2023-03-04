import * as React from 'react';
import { ILayout } from '~/interfaces/common';

const EmptyLayout: ILayout = (props) => {
  const { children } = props;

  return <>{children}</>;
};

export default EmptyLayout;
