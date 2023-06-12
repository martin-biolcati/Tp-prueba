module.exports = function(sequelize, DataTypes){
    let alias = 'Cliente'
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
            type: DataTypes.STRING,
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
        timestamps: false,
        underscored:true
    }
    
    const Cliente = sequelize.define(alias, columnas, config)

    Cliente.associate = function(models){
        Cliente.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'cliente_id'
        }),
       Cliente.hasMany(models.Comentario, {
            as: 'coment',
            foreignKey: 'cliente_id'
        })
    }

    return Cliente
}