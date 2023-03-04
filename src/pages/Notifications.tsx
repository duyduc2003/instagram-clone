import * as React from 'react';
import { MainLayout } from '~/components/common/layouts';
import { IPage } from '~/interfaces/common';
import { routePaths } from '~/utils/routes';

const Notifications: IPage = () => {
  return <div>Notifications</div>;
};

Notifications.options = {
  route: routePaths.notifications,
  layout: MainLayout,
};

export default Notifications;
