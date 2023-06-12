module.exports = function(sequelize, DataTypes){
    let alias = 'Comentario'
    let columnas = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        cliente_id:{
            type:DataTypes.INTEGER
        },
        producto_id:{
            type:DataTypes.INTEGER
        },
        comentario:{
            type:DataTypes.STRING
        },
        created_at:{
            type: DataTypes.DATE
        },
        updated_at:{
            type: DataTypes.DATE
        },
        deleted_at:{
            type: DataTypes.DATE
        }
    }

    let config = {
        tablename: 'comentarios',
        timestamps: false
    }
    
    const Comentarios = sequelize.define(alias, columnas, config)

    Comentarios.associate = function(models){
        Comentarios.belongsTo(models.Producto, {
            as: 'productos',
            foreignKey: 'producto_id'
        })/*
        Comentarios.belongsTo(models.clientes, {
            as: 'clientes',
            foreignKey: 'cliente_id'
        })*/
    }

    return Comentarios
}