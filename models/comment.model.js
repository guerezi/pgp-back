module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define('Comments', {
    comment_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    image: {
      type: Sequelize.BLOB('long'),
      allowNull: true
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'user_id'
      }
    },
    dream_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Dreams',
        key: 'dream_id'
      }
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'Comments'
  });

  return Comment;
}