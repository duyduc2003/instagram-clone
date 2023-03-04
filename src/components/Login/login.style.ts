import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

import ImgIconInstagram from '~/assets/NL0hPV-L09m.png';

export const useLoginStyle = makeStyles((theme: Theme) =>
  createStyles({
    wrapLogin: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inner: {
      maxWidth: 350,
      width: '100%',
    },
    wrapFormLogin: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px 0',
      borderRadius: 1,
      border: '1px solid rgb(219,219,219)',
    },
    iconInstagram: {
      backgroundImage: `url(${ImgIconInstagram})`,
      backgroundPosition: '0px 0px',
      backgroundSize: '176px 186px',
      width: 174,
      height: 50,
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      margin: '36px 0 12px',
    },
    formLogin: {
      marginTop: 24,
      width: '100%',
    },
    btnLogin: {
      margin: '10px 0',
    },
  })
);
