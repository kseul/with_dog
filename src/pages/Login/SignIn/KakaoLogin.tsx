import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const KAKAO_CODE = new URL(window.location.href).searchParams.get('code');
  // location.search

  const getKakaoToken = () => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          const ACCESS_TOKEN = data.access_token;
          localStorage.setItem('token', ACCESS_TOKEN);
          navigate('/');
          alert('로그인 성공!');
        } else {
          alert('로그인에 실패하셨습니다!');
          navigate('/signin');
        }
      });
  };

  useEffect(() => {
    getKakaoToken();
  });

  return <div>카카오 로그인이다 임마!</div>;
};

export default KakaoLogin;
