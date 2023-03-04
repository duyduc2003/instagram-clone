import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useTextEditorStyle = makeStyles((theme: Theme) =>
  createStyles({
    reactQuill: {
      '& .ql-editor.ql-blank::before': {
        color: theme.palette.text.primary,
        fontSize: '16px !important',
        opacity: 0.3,
      },
      '& p': {
        color: theme.palette.text.primary,
        fontSize: '16px !important',
      },
    },
  })
);
