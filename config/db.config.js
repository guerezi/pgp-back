const Sequelize = require('sequelize');

const sequelize = new Sequelize('', 'postgres', 'masterkey', {
  host: 'database-1.c1u42c8g6ic2.sa-east-1.rds.amazonaws.com',
  dialect: 'postgres',
  operatorsAliases: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize
};

db.User = require('../models/user.model')(sequelize, Sequelize);
db.Dream = require('../models/dream.model')(sequelize, Sequelize);
db.Notification = require('../models/notification.model')(sequelize, Sequelize);
db.Comment = require('../models/comment.model')(sequelize, Sequelize);

module.exports = db;