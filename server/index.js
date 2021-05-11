const express = require("express");
const app = express();
const cors  =require("cors");
const con = require("./db");
const bcrypt = require('bcrypt');
const { response } = require("express");
const jwt = require("jsonwebtoken");

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

app.get("/books_category/:category_id", function(req, res, next) {
    const { category_id } = req.params;
    con.query('SELECT * FROM books_category WHERE category_id = ' + category_id, function (error, result, fields) {
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

app.delete("/books/:id", function(req, res, next ) {
    const { id } = req.params;
    con.query('DELETE FROM books WHERE book_id = ' + id, function(err, result) {
        if(err) {
            res.json({"status": 500, "error": error, "response": null});
        } else if(result.affectedRows === 0) {
            res.json('This book does not exist!');
        } else {
            res.json('Deleted book!');
            console.log("törölve");
        }
    });
})

app.post("/books", function (req,res,next) {
    const { title, description, image, pages, language, type, cost } = req.body;
    if( title != " "){
        con.query("INSERT INTO books (title, description, image, pages, language, type, cost) VALUES(?, ?, ?, ?, ?, ?, ?)", [title, description, image, pages, language, type, cost], function (err) {
            if(err){
                res.json({"status": 500, "error": err, "response": null});
            } else {
                res.json('Inserted a book!');
            }
        });
    } else {
        res.json('Add the book title!');
    }
})

app.put("/books/:id", function (req,res,next) {
    try {
        const { id } = req.params;
        const { title, description,  pages, language, type, cost } = req.body;

        con.query("UPDATE books SET title = '" + title + "', description = '" + description + "', pages = '" + pages + "', language = '" + language + "', type = '" + type + "', cost = '" + cost + "' WHERE book_id = '" + id + "'",
        function (err) {
            if(err){
                res.json({"status": 500, "error": err, "response": null});
            } else {
                res.json('Updated a book!');
            }
        });
    } catch(err) {
        console.error(err.message);
    }
})

app.get("/writers", function(req, res, next) {
    con.query('SELECT * FROM writers', function (error, results, fields) {
          if(error){
              res.json({"status": 500, "error": error, "response": null});
          } else {
              res.json(results);
          }
      });
})

app.get("/writers/:id", function(req, res, next) {
    const { id } = req.params;
    con.query('SELECT * FROM writers WHERE writer_id = ' + id, function (error, result, fields) {
          if(error){
              res.json({"status": 500, "error": error, "response": null});
          } else {
              res.json(result);
          }
      });
})

app.delete("/writers/:id", function(req, res, next ) {
    const { id } = req.params;
    con.query('DELETE FROM writers WHERE writer_id = ' + id, function(err, result) {
        if(err) {
            res.json({"status": 500, "error": error, "response": null});
        } else if(result.affectedRows === 0) {
            res.json('This writer does not exist!');
        } else {
            res.json('Deleted writer!');
        }
    });
})

app.post("/writers", function (req,res,next) {
    const { name, date_of_birth, country, image, description } = req.body;
    if( name != null){
        con.query("INSERT INTO writers (name, date_of_birth, country, image, description) VALUES(?, ?, ?, ?, ?)", [name, date_of_birth, country, image, description], function (err) {
            if(err){
                res.json({"status": 500, "error": err, "response": null});
            } else {
                res.json('Inserted a writer!');
            }
        });
    } else {
        res.json('Add the writer name!');
    }
})

app.post("/register", async (req,res,next) => {

    const username = req.body.username;
    const password = req.body.password;
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    con.query("INSERT INTO users (user_name, password) VALUES (?,?)", [username, bcryptPassword], (err, result) => { console.log(err);})
    res.json("user inserted.");
})

const verifyJWT = (req,res,next) => {
    const token = req.headers["x-access-token"]

    if(!token) {
        res.send("We need a token!")
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if(err) {
                res.json({auth: false , message: "You failed to authenticate"});
            } else {
                req.userId = decoded.id;
                next();
            }
        });
    }
};

app.get('/isUserAuth', verifyJWT ,(req,res) =>{
    res.send("You are authenticated!")
})

app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    con.query("SELECT * FROM users WHERE user_name = ?",username,
    (err, result) => {
        if (err) {
            res.send({err: err});
        }
        
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (error, response) => {
                if(response) {
                    //res.send(result);

                    const id = result[0].id
                    const token = jwt.sign({id}, "jwtSecret", {
                        expiresIn: 300, //5perc
                    });
                    res.json({auth: true, token: token, result: result});

                } else {
                    res.json({auth: false, message: "Wrong username/password!"});
                }
            });
        } else {
            res.json({auth: false, message: "No user exists"});
        }

        /*if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Wrong username/password!"});
        }*/
    });
    //res.json("user inserted.");
});


app.put("/writers/:id", function (req,res,next) {
    try {
        const { id } = req.params;
        const { name, date_of_birth, country, image, description } = req.body;

        con.query("UPDATE writers SET name = '" + name + "', date_of_birth = '" + date_of_birth + "', country = '" + country + "', image = '" + image + "', description = '" + description + "' WHERE writer_id = '" + id + "'",
        function (err) {
            if(err){
                res.json({"status": 500, "error": err, "response": null});
            } else {
                res.json('Updated a writer!');
            }
        });
    } catch(err) {
        console.error(err.message);
    }
})

app.get("/publishers", function(req, res, next) {
    con.query('SELECT * FROM publishers', function (error, results, fields) {
          if(error){
              res.json({"status": 500, "error": error, "response": null});
          } else {
              res.json(results);
          }
      });
})

app.get("/publishers/:id", function(req, res, next) {
    const { id } = req.params;
    con.query('SELECT * FROM publishers WHERE publisher_id = ' + id, function (error, result, fields) {
          if(error){
              res.json({"status": 500, "error": error, "response": null});
          } else {
              res.json(result);
          }
      });
})

app.delete("/publishers/:id", function(req, res, next ) {
    const { id } = req.params;
    con.query('DELETE FROM publishers WHERE publisher_id = ' + id, function(err, result) {
        if(err) {
            res.json({"status": 500, "error": error, "response": null});
        } else if(result.affectedRows === 0) {
            res.json('This publisher does not exist!');
        } else {
            res.json('Deleted publisher!');
        }
    });
})

app.post("/publishers", function (req,res,next) {
    const { headquarters, name, phone_number } = req.body;
    con.query("INSERT INTO publishers (headquarters, name, phone_number) VALUES(?, ?, ?)", [headquarters, name, phone_number], function (err) {
        if(err){
            res.json({"status": 500, "error": err, "response": null});
        } else {
            res.json('Inserted a publisher!');
        }
    });  
})

app.put("/publishers/:id", function (req,res,next) {
    try {
        const { id } = req.params;
        const { headquarters, name, phone_number } = req.body;

        con.query("UPDATE publishers SET headquarters = '" + headquarters + "', name = '" + name + "', phone_number = '" + phone_number + "' WHERE publisher_id = '" + id + "'",
        function (err) {
            if(err){
                res.json({"status": 500, "error": err, "response": null});
            } else {
                res.json('Updated a publisher!');
            }
        });
    } catch(err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000")
})