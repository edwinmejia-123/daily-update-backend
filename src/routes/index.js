const express = require("express");
const authRoutes = require("./authRoutes");
const employeesRoutes = require("./employeesRoutes");
const invoicesRoutes = require("./invoicesRoutes");
const companiesRoutes = require("./companiesRoutes");
const rolesRoutes = require("./rolesRoutes");
const reportsRoutes = require("./reportsRoutes");

const router = express.Router();

const routes = [
  { path: "/auth", router: authRoutes },
  { path: "/employees", router: employeesRoutes },
  { path: "/invoices", router: invoicesRoutes },
  { path: "/companies", router: companiesRoutes },
  { path: "/roles", router: rolesRoutes },
  { path: "/reports", router: reportsRoutes },
];

routes.forEach((route) => {
  router.use(route.path, route.router);
});

module.exports = router;