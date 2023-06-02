var express = require('express');
var router = express.Router();
const productos = require('../controllers/productos')

router.get('/productAdd', productos.productoAdd)
router.get('/producto', productos.productos)
router.get('/descripcion', productos.descripcion)
router.get('/buscador', productos.search)

module.exports = router;