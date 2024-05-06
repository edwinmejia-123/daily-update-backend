const  { Role } = require('../models');
const { Op } = require('sequelize');

const getRoles = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };

const getRole = async (req, res) => {
    try {
        const role = await Role.findByPk(req.params.id);
        if (role) {
            res.json(role);
        } else {
            res.status(404).json({ message: 'Rol no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createRole = async (req, res) => {
    try {
        const role = await Role.create(req.body);
        res.status(201).json(role);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateRole = async (req, res) => {
    try {
        const role = await Role.findByPk(req.params.id);
        if (role) {
            await role.update(req.body);
            res.json(role);
        } else {
            res.status(404).json({ message: 'Rol no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteRole = async (req, res) => {
    try {
        const role = await Role.findByPk(req.params.id);
        if (role) {
            await role.destroy();
            res.json({ message: 'Rol eliminado' });
        } else {
            res.status(404).json({ message: 'Rol no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getRoles,
    getRole,
    createRole,
    updateRole,
    deleteRole
};