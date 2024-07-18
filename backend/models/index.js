const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_URI, {
  dialect: 'postgres',
  logging: false
});

const User = require('./User')(sequelize);
const Subscription = require('./Subscription')(sequelize);
const Store = require('./Store')(sequelize);

User.hasMany(Subscription, { foreignKey: 'userId' });
Subscription.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Store, { foreignKey: 'userId' });
Store.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync();

module.exports = {
  sequelize,
  User,
  Subscription,
  Store
};
