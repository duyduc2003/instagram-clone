import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useCropImageStyle = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: 'relative',
      width: '500px',
      height: '500px',
    },
  })
);
