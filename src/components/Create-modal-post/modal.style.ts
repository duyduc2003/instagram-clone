import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useCreateStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      borderRadius: 12,
      maxHeight: 'calc(100% - 40px)',
      maxWidth: 500,
      width: '100%',
    },
    header: {
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0,
      borderBottomWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.mode === 'light' ? 'rgb(219,219,219)' : 'rgb(54,54,54)',
      paddingLeft: 20,
      paddingRight: 20,
    },
    titleHeader: {
      color: theme.palette.text.primary,
      fontWeight: '500 !important',
      flex: 1,
      textAlign: 'center',
    },
    arrowLeft: {
      color: theme.palette.text.primary,
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
    },
    btnNext: {
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
    bodySelectImage: {
      height: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& button.selectImage:hover': {
        backgroundColor: 'rgb(24, 119, 242)',
      },
    },
    dialogWrapper: {
      borderRadius: '12px !important',
    },
    modalDialogContainer: {
      maxWidth: '100%',
      width: 400,
      borderRadius: 12,
      '& button': {
        height: 48,
        fontSize: 14,
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        borderWidth: 0,
        borderTopWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.mode === 'light' ? 'rgb(219,219,219)' : 'rgb(54,54,54)',
        fontWeight: 400,
        color: theme.palette.text.primary,
        '&:first-child': {
          fontWeight: 700,
          color: 'rgb(237, 73, 86)',
        },
      },
    },
    dialogHeader: {
      textAlign: 'center',
      margin: '32px 0 0',
      paddingBottom: '16px',
      '& h1': {
        color: theme.palette.text.primary,
        fontWeight: 500,
        fontSize: 20,
        margin: 0,
        marginBottom: 8,
      },
      '& p': {
        color: 'rgb(142,142,142)',
      },
    },
    rootModalCaption: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      borderRadius: 12,
    },
    bodyModalCaption: {
      maxHeight: 500,
      display: 'flex',
    },
    bodyModalCaptionInner: {
      display: 'flex',
      maxHeight: 'calc(100% - 64px)',
      [theme.breakpoints.down('lg')]: {
        overflowY: 'auto',
        flexDirection: 'column-reverse',
        width: '100%',
      },
    },
  })
);
