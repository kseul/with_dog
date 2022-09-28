import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import store from 'redux/store';
import userActions from 'redux/actions/user';
import Spinner from '../../components/spinner/Spinner';
import API from 'config';

const KakaoLoginRedirect = () => {
  const navigate = useNavigate();
  const KAKAO_CODE = new URL(window.location.href).searchParams.get('code');
  const [, setCookie] = useCookies(['userToken']);

  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 60);

  const handleKakaoToken = async () => {
    try {
      const googleResponse = await fetch(
        'https://kauth.kakao.com/oauth/token',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${KAKAO_CODE}`,
        }
      );
      const googleData = await googleResponse.json();
      const ACCESS_TOKEN = googleData.access_token;

      const serverResponse = await fetch(`${API.KAKAOTOKEN}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: ACCESS_TOKEN,
        }),
      });
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
      alert('카카오 로그인 실패하였습니다.');
      navigate('/signin');
    }
  };

  useEffect(() => {
    handleKakaoToken();
  });

  return <Spinner />;
};

export default KakaoLoginRedirect;
