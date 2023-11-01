/*const { createPool } = require("mysql");

const db = createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "ind123",
  database: "syscovphr",
  connectionLimit: 10,
});


module.exports = db;
*/const { createPool } = require("sqlite3");






const dbConfig = {

  host: "localhost",

  password:null,
  username: null,
  database: "product_db",

  dialect: "sqlite",

  storage:':memory:',

  dialectOptions: {

  "options": {

  encrypt: 0,

  database: "product_db",

  requestTimeout: 30000,

  connectTimeout: 60000

  }

  

  }

  }

module.exports = dbConfig