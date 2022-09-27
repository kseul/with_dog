const express = require('express');
const SocketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = SocketIO(server, {
  cors: { origin: '*', credentials: true },
});

io.on('connection', socket => {
  socket.on('join', ({ nickname, room }) => {
    socket.join(room);

    io.to(room).emit('add_message', {
      user: '함께하개 관리자',
      text: `${nickname} 님이 들어왔어요.`,
    });
  });

  socket.on(
    'send_message',
    (message, nickname, room, currentTime, mbti, id, callback) => {
      io.to(room).emit('add_message', {
        user: nickname,
        text: message,
        time: currentTime,
        mbti,
        id,
        messageId: 1234,
      });
      callback();
    }
  );
});

server.listen(3000, () => console.log('hi'));
