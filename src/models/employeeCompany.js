// models/employeeCompany.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('EmployeeCompany', {
    employeeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'employees',
        key: 'id'
      }
    },
    companyId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'companies',
        key: 'id'
      }
    }
  });
};