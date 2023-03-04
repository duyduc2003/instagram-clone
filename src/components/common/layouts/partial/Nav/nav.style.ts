import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useNavStyle = makeStyles((theme: Theme) =>
  createStyles({
    wrapNav: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      '@media (min-width:767px)': {
        display: 'none',
      },
    },
    navInner: {
      height: 50,
      display: 'flex',
      justifyContent: 'space-evenly',
      borderTop: `1px solid ${
        theme.palette.mode === 'light' ? 'rgb(219,219,219)' : 'rgb(54,54,54)'
      }`,
      backgroundColor: theme.palette.background.paper,
    },
    navMobileItem: {
      width: 49,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'all 0.1s linear',
      color: theme.palette.text.primary,
      border: 'none',
      backgroundColor: 'transparent',
      '&:hover': {
        transform: 'scale(1.01)',
      },
    },
  })
);
