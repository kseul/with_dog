import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import store from 'redux/store';
import userActions from 'redux/actions/user';
import Spinner from 'pages/Login/components/spinner/Spinner';

const GoogleRedirect = () => {
  const navigate = useNavigate();
  const GOOGLE_CODE = new URL(window.location.href).searchParams.get('code');
  const [, setCookie] = useCookies(['userToken']);

  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 60);

  const handleGoogleToken = async () => {
    try {
      const kakaoResponse = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `grant_type=authorization_code&code=${GOOGLE_CODE}&client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&client_secret=${process.env.REACT_APP_GOOGLE_CLIENT_SECRET}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}`,
      });
      const kakaoData = await kakaoResponse.json();
      const ACCESS_TOKEN = kakaoData.access_token;

      const serverResponse = await fetch(
        'https://togedog-dj.herokuapp.com/users/test/googletoken/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            token: ACCESS_TOKEN,
          }),
        }
      );
      const serverData = await serverResponse.json();
      const userData = serverData.user;
      const accessToken = serverData.access_token;
      store.dispatch(userActions.userAccess(true));
      store.dispatch(userActions.handleUserData(userData));
      setCookie('userToken', accessToken, {
        path: '/',
        expires,
      });
      navigate('/');
    } catch (error) {
      alert('구글 로그인 실패하였습니다.');
      navigate('/signin');
    }
  };

  useEffect(() => {
    handleGoogleToken();
  });

  return <Spinner />;
};

export default GoogleRedirect;
