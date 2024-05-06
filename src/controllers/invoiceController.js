const { Invoice, Company } = require('../models');
const { Op } = require('sequelize');

const getInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.findAll();
        res.json(invoices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.findByPk(req.params.id);
        if (invoice) {
            res.json(invoice);
        } else {
            res.status(404).json({ message: 'Factura no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.create(req.body);
        res.status(201).json(invoice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.findByPk(req.params.id);
        if (invoice) {
            await invoice.update(req.body);
            res.json(invoice);
        } else {
            res.status(404).json({ message: 'Factura no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.findByPk(req.params.id);
        if (invoice) {
            await invoice.destroy();
            res.json({ message: 'Factura eliminada' });
        } else {
            res.status(404).json({ message: 'Factura no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getInvoicesByCompany = async (req, res) => {
    try {
        const invoices = await Invoice.findAll({
            include: {
                model: Company,
                where: {
                    id: req.params.id
                }
            }
        });
        res.json(invoices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getInvoicesByDate = async (req, res) => {
    try {
        const invoices = await Invoice.findAll({
            where: {
                startDate: {
                    [Op.gte]: req.query.startDate,
                    [Op.lte]: req.query.endDate
                }
            }
        });
        res.json(invoices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getInvoices,
    getInvoice,
    createInvoice,
    updateInvoice,
    deleteInvoice,
    getInvoicesByCompany,
    getInvoicesByDate
};