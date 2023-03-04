import { TextField } from '@mui/material';
import * as React from 'react';
import LoginWithGoogle from '~/components/LoginWithGoogle';
import { useLoginStyle } from './login.style';

interface AppLoginProps {}

const AppLogin: React.FC<AppLoginProps> = (props) => {
  const {} = props;

  const classes = useLoginStyle();

  return (
    <div className={classes.wrapLogin}>
      <div className={classes.inner}>
        <div>
          <div className={classes.wrapFormLogin}>
            <div className={classes.iconInstagram}></div>
            <div className={classes.btnLogin}>
              <LoginWithGoogle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLogin;
