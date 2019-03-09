module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      CustomerName: {
        type: DataTypes.STRING,
     
      }  
    });
    Customer.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Customer.hasOne(models.Burgers, {
         
        });


        
      };


    return Customer;
};