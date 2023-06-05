var express = require('express');
var router = express.Router();
const usuarios = require('../controllers/usuarios')

router.get('/register', usuarios.register)
router.post('/register', usuarios.create)

router.get('/login', usuarios.login)
router.post('/login', usuarios.checkUser)

router.get('/perfil/', usuarios.perfil)
router.post('/delete/', usuarios.delete)

router.get('/editar/', usuarios.perfilEdit)
router.post('/editar/', usuarios.update)

module.exports = router;
