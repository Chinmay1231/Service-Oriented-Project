const {db2} = require("../connection/db.connect")


const CategoryController = {

    getCategory: function (req, res) {
        try {
            var selectQuery = 'SELECT * FROM category ;'

            db2.all(selectQuery ,[], (err , data) => { 
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

    createCategory: async(req,res)=>{

        let category_id=req.body.category_id
        let name=req.body.name
        
        let sql;
        sql=`INSERT INTO category
        (category_id, name)
        VALUES(?,?);`

        db2.run(sql,[category_id,name],err=>{
            if(err) return console.error(err.message)

            return res.status(201).json({
                msg:"Category created"
            });
        })

    }



}

module.exports = CategoryController