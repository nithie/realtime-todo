const app = require('./server/app');
const server = require('http').Server(app);
const io = require('socket.io')(server);
require('./server/api/socket-server/')(io);

const winston = require('./winston');

server.listen(4000, () => {
  winston.log('info', 'Express server listening on port:', 4000);
});
