import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import userActions from 'redux/actions/user';
import store from 'redux/store';
import Spinner from '../../components/spinner/Spinner';

const KakaoLoginRedirect = () => {
  const navigate = useNavigate();
  const KAKAO_CODE = new URL(window.location.href).searchParams.get('code');

  const handleKakaoToken = () => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          const ACCESS_TOKEN = data.access_token;
          fetch('https://togedog-dj.herokuapp.com/users/test/kakaotoken/', {
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
          alert('카카오 로그인 실패하셨습니다!');
          navigate('/signin');
        }
      });
  };

  useEffect(() => {
    handleKakaoToken();
  });

  return <Spinner />;
};

export default KakaoLoginRedirect;
