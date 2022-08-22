import { Routes, Route } from 'react-router-dom';
import ChatList from 'pages/Chatting/ChatList/ChatList';
import Main from 'pages/Main/Main';
import MBTI from 'pages/MBTI/MBTI';
import Mypage from 'pages/Mypage/Mypage';
import NoticeBoard from 'pages/NoticeBoard/NoticeBoard';
import Nav from 'pages/components/Nav/Nav';
import Footer from 'pages/components/Footer/Footer';

const MainRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/chatting-list" element={<ChatList />} />
        <Route path="/mbti" element={<MBTI />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/noticeboard" element={<NoticeBoard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
