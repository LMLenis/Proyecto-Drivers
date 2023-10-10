const { DataTypes } = require('sequelize');

// se define una tabla de dos campos id y name

module.exports = (sequelize) => {
   sequelize.define('Team', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true    
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
     
   },
   { timestamps: false });
};