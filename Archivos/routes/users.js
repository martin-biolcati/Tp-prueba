var express = require('express');
var router = express.Router();
const usuarios = require('../controllers/usuarios')

router.get('/register', usuarios.register)
router.post('/register', usuarios.create)

router.get('/login', usuarios.login)
router.post('/login', usuarios.checkUser)

router.get('/perfil/:id', usuarios.perfil)
router.post('/delete/:id', usuarios.delete)

router.get('/editar/:id', usuarios.perfilEdit)
router.post('/editar/:id', usuarios.update)

module.exports = router;
