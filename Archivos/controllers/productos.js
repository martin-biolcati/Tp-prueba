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
        let relaciones = {include:{association: 'prodclientes'
        , include:{association: 'coment'}
    }
    }
        data.Producto.findByPk(id,relaciones)
        .then(function(data){
            res.render('product', {
                usuarioLogueado:false,
                data
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
        let {nombre, nombre_prod, descripcion, fecha} = req.body
        let id = req.session.cliente.id
        let tituloEncriptado = bcrypt.hashSync(req.body.nombre_prod, 12)
        console.log(tituloEncriptado)

        data.Producto.create({
            cliente_id:id,
            nombre,
            nombre_prod,
            descripcion,
            fecha
        })
        .then(function(data){
            res.redirect('/users/perfil/')
        })
        .catch(function(err){
            console.log(err)
        })
    }
}

module.exports = controladores;