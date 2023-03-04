import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useNoticeStyle = makeStyles((theme: Theme) =>
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
    },
    header: {
      margin: '8px 0',
      padding: '12px 14px 36px 24px',
      color: theme.palette.text.primary,
      fontSize: 24,
      fontWeight: 600,
    },
  })
);
