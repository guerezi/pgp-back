const dreamService = require("../services/dream.services.js");

// Create and Save a new Dream
exports.create = (req, res, next) => {
  // padronizar nome de variável pls

  var model = {
    userId: req.headers.userid,
    dreamContent: req.body.dream_content,
    image: req.body.image,
  };

  dreamService.createDream(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

// Update a Dream by the id in the request
exports.update = (req, res, next) => {
  var model = {
    dreamId: req.params.id,
    userId: req.headers.userId,
    dreamContent: req.body.dream_content,
    image: req.body.image,
  };

  dreamService.updateDream(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

// Retrieve all Dreams from the database.
exports.findAll = (req, res, next) => {
  /// REVER ESSE FILTRO AQUI, NÃO TEM NECESSIDADE
  var model = {
    dreamContent: req.query.dreamContent,
  };

  dreamService.getDreams(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

// Find a single Dream with an id
exports.findOne = (req, res, next) => {
  var model = {
    dreamId: req.params.id,
  };

  dreamService.getDreamById(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

// Delete a Dream with the specified id in the request
exports.delete = (req, res, next) => {
  var model = {
    dreamId: req.params.id,
  };

  dreamService.deleteDream(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};
