import { Avatar, Badge, Box, Typography } from '@mui/material';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HtmlTooltip } from '~/components/HtmlTooltip';

import { useSidebarStyled } from '../sidebar.style';

interface NavItemProps {
  id?: string;
  title: string;
  content?: string;
  icon?: React.ReactNode;
  iconActive?: React.ReactNode;
  href?: string;
  active?: boolean;
  avatar?: string;
  badge?: number;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const NavItem = React.forwardRef<HTMLDivElement, NavItemProps>((props, ref) => {
  const { id, active, icon, title, href, iconActive, avatar, content, badge, onClick } = props;

  const classes = useSidebarStyled();
  const location = useLocation();

  const boxProps: any = {};
  if (href) {
    boxProps.to = href;
  }

  const htmlTooltip = (
    <div>
      <Typography fontSize={14}>{content || title}</Typography>
    </div>
  );

  return (
    <HtmlTooltip title={htmlTooltip} placement="right" arrow enterDelay={800} enterNextDelay={500}>
      <Box
        ref={ref}
        component={href ? Link : 'button'}
        width="100%"
        aria-describedby={id}
        className={classes.wrapNavItem}
        onClick={onClick}
        {...boxProps}
      >
        <Badge
          badgeContent={badge}
          color="info"
          max={9}
          classes={{
            colorInfo: classes.colorBadge,
          }}
        >
          <div className="icon-nav-link">
            {avatar ? (
              <Avatar src={avatar} alt={title} sx={{ width: 24, height: 24 }} />
            ) : active || href === location.pathname ? (
              iconActive
            ) : (
              icon
            )}
          </div>
        </Badge>
        <Typography
          pl={2}
          fontWeight={active || href === location.pathname ? '700' : '400'}
          display="flex"
          alignItems="center"
        >
          {title}
        </Typography>
      </Box>
    </HtmlTooltip>
  );
});

export default React.memo(NavItem);
