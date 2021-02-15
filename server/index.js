const express = require("express");
const app = express();
const cors  =require("cors");
const con = require("./db");

app.use(cors());
app.use(express.json());

/*app.get("/users", async(req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    } catch(err) {
        console.error(err.message);
    }
})*/

con.query('SELECT * FROM users', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:');
    console.log(rows);
});

app.listen(5000, () => {
    console.log("server has started on port 5000")
})