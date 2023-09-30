const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4//genera un id
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type:DataTypes.STRING,
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthDay: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
   
  },
  { timestamps: false });
  
};