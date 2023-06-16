const db = require('../database/models/index');
const bcrypt = require('bcryptjs')
const controlador = {
    register: function(req, res){
        res.render('register')
    },
    login: function(req,res){
        if(req.session.cliente != undefined){
            res.redirect('/')
        } else{
            res.render('login', {usuarioLogueado:false})
        }
    },
    perfil: function(req, res){
        let id = req.params.id
        let relaciones = {include:[{association: 'productos'}, {association: 'coment'}]}
        db.Cliente.findByPk(id, relaciones)
        .then(function(result){
            //return res.send(result)
            res.render('profile', {usuarioLogueado:true, clientes:result,})
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
    perfilEditPost:  function (req, res) {
        let idUser = req.params.id;
        let info = req.body;
        let errors = {};
        if (req.body.email == "") {
            errors.message = "El email está vacio";
            res.locals.errors = errors;
            return res.render('editar');
         } else {
         if (req.body.password != "") {
            const newPass = bcrypt.hashSync(info.password, 12)
            info.password = newPass}
            else {
                info.password = info.contraVieja
            }
            db.Cliente.update(info, {
                where: [{ id: idUser }],
            })
                .then((result) => {
                    return res.redirect("/users/perfil/" + idUser );
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, 
    create: function(req,res){
        let {email, nombre, password, fecha_de_nacimiento, dni, foto_de_perfil} = req.body
        let errors = {}
        if(req.body.email == "" ){
            errors.message = "El email no puede estar vacío."; 
            res.locals.errors = errors;
            return res.render('register'); 
        }
        else if(req.body.password == "" || req.body.password.length<2 ){
            errors.message = "La contraseña debe tener al menos 3 caracteres."; 
            res.locals.errors = errors; 
            return res.render('register'); 
        }
        else if(req.body.nombre == "" ){
            errors.message = "El nombre no puede estar vacio."; 
            res.locals.errors = errors; 
            return res.render('register'); 
        }
        else if(email.includes('@') && email.includes('.com')){
                db.Cliente.findOne({where: [{email: req.body.email}]})
                .then(function(resp){
                    if (resp != undefined) {
                        errors.message = 'El mail ya esta en uso';
                        res.locals.errors = errors; 
                        return res.render('register'); 
                    }
                    else{
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
                            }
                        })            
        }else{
            let errors= {}
            errors.message = 'Debes ingresar un email valido'
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
                res.redirect('/users/perfil/'+ req.session.cliente.id)
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