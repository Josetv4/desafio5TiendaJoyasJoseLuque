const express = require('express');
const router = express.Router();

const joyasController = require ("../controllers/joyasController");

router.get("/joyas", joyasController.getJoyas)
router.get("/joya/:id", joyasController.getJoyas)
router.get("/joyas/filtros", joyasController.getFiltros)

module.exports = router;