const {Sequelize, Op, Model, DataTypes} = require('sequelize');


const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/postgres', {
    logging: console.log
});

const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

const closeDbConnection = async () => {
    await sequelize.close();
}

testDbConnection();

const Member = sequelize.define('Member', {
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  }
});

Member.sync().then(() => {
  console.log("Member Model synced");
});

module.exports = Member;

const woo = Member.create({
  username: "uwoo",
});

const members = async () => {
  await Member.findAll();
};

members();

// closeDbConnection();

module.exports = {sq: sequelize, testDbConnection, closeDbConnection};