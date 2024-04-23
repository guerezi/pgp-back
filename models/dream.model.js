module.exports = (sequelize, Sequelize) => {
  const Dream = sequelize.define('Dream', {
    dream_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dream_content: {
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
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'Dreams'
  });

  return Dream;
};
