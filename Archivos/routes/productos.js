var express = require('express');
var router = express.Router();
const productos = require('../controllers/productos')

router.get('/productAdd', productos.productoAdd)
router.get('/producto', productos.productos)
router.get('/descripcion/:id', productos.descripcion)
router.get('/buscador', productos.search)
router.post('/product-add', productos.create )
router.post('/comentarioAdd', productos.createComentario )

router.get('/editar_prod/:id', productos.editar_prod)
router.post('/editar_prod/:id', productos.editar_prod_post )

router.post('/delete', productos.delete)


module.exports = router;