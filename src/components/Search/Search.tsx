import { Box, Drawer } from '@mui/material';
import { useInput, useMediaQuery } from 'hooks-react-custom';
import * as React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { NavItem } from '~/components/common/layouts/partial/Sidebar/Nav';
import { IconLoading, IconSearch, IconSearchBold, IconSearchSmall } from '~/components/icon';
import {
  sidebarLargeStore,
  tabNotificationIsOpenStore,
  tabSearchIsOpenStore,
} from '~/store/sidebarAtom';
import { useSearchStyle } from './search.style';
import WrapAccountSearch from './WrapAccountSearch';
import Input from './Input';

const Search = () => {
  const { eventBind, hasValue, clear } = useInput('');
  const setOpenTabNor = useSetRecoilState(tabNotificationIsOpenStore);
  const [openDrawer, setOpenDrawer] = useRecoilState(tabSearchIsOpenStore);
  const [, setSidebarLarge] = useRecoilState(sidebarLargeStore);
  const classes = useSearchStyle();
  const matchQuery = useMediaQuery('min-width', '1264px');

  const handleToggleDrawer = React.useCallback(() => {
    setOpenDrawer((p) => !p);
    setSidebarLarge(openDrawer && matchQuery);
    setOpenTabNor(false);
  }, [openDrawer, matchQuery]);

  const handleCloseDrawer = React.useCallback(() => {
    setOpenDrawer(false);
    setSidebarLarge(matchQuery);
  }, [matchQuery]);

  return (
    <>
      <NavItem
        title="Search"
        icon={<IconSearch />}
        iconActive={<IconSearchBold />}
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
            <div className={classes.header}>Search</div>
            <div className={classes.wrapInputSearch}>
              <Input className={classes.inputSearch} cleanText={clear} {...eventBind} />
            </div>
            <div className={classes.bodySearch}>
              {!hasValue && (
                <div className={classes.headBodySearch}>
                  <div>Recent</div>
                  <button>Clear all</button>
                </div>
              )}
              <WrapAccountSearch />
            </div>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default React.memo(Search);
