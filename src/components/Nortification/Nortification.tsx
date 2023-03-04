import { Box, Drawer } from '@mui/material';
import { useInput, useMediaQuery } from 'hooks-react-custom';
import * as React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { NavItem } from '~/components/common/layouts/partial/Sidebar/Nav';
import { IconHeartFill, IconHeart } from '~/components/icon';
import {
  sidebarLargeStore,
  tabNotificationIsOpenStore,
  tabSearchIsOpenStore,
} from '~/store/sidebarAtom';
import { useNoticeStyle } from './nor.style';

const Nortification = () => {
  const [openDrawer, setOpenDrawer] = useRecoilState(tabNotificationIsOpenStore);
  const setOpenTabSearch = useSetRecoilState(tabSearchIsOpenStore);
  const [, setSidebarLarge] = useRecoilState(sidebarLargeStore);
  const classes = useNoticeStyle();
  const matchQuery = useMediaQuery('min-width', '1264px');

  const handleToggleDrawer = React.useCallback(() => {
    setOpenDrawer((p) => !p);
    setSidebarLarge(openDrawer && matchQuery);
    setOpenTabSearch(false);
  }, [openDrawer, matchQuery]);

  const handleCloseDrawer = React.useCallback(() => {
    setOpenDrawer(false);
    setSidebarLarge(matchQuery);
  }, [matchQuery]);

  return (
    <>
      <NavItem
        title="Notifications"
        icon={<IconHeart />}
        iconActive={<IconHeartFill />}
        onClick={handleToggleDrawer}
        active={openDrawer}
      />
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={handleCloseDrawer}
        classes={{
          paper: classes.root,
        }}
      >
        <Box ml="72px">
          <Box width={400} py={1}>
            <div className={classes.header}>Nortifications</div>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default React.memo(Nortification);
