module.exports = app => {
  const websites = require('../controllers/website.controller.js');

  let router = require('express').Router();

  // Create a new website
  router.post('/', websites.create);

  // Retrieve all websites
  router.get('/', websites.findAll);

  // Retrieve a single website with id
  router.get('/:id', websites.findOne);

  // Update a website with id
  router.put('/:id', websites.update);

  // Delete a website with id
  router.delete('/:id', websites.delete);

  // Delete all websites
  router.delete('/', websites.deleteAll);

  app.use('/api/websites', router);
};