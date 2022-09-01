import { Routes, Route } from 'react-router-dom';
import ChatList from 'pages/Chatting/ChatList/ChatList';
import MBTI from 'pages/MBTI/MBTI';
import Mypage from 'pages/Mypage/Mypage';
import Nav from 'pages/components/Nav/Nav';
import Footer from 'pages/components/Footer/Footer';

const MainRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/chatting-list" element={<ChatList />} />
        <Route path="/mbti" element={<MBTI />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
