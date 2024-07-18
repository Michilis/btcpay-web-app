const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    btcpayUserId: {
      type: DataTypes.STRING
    },
    btcpayStoreId: {
      type: DataTypes.STRING
    },
    credits: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    }
  });
};
