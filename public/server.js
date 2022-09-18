const express = require('express');
const SocketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = SocketIO(server, {
  cors: { origin: '*', credentials: true },
});

const router = express.Router();

router.get('/chat/', (req, res) => {
  res.send('hello world');
});

io.on('connection', socket => {
  socket.onAny(e => {
    console.log(io.sockets.adapter);
    console.log(`소켓이벤트: ${e}`);
    console.log(userId);
  });

  const userId = socket.id;
  console.log('연결✨');

  /* 초기 입장 메세지 전송 */
  socket.on('join', ({ nickname, room }) => {
    socket.join(room);

    io.to(room).emit('add_message', {
      user: '함께하개 관리자',
      text: `${nickname} 님이 들어왔어요.`,
    });

    // socket.broadcast.to(room).emit('add_message', {
    //   user: '함께하개 관리자',
    //   text: `${nickname} 님이 들어오셨습니다!`,
    // });
  });

  /* 클라로부터 Input message 데이터를 받아와서 메세지 전달 */
  socket.on(
    'send_message',
    (message, nickname, room, currentTime, callback) => {
      io.to(room).emit('add_message', {
        user: nickname,
        text: message,
        time: currentTime,
      });
      callback();
    }
  );

  /* 유저가 떠났을 때 */
  socket.on('disconnect', ({ nickname, room }) => {
    io.to(room).emit('add_message', {
      user: '함께하개 관리자',
      text: `${nickname} 님이 떠나셨어요.`,
    });
    console.log('유저가 떠났습니다.');
  });
});

app.use(router); // <-
server.listen(3000, () => console.log('hi'));
