import Admin from 'pages/Admin/Admin';
import SignIn from 'pages/Login/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Login/Signup/Signup';
import NoticeBoard from 'pages/NoticeBoard/NoticeBoard';
import MainRouter from './pages/MainRouter/MainRouter';
import Main from 'pages/Main/Main';
import ChatRoom from 'pages/Chatting/ChatRoom';
import KakaoLogin from 'pages/Login/SignIn/kakaoLogin/KakaoLogin';
import QuillEditor from 'pages/NoticeBoard/QuillEditor/QuillEditor';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/noticeboard" element={<NoticeBoard />} />
        <Route path="/noticeboard/write" element={<QuillEditor />} />
        <Route path="/*" element={<MainRouter />} />
        <Route path="/admin/:value/*" element={<Admin />} />
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="/kakaoLogin" element={<KakaoLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
