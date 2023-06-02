const db = require('../database/models/index');
const bcrypt = require('bcryptjs')
const controlador = {
    register: function(req, res){
        console.log(req.session)
        res.render('register', {usuarioLogueado:false})
    },
    login: function(req,res){
        res.render(
            'login', {usuarioLogueado:false}
        )
    },
    perfil: function(req, res){
        let id = req.params.id
        db.clientes.findByPk(id)
        .then(function(clientes){
            res.render('profile', {
                usuarioLogueado:true, 
                clientes:clientes,
            })
        })
        .catch(function(err){
            console.log(err)
        })
    },
    perfilEdit: function(req, res){
        let id = req.params.id
        db.clientes.findByPk(id)
        .then(function(clientes){
            res.render('editar', {
                usuarioLogueado:true,
                clientes:clientes
            })
        })
        .catch(function(err){
            console.log(err)
        })
    },
    create: function(req,res){
        let {email, nombre, password, fecha_de_nacimiento, dni, foto_de_perfil} = req.body
        let passEncriptada = bcrypt.hashSync(password, 12)
        db.clientes.create({
            email, 
            nombre, 
            password: passEncriptada, 
            fecha_de_nacimiento, 
            dni, 
            foto_de_perfil
        })
        .then(function(resp){   
            res.redirect('/users/perfil')
        })
        .catch(function(err){
            console.log(err)
        })
    },
    checkUser: function(req, res){
        let {email, password, rememberMe} = req.body
        db.clientes.findOne({
            where:{
                email:email
            },
            raw:true
        })
        
        .then(function(clientes){
            let comparacionPassword = bcrypt.compareSync(password, clientes.password)
            console.log('llega a validar el hash')
            if(comparacionPassword){
                req.session.usuarioLogueado  = {
                    id: clientes.id,
                    nombre: clientes.nombre,
                    email:clientes.email
                }
                if(rememberMe === 'on'){
                    res.cookie(
                        'rememberUser', 
                        {
                            id: clientes.id,
                            nombre: clientes.nombre,
                            email:clientes.email
                        },
                        {
                            maxAge: 1000 * 60 * 15
                        }
                    )
                }
                res.redirect('/users/perfil/'+ clientes.id)
            }
        })
        .catch(function(err){
            console.log(err)
        })
    },
    update: function(req, res){
        let id = req.params.id
        let {nombre, email} = req.body
        db.clientes.update({
            nombre:nombre,
            email:email
        },{
            where:{
                id: id
            }
        })
        .then(function(resp){
            res.redirect('/users/perfil/' + id)
        })
        .catch(function(err){
            console.log(err)
        })
    },
    delete: function(req, res){
        let id = req.params.id

        db.clientes.destroy({
            where:{
                id: id
            }
        })
        .then(function(resp){
            res.redirect('/')
        })
        .catch(function(err){
            console.log(err)
        })
    }
}

module.exports = controlador;