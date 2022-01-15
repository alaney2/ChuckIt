const Website = require('../models/website.model');

// Create and save a new Website
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  const website = new Website({
    url: req.body.url,
    likes: req.body.likes,
    neutrals: req.body.neutrals,
    dislikes: req.body.dislikes
  });

  Website.create(website, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the website.'
      });
    } else {
      res.send(data);
    }
  });
};

// Retrieve all Websites from the database
exports.findAll = (req, res) => {
  const url = req.query.url;

  Website.getAll(url, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving websites.'
      });
    } else {
      res.send(data);
    }
  });
};

// Find a single Website with id
exports.findOne = (req, res) => {
  Website.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(400).send({
          message: `Did not find website with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: `Error retrieving website with id ${req.params.id}.`
        });
      }
    } else {
      res.send(data);
    }
  });
};

// Update a Website identified by id in request
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  console.log(req.body);

  Website.updateById(req.params.id, new Website(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(400).send({
          message: `Did not find website with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: `Error updating website with id ${req.params.id}.`
        });
      }
    } else {
      res.send(data);
    }
  })
};

// Delete a Website with the specified id in request
exports.delete = (req, res) => {
  Website.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(400).send({
          message: `Did not find website with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: `Could not delete website with id ${req.params.id}`
        });
      }
    } else {
      res.send({ message: 'Website delete successfully!' });
    }
  });
};

// Delete all websites
exports.deleteAll = (req, res) => {
  Website.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all websites.'
      });
    } else {
      res.send({
        message: 'All websites deleted successfully!'
      });
    }
  })
}