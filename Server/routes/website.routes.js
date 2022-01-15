module.exports = app => {
  const websites = require('../controllers/website.controller.js');

  let router = require('express').Router();

  // Create a new website
  router.post('/', websites.create);

  // Same stuff without the other files
  
  // router.post('/', (req, res) => {
  //   if (!req.body) {
  //     res.status(400).send({
  //       message: 'Content can not be empty!'
  //     });
  //   }
  
  //   const website = ({
  //     url: req.body.url,
  //     likes: req.body.likes,
  //     neutrals: req.body.neutrals,
  //     dislikes: req.body.dislikes
  //   });

  //   const sql = require('../models/db.js');
  //   sql.query('INSERT INTO websites SET ?', website, (err, data) => {
  //     if (err) {
  //       console.error('error: ', err);
  //       res.status(500).send({
  //         message: err.message || 'Some error occurred while creating the website.'
  //       });
  //       return;
  //     }

  //     console.log('Created website: ', { id: data.insertId, ...website });
  //     res.send(data);
  //   });
  // });

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