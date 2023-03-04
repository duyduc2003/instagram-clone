import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useSearchStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: `${theme.palette.background.paper} !important`,
      backgroundImage: 'none !important',
      borderBottomRightRadius: '16px !important',
      borderTopRightRadius: '16px !important',
      borderWidth: '0 !important',
      borderRightWidth: '0.8px !important',
      borderStyle: 'solid !important',
      borderRightColor:
        (theme.palette.mode === 'light' ? 'rgb(219,219,219)' : 'rgb(38,38,38)') + ' !important',
      boxShadow: '4px 0 24px rgba(0,0,0,.15)',
      overflow: 'hidden !important',
    },
    header: {
      margin: '8px 0',
      padding: '12px 14px 36px 24px',
      color: theme.palette.text.primary,
      fontSize: 24,
      fontWeight: 600,
    },
    wrapInputSearch: {
      paddingBottom: 24,
      borderWidth: 0,
      borderBottomWidth: 0.8,
      borderStyle: 'solid',
      borderBottomColor:
        (theme.palette.mode === 'light' ? 'rgb(219,219,219)' : 'rgb(38,38,38)') + ' !important',
    },
    inputSearch: {
      height: 40,
      margin: '0 16px',
    },
    bodySearch: {
      maxHeight: 'calc(100vh - 140px)',
      overflowY: 'auto',
      paddingTop: 12,
      paddingBottom: 50,
    },
    headBodySearch: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '6px 24px 8px 24px',
      fontSize: 16,
      fontWeight: 600,
      color: theme.palette.text.primary,
      '&>button': {
        background: 'transparent',
        color: 'rgb(0,149,246)',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 500,
        fontSize: 14,
        '&:hover': {
          color: theme.palette.text.primary,
        },
      },
    },
    wrapAccountSearch: {
      margin: '8px 0',
    },
    accountSearch: {
      cursor: 'pointer',
      padding: '8px 24px',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: theme.palette.mode === 'light' ? 'rgb(250, 250, 250)' : 'rgb(18, 18, 18)',
      },
      '&:active': {
        opacity: 0.5,
        display: 'flex',
        alignItems: 'center',
      },
      '& .avatar': {
        marginRight: 12,
      },
      '& .body': {
        fontSize: 14,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        '& .nickname': {
          color: theme.palette.text.primary,
          fontWeight: 600,
        },
        '& .name': {
          color: theme.palette.mode === 'light' ? 'rgb(142,142,142)' : 'rgb(168,168,168)',
        },
      },
    },
  })
);
