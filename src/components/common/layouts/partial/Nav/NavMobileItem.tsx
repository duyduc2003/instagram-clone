import { Avatar, Box } from '@mui/material';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavStyle } from './nav.style';

interface NavMobileItemProps {
  icon?: React.ReactNode;
  iconActive?: React.ReactNode;
  active?: boolean;
  avatar?: string;
  link?: string;
  onClick?: any;
}

const NavMobileItem: React.FC<NavMobileItemProps> = (props) => {
  const { icon, iconActive, active = false, avatar, link, onClick } = props;

  const location = useLocation();
  const classes = useNavStyle();

  const boxStyle: any = {};
  if (link) boxStyle.to = link;
  else boxStyle.onClick = onClick;

  return (
    <Box component={link ? Link : 'button'} className={classes.navMobileItem} {...boxStyle}>
      {avatar ? (
        <Avatar
          sx={{
            width: 24,
            height: 24,
          }}
          src={avatar}
        />
      ) : !active && location.pathname !== link ? (
        icon
      ) : (
        iconActive
      )}
    </Box>
  );
};

export default NavMobileItem;
