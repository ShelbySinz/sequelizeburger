module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    BurgerName: DataTypes.STRING,
    devoured: {
     type: DataTypes.BOOLEAN,
     defaultValue: false
    }
  });

  Burgers.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Burgers.belongsTo(models.Customer, {
      foreignKey: {
        
      }
    });
  };
  return Burgers;
};