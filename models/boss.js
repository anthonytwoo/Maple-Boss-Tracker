const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('MaplestoryDatabase','postgres','dog123!', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

const boss = sequelize.define('Boss',{
  bossID: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  bossName:{ 
    type: DataTypes.STRING,
    allowNull: false
  },
  bossImage:{ 
     type: DataTypes.STRING,
    allowNull: false
   },
   bossLevel:{ 
     type: DataTypes.STRING,
    allowNull: false
  },
  partyName:{ 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  partyID:{ 
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{freezeTableName:true,timeStamp:false,createdAt:false});

//Creating Table to Database
async function createModel(){
  try {
    await sequelize.sync({force:true});
    await console.log('Boss Table was successfully updated.');
    await sequelize.close();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

createModel();
