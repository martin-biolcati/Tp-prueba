const data = require('../database/models/index');
let op = data.Sequelize.Op
let bcrypt = require('bcryptjs');

const controladores={
    productoAdd: function(req,res){
        if(req.session.cliente != undefined){
            res.render('product-add')
        }else{
            res.redirect('/users/login')
        } 
    },
    productos: function(req,res){
        res.render(
            'index',{ usuarioLogueado: false, productos: data.productos}
        )
    },
    descripcion: function(req, res){
        let id = req.params.id
        let relaciones = {include:[{association: 'prodclientes'},{association: 'coment', include : [{association : 'clientes'}]}]
            }
        data.Producto.findByPk(id,relaciones)
        .then(function(result){
           //return res.send(result)
           return res.render('product', {
                usuarioLogueado:false,
                data:result
            })
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
    },
    search: function(req, res){
        let loQueEstaBuscandoElUsuario = req.query.search

        data.Producto.findAll({
            where:{
                [op.or]: [
                {nombre : { [op.like]: `%${loQueEstaBuscandoElUsuario}%`}},
                {descripcion : { [op.like]: `%${loQueEstaBuscandoElUsuario}%`}}
                    ]
                },
            order: [
                ['created_at', 'DESC'], 
                ],
            raw:true
        })

        .then(function(datos){
            console.log(datos)
            let encontroResultados
            
            if(datos.length > 0){
                encontroResultados = true
            } else {
                encontroResultados = false
            }
            
            res.render(
                'buscador', 
                { 
                    usuarioLogueado: false,
                    busqueda: loQueEstaBuscandoElUsuario,
                    resultados: datos,
                    encontroResultados: encontroResultados
                }
                )
        })
        .catch(function(err){
            console.log(err)
        })

    },
    create: function(req, res){
        let {nombre,descripcion,imagen} = req.body
        let id = req.session.cliente.id
        let tituloEncriptado = bcrypt.hashSync(req.body.nombre, 12)
        console.log(tituloEncriptado)
        
        data.Producto.create({
            cliente_id:id,
            nombre,
            image:imagen,
            descripcion,
            
        })
        .then(function(data){
            console.log(nombre,descripcion)
            res.redirect('/users/perfil/')
        })
        .catch(function(err){
            console.log(err)
        })
    },
    createComentario: function(req,res){
        let {comentario} = req.body
        let id = req.session.cliente.id
        
        data.Comentario.create({
            cliente_id:id,
            comentario,
            producto_id: req.body.producto_id
        })
        .then(function(data){
            res.redirect('/productos/descripcion/'+ req.body.producto_id)
        })
        .catch(function(err){
            console.log(err)
        })
    },
    editar_prod: function(req, res){
        let id = req.params.id
        let relaciones = {include:[{association: 'prodclientes'},{association: 'coment'}]}
        data.Producto.findByPk(id, relaciones)
        .then(function(result){
        
            res.render('editar_prod', {
                usuarioLogueado:true,
                data: result
            })
        })
        .catch(function(err){
            console.log(err)
        })
    },
    editar_prod_post: function(req,res){
        let idProd = req.params.id;
        let idUser = req.session.cliente.id
        let info = req.body;
        let errors = {};
        if (req.body.nombre == "") {
            errors.message = "El nombre está vacio";
            res.locals.errors = errors;
            return res.render('editar');
         }
        else if (req.body.descripcion == "") {
            errors.message = "La descripcion está vacia";
            res.locals.errors = errors;
            return res.render('editar');
         }
        else if (req.body.imagen == "") {
            errors.message = "La URL de imagen está vacia";
            res.locals.errors = errors;
            return res.render('editar');
         }
        else {
            data.Producto.update(info, {
                where: [{ id: idProd }],
            })
                .then((result) => {
                    return res.redirect("/users/perfil/" + idUser  );
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
}

module.exports = controladores;