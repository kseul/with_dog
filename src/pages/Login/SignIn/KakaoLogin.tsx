import { useLocation, useNavigate } from 'react-router-dom';

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = new URL(window.location.href).searchParams.get('code');

  const getKakaoToken = () => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then()
      .then();
  };

  return <div>카카오 로그인이다 임마!</div>;
};

export default KakaoLogin;
