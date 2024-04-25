// models/report.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Report', {
    ticketName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hours: {
      type: DataTypes.INTEGER
    },
    realizationDate: {
      type: DataTypes.DATEONLY
    },
    ticket: {
      type: DataTypes.STRING
    },
    branch: {
      type: DataTypes.STRING
    },
    pr: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    employeeCompanyId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'employeeCompanies',
        key: 'id'
      }
    }
  });
};