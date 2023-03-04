import { Box } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useMenuStyle } from './menu.style';

export interface MenuItemProps {
  title: string;
  icon?: React.ReactNode;
  href?: string;
  divider?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { href, icon, title, divider, onClick } = props;
  const classes = useMenuStyle();

  const boxProps: any = {};

  if (href) {
    boxProps.to = href;
  }

  return (
    <Box
      overflow="hidden"
      component={href ? Link : 'div'}
      className={classes.listItem}
      onClick={onClick}
      sx={{
        borderTopWidth: divider ? '5px' : '1px',
      }}
      {...boxProps}
    >
      <div className="title">{title}</div>
      {icon && <div className="icon">{icon}</div>}
    </Box>
  );
};

export default MenuItem;
