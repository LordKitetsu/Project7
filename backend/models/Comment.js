const Sequelize = require('sequelize');

const Comment = sequelize.define('Comment', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    post_id: {
        type: DataTypes.INTEGER
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    content: {
        type: DataTypes.TEXT
    },  
})