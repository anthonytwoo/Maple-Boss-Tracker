//Idk what this is anymore
//Variables
const { Sequelize } = require('sequelize');

//Creating Connections link as Variable
const sequelize = new Sequelize('MaplestoryDatabase','postgres','dog123!', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

/*
function dbConnectionTest(){

  sequelize.authenticate().then( ()=>{
    console.log('Connection has been established successfully.'); 
  }).catch((Error)=>{
    console.error('Unable to connect to the database:', error);
  }).then(()=>{
    //sequelize.close();
    //console.log('Connection has been closed successfully.');
  })
}

dbConnectionTest();
*/