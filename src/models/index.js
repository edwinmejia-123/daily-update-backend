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
const Informe = require('./informe')(sequelize);

User.belongsTo(Role, { foreignKey: 'roleId' });
Employee.belongsTo(User, { foreignKey: 'userId' });
EmployeeCompany.belongsTo(Employee, { foreignKey: 'employeeId' });
EmployeeCompany.belongsTo(Company, { foreignKey: 'companyId' });
Report.belongsTo(EmployeeCompany, { foreignKey: 'employeeCompanyId' });
Informe.belongsTo(Company, { foreignKey: 'companyId' });

module.exports = {
  sequelize,
  Role,
  User,
  Employee,
  Company,
  EmployeeCompany,
  Report,
  Informe
};