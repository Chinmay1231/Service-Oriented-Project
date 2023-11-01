const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./product.db' ,sqlite3.OPEN_READWRITE, (err) => { 
  if(err) 
  { 
      console.log("Error Occurred - " + err.message); 
  } 
  else
  { 
      console.log("DataBase Connected"); 
  } 
}) 


let db2 = new sqlite3.Database('./category.db' ,sqlite3.OPEN_READWRITE, (err) => { 
  if(err) 
  { 
      console.log("Error Occurred - " + err.message); 
  } 
  else
  { 
      console.log("DataBase Connected"); 
  } 
})

// sql=`CREATE TABLE product (
//   product_id int PRIMARY KEY,
//   name varchar(255),
//   description varchar(255),
//   price decimal,
//   quantity_available int
//   category_id int,
//   dtcreated date,
//   dtupdated date, category_id int
//   );`

// sql=`CREATE TABLE category (
//   category_id int PRIMARY KEY,
//   name varchar(255)
//   );`

// db2.run(sql)



module.exports={db,db2}