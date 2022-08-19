import { Routes, Route } from 'react-router-dom';
import Chatting from 'pages/Chatting/Chatting';
import Main from 'pages/Main/Main';
import MBTITest from 'pages/MBTI/MBTITest/MBTITest';
import Mypage from 'pages/Mypage/Mypage';
import NoticeBoard from 'pages/NoticeBoard/NoticeBoard';
import Nav from 'pages/components/Nav/Nav';
import Footer from 'pages/components/Footer/Footer';
import SignIn from 'pages/Login/SignIn/SignIn';

const MainRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/chatting" element={<Chatting />} />
        <Route path="/mbti" element={<MBTITest />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/noticeboard" element={<NoticeBoard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
