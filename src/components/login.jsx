import React, { useEffect, useState} from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';
import { refreshTokenSetup } from '././utils/refreshToken.js'

const clientId = '607168265706-k6pvnqm47a7v168h2k7kkg3frn4qi3s5.apps.googleusercontent.com';

function Login() {

  const [token, setToken] = useState(null);
  const onSuccess = async (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍.`
    );
    await refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 `
    );
  };
  useEffect(() => {
    setToken(localStorage.getItem("authToken"))
  }, []);
  return (
    <div className={`md:mt-5 ${token && "hidden"}`}>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;