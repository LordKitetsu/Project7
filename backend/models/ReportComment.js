const Sequelize = require('sequelize');

const ReportComment = sequelize.define('ReportComment', {
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    comment_id: {
        type: DataTypes.INTEGER
    },
    report: {
        type: DataTypes.TEXT
    },
})