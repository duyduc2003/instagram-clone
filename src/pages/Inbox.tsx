import * as React from 'react';

import OnlySidebarLayout from '~/components/common/layouts/OnlySidebarLayout';
import { IPage } from '~/interfaces/common';
import { routePaths } from '~/utils/routes';

const Inbox: IPage = () => {
  return <div>Inbox</div>;
};

Inbox.options = {
  route: routePaths.inbox,
  layout: OnlySidebarLayout,
};

export default Inbox;
