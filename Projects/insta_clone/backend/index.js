import express from "express";
import mysql from "mysql";
import cors from "cors";
import e from "express";

const db = mysql.createConnection({
  host: "localhost",
  user: "niranjan",
  password: "123456",
  database: "insta_db",
});

const app = express();

//=================
//=================

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json("welcome to insta api");
});

// if any authentication error occurs or any fatal error then add below code
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_current_password';

app.get("/users", (req, res) => {
  const q = `SELECT * FROM users`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/posts", (req, res) => {
  const q = `SELECT * FROM post`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
})

app.post("/register", (req, res) => {
  const q = "INSERT INTO users (`username`,`email`, `password`) VALUES (?)";
  const login = "SELECT * FROM users WHERE email =? AND password =?";
  const values = [req.body.username, req.body.email, req.body.password];

  db.query(q, [values], (err, data) => {

    if (err) return res.json(err);
    // console.log(data);
    // return res.send(data);
  });
 
  // const user = [req.body.email, req.body.password]

  const email = req.body.email;
  const password = req.body.password;

  db.query(login, [email,password], (err, data) => {
    if (err) {
      return res.send({ err: err });
    }

    if (data.length > 0) {
      res.send({ data, message: "Logged in successfully" });
    } else {
      res.send({ message: "Invalid Credentials" });
    }
  });


});

app.post("/login", (req, res) => {
  const q = "SELECT * FROM users WHERE email =? AND password =?";
  const email = req.body.email;
  const password = req.body.password;

  db.query(q, [email, password], (err, data) => {
    if (err) {
      return res.send({ err: err });
    }

    if (data.length > 0) {
      res.send({ data, message: "Logged in successfully" });
    } else {
      res.send({ message: "Invalid Credentials" });
    }
  });
});

//Hello guys this is my first post on Instagram.
app.post("/createpost", (req, res) => {
  console.log(req)
  const q = "INSERT INTO post (`post_img`,`post_desc`,`post_create_date`,`userId`) VALUES (?)";
  const values = [req.body.url, req.body.description,req.body.createdDate,req.body.userID];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.send(data);
  });
});

app.listen(8000, () => {
  console.log("connected to the backend");
});
