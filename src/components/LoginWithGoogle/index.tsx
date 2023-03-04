import * as React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { Box, Button } from '@mui/material';

interface LoginWithGoogleProps {}

const LoginWithGoogle: React.FC<LoginWithGoogleProps> = (props) => {
  const {} = props;

  return (
    <Box
      component={Button}
      color="#333"
      border="1px solid rgb(219,219,219)"
      display="flex"
      alignItems="center"
      gap={1}
      textTransform="none"
      onClick={() => {
        console.log(123);
      }}
    >
      <GoogleIcon />
      <div>Login With Google</div>
    </Box>
  );
};

export default LoginWithGoogle;
