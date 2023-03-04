import { MainLayout } from '~/components/common/layouts';
import { IPage } from '~/interfaces/common';
import { routePaths } from '~/utils/routes';

const Setting: IPage = () => {
  return <>Setting page</>;
};

Setting.options = {
  route: routePaths.setting,
  layout: MainLayout,
};

export default Setting;
