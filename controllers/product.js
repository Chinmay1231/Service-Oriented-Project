const {db} = require("../connection/db.connect")


const ProductController = {

    getProductDetails: function (req, res) {
        try {
            var selectQuery = 'SELECT * FROM product ;'

            db.all(selectQuery ,[], (err , data) => { 
                if(err) return; 
  
                data.forEach(rows=>{
                    console.log(rows)
                })
            res.json(data)
            }); 

            //res.json(data)
        }
        catch (err) {
            console.log(err)
        }
    },

    createProduct: async(req,res)=>{

        let product_id=req.body.product_id
        let name=req.body.name
        let description=req.body.description
        let price=req.body.price
        let quantity_available=req.body.quantity_available
        let category_id=req.body.category_id
        
        let sql;
        sql=`INSERT INTO product
        (product_id, name, description, price, quantity_available, dtcreated, dtupdated, category_id)
        VALUES(?,?,?,?,?,datetime('now','localtime'),datetime('now','localtime'),?);`

        db.run(sql,[product_id,name,description,price,quantity_available,category_id],err=>{
            if(err) return console.error(err.message)

            return res.status(201).json({
                msg:"Product inserted sucessfully"
            });
        })

    }



}

module.exports = ProductController