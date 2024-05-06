const { Company } = require("../models");
const { Employee } = require("../models");
const { EmployeeCompany } = require("../models");
const { Report } = require("../models");
const { Invoice } = require("../models");
const { Op } = require("sequelize");
const employeeCompany = require("../models/employeeCompany");

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

const getCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCompany = async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);
    if (company) {
      res.json(company);
    } else {
      res.status(404).json({ message: "Empresa no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCompany = async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);
    if (company) {
      await company.update(req.body);
      res.json(company);
    } else {
      res.status(404).json({ message: "Empresa no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);
    if (company) {
      await company.destroy();
      res.json({ message: "Empresa eliminada" });
    } else {
      res.status(404).json({ message: "Empresa no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getReports = async (req, res) => {
  try {
    const reports = await Report.findAll();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getReport = async (req, res) => {
  try {
    const report = await Report.findByPk(req.params.id);
    if (report) {
      res.json(report);
    } else {
      res.status(404).json({ message: "Reporte no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createReport = async (req, res) => {
  try {
    const report = await Report.create(req.body);
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateReport = async (req, res) => {
  try {
    const report = await Report.findByPk(req.params.id);
    if (report) {
      await report.update(req.body);
      res.json(report);
    } else {
      res.status(404).json({ message: "Reporte no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteReport = async (req, res) => {
  try {
    const report = await Report.findByPk(req.params.id);
    if (report) {
      await report.destroy();
      res.json({ message: "Reporte eliminado" });
    } else {
      res.status(404).json({ message: "Reporte no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.findAll();
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id);
    if (invoice) {
      res.json(invoice);
    } else {
      res.status(404).json({ message: "Factura no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id);
    if (invoice) {
      await invoice.update(req.body);
      res.json(invoice);
    } else {
      res.status(404).json({ message: "Factura no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id);
    if (invoice) {
      await invoice.destroy();
      res.json({ message: "Factura eliminada" });
    } else {
      res.status(404).json({ message: "Factura no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployeeCompanies = async (req, res) => {
  try {
    const employeeCompanies = await EmployeeCompany.findAll();
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

const getEmployeesByCompany = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: [
        {
          model: EmployeeCompany,
          where: {
            company_id: req.params.id,
          },
        },
      ],
    });
    res.json(employees);
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

const getEmployeeReports = async (req, res) => {
  try {
    const employeeReports = await Report.findAll({
      where: {
        employee_id: req.params.id,
      },
    });
    res.json(employeeReports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCompanyReports = async (req, res) => {
  try {
    const companyReports = await Report.findAll({
      where: {
        company_id: req.params.id,
      },
    });
    res.json(companyReports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployeeInvoices = async (req, res) => {
  try {
    const employeeInvoices = await Invoice.findAll({
      where: {
        employee_id: req.params.id,
      },
    });
    res.json(employeeInvoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCompanyInvoices = async (req, res) => {
  try {
    const companyInvoices = await Invoice.findAll({
      where: {
        company_id: req.params.id,
      },
    });
    res.json(companyInvoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployeeCompanyInvoices = async (req, res) => {
  try {
    const employeeCompanyInvoices = await Invoice.findAll({
      where: {
        employee_id: req.params.id,
        company_id: req.params.companyId,
      },
    });
    res.json(employeeCompanyInvoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEmployeesByCompany,
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getCompanies,
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany,
  getReports,
  getReport,
  createReport,
  updateReport,
  deleteReport,
  getInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  getEmployeeCompanies,
  getEmployeeCompany,
  createEmployeeCompany,
  updateEmployeeCompany,
  deleteEmployeeCompany,
  getEmployeeReports,
  getCompanyReports,
  getEmployeeInvoices,
  getCompanyInvoices,
  getEmployeeCompanyInvoices,
};
