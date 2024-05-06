const { Report, Employee, Company } = require('../models');
const { Invoice } = require('../models');
const { Op } = require('sequelize');
const {EmployeeCompany} = require('../models/');
const { get } = require('../routes/authRoutes');

const getReports = async (req, res) => {
    try {
        const reports = await Report.findAll();
        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
const getReport = async (req, res) => {
    try {
        const report = await Report.findByPk(req.params.id);
        if (report) {
            res.json(report);
        } else {
            res.status(404).json({ message: 'Reporte no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const createReport = async (req, res) => {
    try {
        const report = await Report.create(req.body);
        res.status(201).json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const updateReport = async (req, res) => {
    try {
        const report = await Report.findByPk(req.params.id);
        if (report) {
            await report.update(req.body);
            res.json(report);
        } else {
            res.status(404).json({ message: 'Reporte no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteReport = async (req, res) => {
    try {
        const report = await Report.findByPk(req.params.id);
        if (report) {
            await report.destroy();
            res.json({ message: 'Reporte eliminado' });
        } else {
            res.status(404).json({ message: 'Reporte no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getReportsByEmployee = async (req, res) => {
    try {
        const reports = await Report.findAll({
            include: {
                model: EmployeeCompany,
                where: {
                    employee_id: req.params.id
                }
            }
        });
        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getReportsByCompany = async (req, res) => {
    try {
        const reports = await Report.findAll({
            include: {
                model: EmployeeCompany,
                where: {
                    company_id: req.params.id
                }
            }
        });
        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getEmployeesWithReports = async (req, res) => {
    try {
        const employees = await Empleado.findAll({
            include: {
                model: EmployeeCompany,
                include: {
                    model: Report,
                    required: true,  // Only include employees who have reports
                },
                required: true,  // Only include employees associated with a company
            },
        });
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getReports,
    getReport,
    createReport,
    updateReport,
    deleteReport,
    getEmployeesWithReports,
    getReportsByEmployee,
    getReportsByCompany
};
