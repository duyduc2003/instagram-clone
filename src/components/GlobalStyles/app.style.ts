import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useAppStyle = makeStyles((theme: Theme) =>
  createStyles({
    bgApp: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      backgroundColor: theme.palette.background.paper,
    },
  })
);
