// models/index.js
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
/* new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
}); */

const Role = require('./role')(sequelize);
const User = require('./user')(sequelize);
const Employee = require('./employee')(sequelize);
const Company = require('./company')(sequelize);
const EmployeeCompany = require('./employeeCompany')(sequelize);
const Report = require('./report')(sequelize);
const Invoice = require('./Invoice')(sequelize);

User.belongsTo(Role, { foreignKey: 'roleId' });
Role.hasMany(User, { foreignKey: 'roleId' });

Employee.belongsTo(User, { foreignKey: 'userId' });

Employee.hasMany(EmployeeCompany, { foreignKey: 'employeeId' });
EmployeeCompany.belongsTo(Employee, { foreignKey: 'employeeId' });

Company.hasMany(EmployeeCompany, { foreignKey: 'companyId' });
EmployeeCompany.belongsTo(Company, { foreignKey: 'companyId' });

EmployeeCompany.hasMany(Report, { foreignKey: 'employeeCompanyId' });
Report.belongsTo(EmployeeCompany, { foreignKey: 'employeeCompanyId' });

Company.hasMany(Invoice, { foreignKey: 'companyId' });
Invoice.belongsTo(Company, { foreignKey: 'companyId' });

module.exports = {
  sequelize,
  Role,
  User,
  Employee,
  Company,
  EmployeeCompany,
  Report,
  Invoice
};