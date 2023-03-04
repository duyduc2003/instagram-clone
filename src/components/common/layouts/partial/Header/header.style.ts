import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useHeaderStyle = makeStyles((theme: Theme) =>
  createStyles({
    wrapHeader: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: theme.palette.background.paper,
      '@media (min-width:767px)': {
        display: 'none',
      },
    },
    headerInner: {
      height: 60,
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: `1px solid ${
        theme.palette.mode === 'light' ? 'rgb(219,219,219)' : 'rgb(54,54,54)'
      }`,
      '& a[href]': {
        color: theme.palette.text.primary,
      },
    },
    iconInstagram: {
      flex: 1,
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      '&>div:first-child': {
        flex: 1,
        width: 268,
      },
    },
  })
);
