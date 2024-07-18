const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Store', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    btcpayStoreId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    credits: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    }
  });
};
