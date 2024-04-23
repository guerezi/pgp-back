const commentService = require("../services/comment.services.js");

exports.create = (req, res, next) => {
  var model = {
    user_id: req.headers.user_id,
    content: req.body.content,
    image: req.body.image,
    dream_id: req.body.dream_id,
  };

  commentService.createComment(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

exports.update = (req, res, next) => {
  var model = {
    user_id: req.headers.user_id,
    content: req.body.content,
    image: req.body.image,
    dream_id: req.body.dream_id,
  };

  commentService.updateCommment(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

exports.findAll = (req, res, next) => {
  var model = {
    user_id: req.headers.user_id,
  };

  commentService.getComments(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

exports.findOne = (req, res, next) => {
  var model = {
    comment_id: req.params.id,
  };

  commentService.getCommentById(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

exports.delete = (req, res, next) => {
  var model = {
    comment_id: req.params.id,
  };

  commentService.deleteComment(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};
