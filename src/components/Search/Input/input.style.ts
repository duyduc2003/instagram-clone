import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useInputStyle = makeStyles((theme: Theme) =>
  createStyles({
    wrapInput: {
      backgroundColor: theme.palette.mode === 'light' ? 'rgb(239,239,239)' : 'rgb(38,38,38)',
      borderRadius: 8,
      minHeight: 36,
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      '& .icon-search': {
        color: 'rgb(142, 142, 142)',
        display: 'flex',
        alignItems: 'center',
      },
      '& .icon-close': {
        color: 'rgb(142, 142, 142)',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      },
      '& input[type="text"]': {
        padding: '3px 16px',
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        width: '100%',
        height: '100%',
        flex: 1,
        minHeight: 36,
        fontSize: 16,
        color: theme.palette.text.primary,
      },
    },
  })
);
