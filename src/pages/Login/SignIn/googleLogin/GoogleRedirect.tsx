import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Spinner from 'pages/Login/components/spinner/Spinner';
import store from 'redux/store';
import userActions from 'redux/actions/user';

const GoogleRedirect = () => {
  const navigate = useNavigate();
  const GOOGLE_CODE = new URL(window.location.href).searchParams.get('code');

  const handleGoogleToken = () => {
    fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&code=${GOOGLE_CODE}&client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&client_secret=${process.env.REACT_APP_GOOGLE_CLIENT_SECRET}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          const ACCESS_TOKEN = data.access_token;
          fetch('https://togedog-dj.herokuapp.com/users/test/googletoken/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              token: ACCESS_TOKEN,
            }),
          })
            .then(res => {
              if (res.status === 200) {
                navigate('/');
                return res.json();
              }
            })
            .then(result => {
              const userData = result.user;
              store.dispatch(userActions.userAccess(true));
              store.dispatch(userActions.handleUserData(userData));
            });
        } else {
          alert('구글 로그인 실패하셨습니다!');
          navigate('/signin');
        }
      });
  };

  useEffect(() => {
    handleGoogleToken();
  });
  return <Spinner />;
};

export default GoogleRedirect;
