const Sequelize = require('sequelize');

const Post = sequelize.define('Post', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    content: {
        type: DataTypes.TEXT
    },
    title: {
        type: DataTypes.STRING
    },
    media: {
        type: DataTypes.STRING
    },    
})