// Mini Open-World Heist Game Server

const express = require('express');
const { v4: uuidv4 } = require('uuid');
const http = require('http');
const socketIo = require('socket.io');
const missionRoutes = require('./routes/missions');
const characterRoutes = require('./routes/characters');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());

// Game API Routes
app.use('/api/missions', missionRoutes);
app.use('/api/characters', characterRoutes);

// Serve static assets (for VFX/SFX/graphics/animations)
app.use('/assets', express.static(__dirname + '/../assets'));

// Demo index route
app.get('/', (req, res) => {
  res.send('Mini Open-World Heist Game API');
});

// Socket.IO for real-time game events
io.on('connection', (socket) => {
  console.log('A player connected:', socket.id);

  socket.on('player-move', (data) => {
    // Broadcast player movement to other players
    socket.broadcast.emit('player-move', data);
  });

  socket.on('mission-update', (data) => {
    // Broadcast mission progress
    io.emit('mission-update', data);
  });

  socket.on('disconnect', () => {
    console.log('A player disconnected:', socket.id);
  });
});

// Deployment: listen on the PORT env or default to 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Game server running on port ${PORT}`);
});