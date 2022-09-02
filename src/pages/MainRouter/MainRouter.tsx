import { Routes, Route } from 'react-router-dom';
import ChatList from 'pages/Chatting/ChatList/ChatList';
import Mypage from 'pages/Mypage/Mypage';
import Nav from 'pages/components/Nav/Nav';
import Footer from 'pages/components/Footer/Footer';
import MBTITest from 'pages/MBTI/MBTITest/MBTITest';

const MainRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/chatting-list" element={<ChatList />} />
        <Route path="/mbti" element={<MBTITest />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
