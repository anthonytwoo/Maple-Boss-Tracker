const {Sequelize, Op, Model, DataTypes} = require('sequelize');

sequelize.testDbConnection();


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

sequelize.close();