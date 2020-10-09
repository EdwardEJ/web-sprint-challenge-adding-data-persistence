const express = require('express');
const projectsRouter = require('./projects/projects_router');
const helmet = require('helmet');

const server = express();

//middleware
server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
  res.send('Welcome');
});

module.exports = server;