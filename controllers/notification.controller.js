const notificationService = require("../services/notification.services");

exports.create = (req, res, next) => {
  var model = {
    user_id: req.headers.user_id,
    readed: req.body.readed,
    content: req.body.content,
    dream_id: req.body.dream_id,
  };

  notificationService.createNotification(model, (error, results) => {
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
    readed: req.body.readed,
    content: req.body.content,
    dream_id: req.body.dream_id,
  };

  notificationService.updateNotification(model, (error, results) => {
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

  notificationService.getNotifications(model, (error, results) => {
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
    notification_id: req.params.id,
    user_id: req.headers.user_id,
  };

  notificationService.getNotificationById(model, (error, results) => {
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
    notification_id: req.params.id,
    user_id: req.headers.user_id,
  };

  notificationService.deleteNotification(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};
