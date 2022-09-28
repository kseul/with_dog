import { Routes, Route } from 'react-router-dom';
import ChatList from 'pages/Chatting/ChatList';
import Mypage from 'pages/Mypage';
import Nav from 'pages/components/Nav';
import Footer from 'pages/components/Footer/Footer';
import MBTITest from 'pages/MBTI/MBTITest/MBTITest';
import MBTIResult from 'pages/MBTI/MBTIResult/MBTIResult';
import PrivateRouter from 'PrivateRouter';

const MainRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route element={<PrivateRouter authentication={true} />}>
          <Route path="/chatting-list" element={<ChatList />} />
          <Route path="/mypage" element={<Mypage />} />
        </Route>
        <Route path="/mbti" element={<MBTITest />} />
        <Route path="/mbti-result" element={<MBTIResult />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
