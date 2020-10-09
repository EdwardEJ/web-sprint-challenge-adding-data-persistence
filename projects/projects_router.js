const express = require('express');

const Projects = require('./projects-model');

const router = express.Router()

router.get('/', (req, res) => {
  Projects.find()
    .then(projects => {
      res.status(200).json(projects)    
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Failed to get projects' });
  })
})