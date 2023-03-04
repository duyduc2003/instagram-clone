import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from 'hooks-react-custom';

import { IPage } from '~/interfaces/common';
import { MainLayout } from '~/components/common/layouts';
import { routePaths } from '~/utils/routes';

const Home: IPage = () => {
  useDocumentTitle('Instagram');

  return (
    <div>
      <h1>Home</h1>
      <div style={{ marginLeft: '500px' }}></div>
      <Link to={routePaths.login}>Login</Link>
    </div>
  );
};

Home.options = {
  route: routePaths.home,
  layout: MainLayout,
};

export default Home;
