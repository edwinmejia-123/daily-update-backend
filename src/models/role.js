// models/role.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};