//Calling methods

//Methods
const { Sequelize } = require('sequelize');
//Testing Connections
const sequelize = new Sequelize('MaplestoryDatabase','postgres','dog123!', {
  host: 'localhost',
  dialect: 'postgres'
});

async function dbConnectionTest(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.close();
    console.log('Connection has been closed successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

dbConnectionTest();