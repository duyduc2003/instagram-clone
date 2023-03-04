import * as React from 'react';
import AppLogin from '~/components/Login';
import { IPage } from '~/interfaces/common';
import { routePaths } from '~/utils/routes';

const Login: IPage = () => {
  return (
    <div>
      <AppLogin />
    </div>
  );
};

Login.options = {
  route: routePaths.login,
};

export default Login;
