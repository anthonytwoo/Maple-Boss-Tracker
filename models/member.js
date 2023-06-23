const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('MaplestoryDatabase','postgres','dog123!', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
  });

const member = sequelize.define('Member',{
    memberID: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      memberName:{ 
        type: DataTypes.STRING,
        allowNull: false
      }
},{freezeTableName:true,timeStamp:false,createdAt:false});
 
//Creating Table to Database
async function createModel(){
    try {
      await sequelize.sync({force:true});
      await console.log('Member Table was successfully updated.');
      await sequelize.close();
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  createModel();