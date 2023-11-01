const express = require('express'); //Import the express dependency
const app = express();              
const PORT = 5000;       
const productRoutes=require('./routes/product')
const categoryRoutes=require('./routes/category')
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use('/product',productRoutes)
app.use('/category',categoryRoutes)


// db.sequelize.authenticate().then(function () {

//     app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
  
//     console.log("Connected to read/write database !!!");
  
//   }).catch(function (err) {
  
//     console.log(err, "err from DB sequalize authenticate function >>>>>>>>>")
  
//     console.log("Some error occured", err);
  
//   })

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));