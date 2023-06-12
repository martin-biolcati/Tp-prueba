const db = require('../database/models/index');
const bcrypt = require('bcryptjs')
const controlador = {
    register: function(req, res){
        /*let errors = {}
        if(req.body.email == "" && req.body.email){
            errors.message = "El email no puede estar vacío."; 
            res.locals.errors = errors;

            return res.render('register'); 
        }
        if(req.body.password == "" || req.body.password.length <3 ){
            errors.message = "La contraseña debe tener al menos 3 caracteres."; 
            res.locals.errors = errors; 
            return res.render('register'); 
        }*/
        res.render('register', {})
    },
    login: function(req,res){
        if(req.session.cliente != undefined){
            res.redirect('/')
        } else{
            res.render('login', {usuarioLogueado:false})
        }
    },
    perfil: function(req, res){
        let id = req.session.cliente.id
        db.Cliente.findByPk(id)
        .then(function(clientes){
            res.render('profile', {usuarioLogueado:true, clientes:clientes})
        })
        .catch(function(err){
            console.log(err)
        })
    },
    perfilEdit: function(req, res){
        let id = req.session.cliente.id
        db.Cliente.findByPk(id)
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
        if(
            (email.includes('@') && email.includes('.com')) &&
            (password.length > 2)
        ){
            let passEncriptada = bcrypt.hashSync(password, 12)
            db.Cliente.create({
                email, 
                nombre, 
                password: passEncriptada, 
                fecha_de_nacimiento, 
                dni, 
                foto_de_perfil
            })
            .then(function(resp){   
                console.log(resp);
                res.redirect('/users/login')
            })
            .catch(function(err){
                console.log(err)
            })
        } else{
            console.log(email, password);
            let errors= {}
            errors.message = 'Debes ingresar un informacion valida, email valido y contraseña de al menos 3 caracteres'
            res.locals.errors = errors
            res.render('register')
    }
    },
    checkUser: function(req, res){
        let {email, contraseña, rememberMe} = req.body
        console.log(req.body);
        console.log(rememberMe);
        db.Cliente.findOne({
            where:{
                email:email
            },
            raw:true
        })
        
        .then(function(clientes){
            if(clientes != null){
            let comparacionPassword = bcrypt.compareSync(contraseña, clientes.password)
            if(comparacionPassword){
                req.session.cliente  = {
                    id: clientes.id,
                    nombre: clientes.nombre,
                    email:clientes.email
                }
                if(rememberMe === 'on'){
                    res.cookie(
                        'rememberUser', 
                        {
                            id: clientes.id,
                        },
                        {
                            maxAge: 1000 * 60 * 15
                        }
                    )
                }
                res.redirect('/users/perfil/')
            }else{
                res.redirect('/users/register')
            }
        }else{
            res.redirect('/users/register')
        }
        })
        .catch(function(err){
            console.log(err)
        })
    },
    update: function(req, res){
        let id = req.session.cliente.id
        let {nombre, email} = req.body
        db.Cliente.update({
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
        let id = req.session.cliente.id

        db.Cliente.destroy({
            where:{
                id: id
            }
        })
        .then(function(resp){
            req.session.cliente = undefined
            res.redirect('/')
        })
        .catch(function(err){
            console.log(err)
        })
    }
}

module.exports = controlador;