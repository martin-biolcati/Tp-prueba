const { STRING } = require("sequelize")

module.exports = function(sequelize, DataTypes){
    let alias = 'productos'
    let columnas = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING, 
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
        timestamps: false
    }
    
    const Productos = sequelize.define(alias, columnas, config)

    Productos.associate = function(models){
        Productos.belongsTo(models.clientes, {
            as: 'clientes',
            foreignKey: 'cliente_id'
        })
    }

    return Productos
}