const userService = require("../services/user.services");

// Create and Save a new User
exports.login = (req, res, next) => {
  var model = {
    email: req.body.email,
    password: req.body.password,
  };

  userService.loginUser(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results.user_id,
    });
  });
};

// Create and Save a new User
exports.create = (req, res, next) => {
  var model = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  userService.createUser(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

// Update a User by the id in the request
exports.update = (req, res, next) => {
  var model = {
    user_id: req.headers.userId,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  userService.updateUser(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

// Retrieve all Users from the database.
exports.findAll = (req, res, next) => {
  userService.getUsers(req, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

// Find a single User with an id
exports.findOne = (req, res, next) => {
  var model = {
    user_id: req.params.id,
  };

  userService.getUserById(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

// Delete a User with the specified id in the request
exports.delete = (req, res, next) => {
  var model = {
    user_id: req.params.id,
  };

  userService.deleteUser(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};
