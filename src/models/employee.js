// models/employee.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Employee', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING
    },
    dui: {
      type: DataTypes.STRING,
      unique: true
    },
    birthDate: {
      type: DataTypes.DATEONLY
    },
    hireDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  });
};