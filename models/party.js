const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('MaplestoryDatabase','postgres','dog123!', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
  });
 
const party = sequelize.define('Party',{
    partyID: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    partyName:{ 
      type: DataTypes.STRING,
      allowNull: false
    },
    memberID:{ 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    timeID:{ 
      type: DataTypes.DATE,
      allowNull: false
    }
  },{freezeTableName:true,timeStamp:false,createdAt:false});
  //Creating Table to Database
  async function updateModel(){
    try {
      await sequelize.sync({force:true});
      await console.log('Party Table was successfully updated.');
      await sequelize.close();
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  updateModel();
  
  module.exports= {party};