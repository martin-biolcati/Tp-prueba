module.exports = function(sequelize, DataTypes){
    let alias = 'Producto'
    let columnas = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        descripcion:{
            type: DataTypes.STRING
        },
        created_at:{
            type: DataTypes.DATE
        },
        updated_at:{
            type: DataTypes.DATE
        },
        deleted_at:{
            type: DataTypes.DATE
        },
        image:{
            type: DataTypes.STRING
        }

    }
    
    let config = {
        tablename: 'productos',
        timestamps: false,
        underscored:true
    }
    
    const Productos = sequelize.define(alias, columnas, config)

    Productos.associate = function(models){
        Productos.belongsTo(models.Cliente, {
            as: 'prodclientes',
            foreignKey: 'cliente_id'
        }), 
        Productos.hasMany(models.Comentario, {
            as: 'coment',
            foreignKey: 'producto_id'
        })
    }

    return Productos
}