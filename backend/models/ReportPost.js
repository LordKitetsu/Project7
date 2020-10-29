const Sequelize = require('sequelize');

const ReportPost = sequelize.define('ReportPost', {
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    post_id: {
        type: DataTypes.INTEGER
    },
    report: {
        type: DataTypes.TEXT
    },
    
    
})