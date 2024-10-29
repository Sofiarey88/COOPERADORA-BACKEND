const express = require("express");
const RUTAS_STATS = express.Router();
const { getStasts } = require("../controllers/stats");

RUTAS_STATS.route("/").get(getStasts);

module.exports = RUTAS_STATS;
