const Sequelize = require('sequelize');

const Like = sequelize.define('Like', {
    post_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER
    },    
})