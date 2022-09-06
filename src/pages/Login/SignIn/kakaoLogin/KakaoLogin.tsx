import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/spinner/Spinner';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const KAKAO_CODE = new URL(window.location.href).searchParams.get('code');

  const getAndSendKakaoToken = () => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          const ACCESS_TOKEN = data.access_token;
          fetch('https://togedog-dj.herokuapp.com/users/test/kakaotoken', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              token: ACCESS_TOKEN,
            }),
          })
            .then(res => res.json())
            .then(result => {
              localStorage.setItem('token', result.access_token);
              navigate('/');
            });
        } else {
          alert('카카오 로그인 실패하셨습니다!');
          navigate('/signin');
        }
      });
  };

  useEffect(() => {
    getAndSendKakaoToken();
  });

  return <Spinner />;
};

export default KakaoLogin;
