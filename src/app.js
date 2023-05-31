const express = require('express');
const exphbs = require('express-handlebars');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/', require('./routes/views'));

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  socket.on('producto-creado', (product) => {
    io.emit('producto-creado', product);
  });

  socket.on('producto-eliminado', (product) => {
    io.emit('producto-eliminado', product);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  socket.on('producto-creado', (data) => {
    console.log('Producto creado:', data);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

