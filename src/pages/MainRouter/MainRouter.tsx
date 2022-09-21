import { Routes, Route } from 'react-router-dom';
import ChatList from 'pages/Chatting/ChatList';
import Mypage from 'pages/Mypage/Mypage';
import Nav from 'pages/components/Nav';
import Footer from 'pages/components/Footer/Footer';
import MBTITest from 'pages/MBTI/MBTITest/MBTITest';
import MBTIResult from 'pages/MBTI/MBTIResult/MBTIResult';
import initialize from 'pages/MBTI/MBTIResult/kakaoShare/KakaoShareData';
import { useEffect } from 'react';

const MainRouter = () => {
  useEffect(() => {
    initialize();
  }, []);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/chatting-list" element={<ChatList />} />
        <Route path="/mbti" element={<MBTITest />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mbti-result" element={<MBTIResult />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
