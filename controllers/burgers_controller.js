var express = require("express");

var db = require("../models");


module.exports = function(app) {

  
  app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burgers.findAll({
      include: [
        db.Customer]
    }).then(function(data) {
      console.log(data);
      var hbsobj = {
        burgers: data
      
    };
    //  console.log(data);
       res.render("index", hbsobj);
    });
  });

  // app.get("/", function(req, res) {
  //   // findAll returns all entries for a table when used with no options
  //   db.Customer.findAll({
  //     include:[
  //       db.Burgers
  //     ]
  //   }).then(function(data) {
  //     var hbsobj = {
  //       customer: data
  //   };
  //   //  console.log(data);
  //      res.render("index", hbsobj);
  //   });
  // });


 
  app.post("/burgers", function(req, res) {
   
    db.Burgers.create(req.body).then(function(dbBurger){ 
         res.json(dbBurger)
    })
   
  });

  
  app.delete("/burgers/:id", function(req, res) {

    // We just have to specify which todo we want to destroy with "where"
    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.status(200).end();
    });

  });
app.post("/customers", function(req,res){
  db.Customer.create(
    req.body
  ).then(function(newCustomer){
    res.json(newCustomer);
    console.log(newCustomer);

  });

});

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/burgers/:id", function(req, res) {

    db.Burgers.update(
      req.body,
      {
      where: {
        id: req.params.id
      }
      // },
      // include: [db.Customer]
    
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });
};





















// router.get("/" ,function (req, res) {
//   burger.selectAll(function(data){
//       var hbsobj = {
//           burgers: data
//       };
//       console.log(hbsobj);
//       res.render("index", hbsobj);
//   })
// });

// router.post("/burgers", function(req, res){
//     burger.insertOne([
//         "BurgerName", "devoured"
//     ],[
//      req.body.BurgerName, req.body.devoured
//     ],function(result){
//         res.json({id: result.insertId});
//     });
// });

// router.put("/burgers/:id", function(req, res){
//     console.log(req.body);
//     var condition = "id = " + req.params.id;
    
//     burger.updateOne({ devoured: req.body.devoured 
    
//     },condition, function(result) {
        
//         console.log(result);
//         if (result.chagnedRows == 0){
//             return res.status(404).end();
//         }else{
//             res.status(200).end();
        
//         }
        
//     });
//     });

//     router.delete("/burgers/:id", function(req, res) {
//         var condition = "id = " + req.params.id;
      
//         burger.delete(condition, function(result) {
//           if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//           } else {
//             res.status(200).end();
//           }
//         });
//       });










    //     var condition = "id = " + req.params.id;
//     console.log("condition", condition);
//     console.log(req.body);
//     burger.updateOne({
//         devoured : req.body.devoured
//     }. condition, function(result){
//         if(result.changedRows == 0){
//             return res.status(404).end();
//         } else {
//           res.status(200).end();
//         }
    
        
//     });
// })








// module.exports = router;