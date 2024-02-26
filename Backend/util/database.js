const Sequelize = require('sequelize')
const sequelize= new Sequelize('appointment-app','root','sean90',{
    dialect: 'mysql',
    host: 'localhost'
  })

module.exports=sequelize;