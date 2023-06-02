module.exports = function(sequelize, DataTypes){
    let alias = 'clientes'
    let columnas = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        foto_de_perfil:{
            type: DataTypes.STRING,
        },
        dni:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fecha_de_nacimiento:{
            type: DataTypes.DATE,
            allowNull: false,
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
        tablename: 'clientes',
        timestamps: false
    }
    
    const Clientes = sequelize.define(alias, columnas, config)

    Clientes.associate = function(models){
        Clientes.hasMany(models.productos, {
            as: 'productos',
            foreignKey: 'cliente_id'
        })
    }

    return Clientes
}