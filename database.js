const { Sequelize } = require('sequelize');
//Testing Connections
const sequelize = new Sequelize('MaplestoryDatabase','postgres','dog123!', {
  host: 'localhost',
  dialect: 'postgres'
});

//Creating Tables for Database
const member = sequelize.define('Member',{
  memberID: {
    primaryKey: true,
    autoIncrement: true,
    type: sequelize.DataTypes.Integer
  },
  memberName:{ 
    type: sequelize.DataTypes.String,
    allowNull: false
  }
},{freezeTableName:true});

const party = sequelize.define('Party',{
  PartyID: {
    primaryKey: true,
    autoIncrement: true,
    type: sequelize.DataTypes.Integer
  },
  partyName:{ 
    type: sequelize.DataTypes.String,
    allowNull: false
  },
  memberID:{ 
    type: sequelize.DataTypes.String,
    allowNull: false
  },
  timeID:{ 
    type: sequelize.DataTypes.Date,
    allowNull: false
  }
},{freezeTableName:true});

const boss = sequelize.define('Boss',{
  bossID: {
    primaryKey: true,
    autoIncrement: true,
    type: sequelize.DataTypes.Integer
  },
  bossName:{ 
    type: sequelize.DataTypes.String,
    allowNull: false
  },
  bossImage:{ 
    type: sequelize.DataTypes.String,
    allowNull: false
  },
  bossLevel:{ 
    type: sequelize.DataTypes.String,
    allowNull: false
  },
  partyName:{ 
    type: sequelize.DataTypes.Integer,
    allowNull: false
  },
  memberID:{ 
    type: sequelize.DataTypes.Integer,
    allowNull: false
  }
},{freezeTableName:true});
//Adding Table to Database
memberID.sync()
.then((data)=>{console.log("Successfully Synced Table")})
.catch((err)=>{console.log("Unsuccessfully Synced Table")});