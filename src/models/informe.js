// models/informe.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Informe', {
    file: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATEONLY
    },
    endDate: {
      type: DataTypes.DATEONLY
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