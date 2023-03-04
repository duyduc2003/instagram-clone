import * as React from 'react';
import { ILayout } from '~/interfaces/common';
import { Sidebar } from './partial';
import HeaderProfile from './partial/HeaderProfile';
import { NavMobile } from './partial/Nav';

const HeaderProfileLayout: ILayout = (props) => {
  const { children } = props;

  return (
    <>
      <HeaderProfile />
      <Sidebar />
      <div>{children}</div>
      <NavMobile />
    </>
  );
};

export default HeaderProfileLayout;
