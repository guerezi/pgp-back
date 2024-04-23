module.exports = (sequelize, Sequelize) => {
  const Notification = sequelize.define('Notifications', {
    notification_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    readed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    content: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    dream_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Dreams',
        key: 'dream_id'
      }
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'user_id'
      }
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'Notifications'
  });

  return Notification;
};
