const db = require('../database/models/index')

const controller ={
    index: function(req,res){
        db.productos.findAll({
            include: [
                {association: 'clientes'}
            ],
            nest:true,
            raw:true
        })
        .then(function(data){
            console.log(data);
            res.render('index',{
            productos : data,
            usuarioLogueado: false,
    
        })
        })
        .catch(function(error){console.log(error);})
        
    
    }
}

module.exports = controller