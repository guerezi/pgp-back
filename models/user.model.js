module.exports = (sequelize, Sequelize) => {

  const User = sequelize.define('Users', {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    username: {
      type: Sequelize.STRING(30),
      allowNull: false,
      unique: true
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING(64),
      allowNull: false
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
    tableName: 'Users'
  });

  return User;
};
