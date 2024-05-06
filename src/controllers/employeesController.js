const { Employee } = require("../models");
const { Company } = require("../models");
const { EmployeeCompany } = require("../models");
const { Report } = require("../models");
const { Invoice } = require("../models");
const { Op } = require("sequelize");
const employeeCompany = require("../models/employeeCompany");
const { get } = require("../routes/authRoutes");

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: "Empleado no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      await employee.update(req.body);
      res.json(employee);
    } else {
      res.status(404).json({ message: "Empleado no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      await employee.destroy();
      res.json({ message: "Empleado eliminado" });
    } else {
      res.status(404).json({ message: "Empleado no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* const getEmployeeReports = async (req, res) => {
    try {
        const reports = await Report.findAll({
            where: { employee_id: req.params.id }
        });
        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
} */

const getReportsByEmployee = async (req, res) => {
  try {
    const reports = await Report.findAll({
      include: {
        model: Employee,
        where: { id: req.params.id },
      },
    });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployeeInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.findAll({
      where: { employeeId: req.params.id },
    });
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployeeCompanies = async (req, res) => {
  try {
    const employeeCompanies = await EmployeeCompany.findAll({
      where: { employeeId: req.params.id },
    });
    res.json(employeeCompanies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployeeCompany = async (req, res) => {
  try {
    const employeeCompany = await EmployeeCompany.findOne({
      where: {
        employee_id: req.params.id,
        company_id: req.params.companyId,
      },
    });
    if (employeeCompany) {
      res.json(employeeCompany);
    } else {
      res.status(404).json({ message: "Empleado no encontrado en la empresa" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEmployeeCompany = async (req, res) => {
  try {
    const employeeCompany = await EmployeeCompany.create(req.body);
    res.status(201).json(employeeCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEmployeeCompany = async (req, res) => {
  try {
    const employeeCompany = await EmployeeCompany.findOne({
      where: {
        employee_id: req.params.id,
        company_id: req.params.companyId,
      },
    });
    if (employeeCompany) {
      await employeeCompany.update(req.body);
      res.json(employeeCompany);
    } else {
      res.status(404).json({ message: "Empleado no encontrado en la empresa" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEmployeeCompany = async (req, res) => {
  try {
    const employeeCompany = await EmployeeCompany.findOne({
      where: {
        employee_id: req.params.id,
        company_id: req.params.companyId,
      },
    });
    if (employeeCompany) {
      await employeeCompany.destroy();
      res.json({ message: "Empleado eliminado de la empresa" });
    } else {
      res.status(404).json({ message: "Empleado no encontrado en la empresa" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getReportsByEmployee,
  getEmployeeInvoices,
  getEmployeeCompanies,
  getEmployeeCompany,
  createEmployeeCompany,
  updateEmployeeCompany,
  deleteEmployeeCompany,
};
