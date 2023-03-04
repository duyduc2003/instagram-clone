import * as React from 'react';
import { ILayout } from '~/interfaces/common';
import { Sidebar } from './partial';
import Header from './partial/Header';
import { NavMobile } from './partial/Nav';

const MainLayout: ILayout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Sidebar />
      <div>{children}</div>
      <NavMobile />
    </>
  );
};

export default MainLayout;
