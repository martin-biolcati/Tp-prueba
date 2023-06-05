const data = require('../database/models/index');
let op = data.Sequelize.Op
let bcrypt = require('bcryptjs')

const controladores={
    productoAdd: function(req,res){
        res.render(
            'product-add',
        )
    },
    productos: function(req,res){
        res.render(
            'index',{ usuarioLogueado: false, productos: data.productos}
        )
    },
    descripcion: function(req, res){
        let id = req.params.id
        console.log(req.session)
        data.Producto.findByPk(id, {raw: true})
        .then(function(data){
            res.render('product', {
                usuarioLogueado:false,
                producto: data
            })
        })
        .catch(function(err){
            console.log(err)
        })
    },
    search: function(req, res){
        let loQueEstaBuscandoElUsuario = req.query.search

        data.productos.findAll({
            where:{
                nombre : {
                    [op.like]: `%${loQueEstaBuscandoElUsuario}%`
                }
            },
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

        let tituloEncriptado = bcrypt.hashSync(req.body.title, 10)
        console.log(tituloEncriptado)

        let comparacion = bcrypt.compareSync('Pepe3000', tituloEncriptado)
        console.log(comparacion)

        db.Movies.create({
            title: req.body.title,
            release_date: req.body.release_date,
            rating: req.body.rating,
            genre_id: req.body.genre_id
        })
        .then(function(data){
            res.redirect('/')
        })
        .catch(function(err){
            console.log(err)
        })
    }
}

module.exports = controladores;