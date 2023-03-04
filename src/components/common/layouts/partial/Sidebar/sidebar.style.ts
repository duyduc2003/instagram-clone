import { Box, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useSidebarStyled = makeStyles((theme: Theme) =>
  createStyles({
    wrapSidebar: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      padding: '8px 12px 20px',
      backgroundColor: theme.palette.background.paper,
      zIndex: 10000,
      display: 'flex',
      flexDirection: 'column',
      borderRight: `1px solid ${
        theme.palette.mode === 'light' ? 'rgb(219, 219, 219)' : 'rgb(38, 38, 38)'
      }`,
      '@media (max-width:767px)': {
        display: 'none',
      },
    },
    iconInstagram: {
      padding: '25px 12px 16px',
      color: theme.palette.mode === 'light' ? 'rgb(38, 38, 38)' : 'rgb(245,245,245)',
      display: 'flex',
      minHeight: '92px',
    },
    nav: {
      display: 'flex',
      flexDirection: 'column',
      listStyle: 'none',
      flex: '1',
      '@media (max-width:767px)': {
        display: 'none',
      },
    },
    wrapNavItem: {
      border: 'none',
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      margin: '4px 0px',
      padding: 12,
      cursor: 'pointer',
      borderRadius: 24,
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: theme.palette.mode === 'light' ? 'rgb(250, 250, 250)' : 'rgb(18, 18, 18)',
      },
      '&:active': {
        opacity: 0.5,
        display: 'flex',
        alignItems: 'center',
      },
      '&:hover .icon-nav-link': {
        transition: 'all 0.1s linear',
        transform: 'scale(1.07)',
      },
      '& .icon-nav-link': {
        display: 'flex',
        alignItems: 'center',
      },
      '& p': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    colorBadge: {
      backgroundColor: 'rgb(255, 48, 64) !important',
      color: 'white !important',
    },
    tooltipNavItem: {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.default,
    },
    link: {
      display: 'block',
    },
  })
);
