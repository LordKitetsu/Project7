const Sequelize = require('sequelize');

const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    consent: {
        type: DataTypes.BOOLEAN
    },
    role: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    }
    
})