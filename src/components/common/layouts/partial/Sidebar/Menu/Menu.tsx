import { Box } from '@mui/material';
import Tippy from '@tippyjs/react/headless';
import { useBoolean } from 'hooks-react-custom';
import * as React from 'react';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';

import { IconMenu, IconMenuBold, IconMoon, IconSetting } from '~/components/icon';
import useTheme from '~/hooks/useTheme';
import { routePaths } from '~/utils/routes';
import { NavItem } from '../Nav';
import { useMenuStyle } from './menu.style';
import MenuItem, { MenuItemProps } from './MenuItem';

const Menu = () => {
  const [isOpen, actionOpen] = useBoolean(false);

  const classes = useMenuStyle();
  const { toggleTheme } = useTheme();
  const n = useNavigate();

  const rawsMenu: MenuItemProps[] = [
    { title: 'Settings', icon: <IconSetting />, href: routePaths.setting },
    { title: 'Switch appearance', icon: <IconMoon />, onClick: toggleTheme },
    {
      title: 'Log out',
      divider: true,
      onClick: () => {
        n(routePaths.login);
      },
    },
  ];

  const render = (attr: any) => (
    <Box component="div" className={classes.box} {...attr}>
      <div className={classes.list}>
        {rawsMenu.map((raw, i) => (
          <MenuItem key={`${i}-${raw.title}`} {...raw} />
        ))}
      </div>
    </Box>
  );

  return (
    <Tippy
      render={render}
      visible={isOpen}
      interactive
      placement="top-start"
      onClickOutside={actionOpen.setFalse}
    >
      <NavItem
        title="More"
        icon={<IconMenu />}
        iconActive={<IconMenuBold />}
        onClick={actionOpen.toggle}
        active={isOpen}
      />
    </Tippy>
  );
};

export default Menu;
