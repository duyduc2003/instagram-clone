import * as React from 'react';
import { ChildrenProps, ILayout } from '~/interfaces/common';
import { Sidebar } from './partial';
import { NavMobile } from './partial/Nav';

const OnlySidebarLayout: ILayout = (props) => {
  const { children } = props;

  return (
    <>
      <Sidebar />
      <div>{children}</div>
      <NavMobile />
    </>
  );
};

export default OnlySidebarLayout;
