import { Box } from '@mui/material';
import classNames from 'classnames';
import { useMediaQuery } from 'hooks-react-custom';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { IconInstagram, IconInstagramText } from '~/components/icon';
import { sidebarLargeStore, tabSearchIsOpenStore } from '~/store/sidebarAtom';
import { routePaths } from '~/utils/routes';
import Menu from './Menu';
import { Nav } from './Nav';
import { useSidebarStyled } from './sidebar.style';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const {} = props;

  const [sidebarLarge, setSidebarLarge] = useRecoilState(sidebarLargeStore);
  const classes = useSidebarStyled();
  const matchQuery = useMediaQuery('min-width', '1264px');

  const tabSearchIsOpen = useRecoilValue(tabSearchIsOpenStore);

  React.useEffect(() => {
    setSidebarLarge(matchQuery);
  }, [matchQuery]);

  const sizeSidebarLarge = React.useMemo(
    () => sidebarLarge && !tabSearchIsOpen,
    [sidebarLarge, tabSearchIsOpen]
  );

  return (
    <Box
      className={classNames(classes.wrapSidebar)}
      sx={{
        width: sizeSidebarLarge ? 244 : 72,
      }}
    >
      <Box component={Link} to={routePaths.home} className={classNames(classes.iconInstagram)}>
        {!sizeSidebarLarge ? (
          <div className="animate__bounceIn">
            <IconInstagram />
          </div>
        ) : (
          <IconInstagramText />
        )}
      </Box>
      <Nav />
      <Menu />
    </Box>
  );
};

export default Sidebar;
