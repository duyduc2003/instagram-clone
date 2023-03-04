import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useMenuStyle = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      backgroundColor: theme?.palette.background.paper,
      color: theme?.palette.text.primary,
      width: 238,
      borderRadius: 6,
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.default,
      borderRadius: 6,
      overflow: 'hidden !important',
    },
    listItem: {
      height: 44,
      padding: '8px 16px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      userSelect: 'none',
      borderStyle: 'solid',
      borderWidth: 0,
      borderColor: theme.palette.divider,
      '&:first-child': {
        borderTop: 0,
      },
      '&:active': {
        opacity: 0.5,
        display: 'flex',
        alignItems: 'center',
      },
      '&:hover': {
        backgroundColor: theme.palette.mode === 'light' ? 'rgb(250, 250, 250)' : 'rgb(18, 18, 18)',
      },
      '& .title': {
        fontSize: 16,
        flex: 1,
      },
      '&[href]': {
        color: theme.palette.text.primary,
      },
    },
  })
);
