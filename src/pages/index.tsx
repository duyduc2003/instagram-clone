import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { EmptyLayout } from '~/components/common/layouts';
import { ILayout, IPage } from '~/interfaces/common';

import Home from './Home';
import Inbox from './Inbox';
import Login from './Login';
import NotFound from './NotFound';
import Notifications from './Notifications';
import Profile from './Profile';
import Setting from './Setting';

const pages: IPage[] = [NotFound, Home, Login, Setting, Inbox, Profile, Notifications];

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        {pages.map((Page, i) => {
          const { route, layout } = Page.options;
          const Layout: ILayout = layout ?? EmptyLayout;
          return (
            <Route
              key={`${i}-${route}`}
              path={route}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
