const express = require("express");
const app = express();
const cors  =require("cors");
const con = require("./db");

app.use(cors());
app.use(express.json());

app.get("/users", function(req, res, next) {
    con.query('SELECT * from users', function (error, results, fields) {
          if(error){
              //res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
              res.json({"status": 500, "error": error, "response": null});
          } else {
              //res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
              res.json(results);
          }
      });
})

app.listen(5000, () => {
    console.log("server has started on port 5000")
})