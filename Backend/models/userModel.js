const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const user = sequelize.define('user',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userName:{
        type:Sequelize.STRING,
        allowNull:false,
        
    },
    emailid:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    mobileNo:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    
}

)
module.exports=user