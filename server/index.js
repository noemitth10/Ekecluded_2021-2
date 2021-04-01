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

app.get("/category", function(req, res, next) {
    con.query('SELECT * FROM categories', function (error, results, fields) {
          if(error){
              res.json({"status": 500, "error": error, "response": null});
          } else {
              res.json(results);
          }
      });
})

app.get("/category/:id", function(req, res, next) {
    const { id } = req.params;
    con.query('SELECT * FROM categories WHERE category_id = ' + id, function (error, result, fields) {
          if(error){
              res.json({"status": 500, "error": error, "response": null});
          } else {
              res.json(result);
          }
      });
})

app.post("/category", function (req,res,next) {
    const { category_name } = req.body;
    if( category_name != " "){
        con.query("SELECT category_name FROM categories WHERE category_name = '"+category_name+"'", function(error, result) {
            if(error){
                res.json({"status": 500, "error": error, "response": null});
            } else {
                if(result && result.length){
                    res.json('This category is exist!');
                } else {
                    con.query("INSERT INTO categories (category_name) VALUES('"+category_name+"')", function (err) {
                        if(err){
                            res.json({"status": 500, "error": err, "response": null});
                        } else {
                            res.json('Inserted a category!');
                        }
                    });
                }
            }
        });
    } else {
        res.json('Add the category name!');
    }
})

app.put("/category/:id", function (req,res,next) {
    const { id } = req.params;
    const { category_name } = req.body;
    if(category_name != " "){
        con.query("SELECT category_name FROM categories WHERE category_name = '"+category_name+"'", function(error, result) {
            if(error){
                res.json({"status": 500, "error": error, "response": null});
            } else {
                if(result && result.length){
                    res.json('This category is exist!');
                } else {
                    con.query("UPDATE categories SET category_name = '" + category_name + "' WHERE category_id = " + id, function (err) {
                        if(err){
                            res.json({"status": 500, "error": err, "response": null});
                        } else {
                            res.json('Updated a category!');
                        }
                    });
                }
            }
        });
    } else {
        res.json('Add a category name!');
    }
})

app.delete("/category/:id", function(req, res, next ) {
    const { id } = req.params;
    con.query('DELETE FROM categories WHERE category_id = ' + id, function(err, result) {
        if(err) {
            res.json({"status": 500, "error": error, "response": null});
        } else if(result.affectedRows === 0) {
            res.json('This category is not exist!');
        } else {
            res.json('Deleted category!');
        }
    });
})

app.get("/books", function(req, res, next) {
    con.query('SELECT * FROM books', function (error, results, fields) {
          if(error){
              res.json({"status": 500, "error": error, "response": null});
          } else {
              res.json(results);
          }
      });
})

app.get("/books/:id", function(req, res, next) {
    const { id } = req.params;
    con.query('SELECT * FROM books WHERE book_id = ' + id, function (error, result, fields) {
          if(error){
              res.json({"status": 500, "error": error, "response": null});
          } else {
              res.json(result);
          }
      });
})


app.listen(5000, () => {
    console.log("server has started on port 5000")
})