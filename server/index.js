import express, { json } from "express";
import mysql from "mysql";
import cors from "cors";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
const saltRounds = 10;

const db = mysql.createConnection({
  host: "https://keepmovingclothing.vercel.app/",
  user: "root",
  password: "dbpassword",
  database: "ecommerce_db",
  multipleStatements: true,
});

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "https://keepmovingclothing.vercel.app",
    methods: ["GET", "POST"],
  })
);

app.use(
  session({
    key: "username",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24 * 1000,
    },
  })
);

app.use(cookieParser());

app.get("/", (req, res) => {
  res.json("Hello this is the backend");
});

app.get("/products", (req, res) => {
  const query =
    "SELECT p.id, p.name, p.price, p.stock, p.brand_id, p.prod_img, b.brand, c.categories FROM products p JOIN brands b on p.brand_id = b.id JOIN categories c on p.category_id = c.id ORDER BY p.id ASC;";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/purchase_list", (req, res) => {
  const userid = req.body.userid;

  const query =
    "SELECT us.username, pu.id, pu.user_id, pu.purchase_date FROM purchases pu JOIN userdata us on us.id = pu.user_id where pu.user_id=?";

  db.query(query, userid, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/purchase_history", (req, res) => {
  const orderid = req.body.orderid;

  const query =
    "SELECT pc.purchase_id, pc.product_id, pc.quantity, pur.user_id, pur.purchase_date, p.name, p.prod_img, p.price, b.brand FROM  purchases_products pc JOIN purchases pur on pc.purchase_id = pur.id JOIN products p on p.id = product_id JOIN brands b on b.id = p.brand_id  WHERE pc.purchase_id=?";

  db.query(query, orderid, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/brands", (req, res) => {
  const query = "SELECT brand from brands ORDER BY brand";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/categories", (req, res) => {
  const query = "SELECT * from categories";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/userdata", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      "INSERT INTO userdata (username, password, email) values (?, ?, ?)",
      [username, hash, email],
      (err, result) => {
        res.send(err);
      }
    );
    console.log(err);
  });
});

app.post("/checkout", (req, res) => {
  const userid = req.body.userid;
  const values = req.body.values;

  if (userid) {
    db.beginTransaction(function (err) {
      if (err) {
        throw err;
      }

      db.query(
        "INSERT INTO purchases SET user_id=?",
        userid,
        function (error, results) {
          if (error) {
            return db.rollback(function () {
              throw error;
            });
          }
          var insertid = results.insertId;
          const newvalues = values.map((row) => row.push(insertid));
          console.log(newvalues);

          db.query(
            `INSERT INTO purchases_products (product_id, quantity, purchase_id) VALUES ?`,
            [values],
            function (error, results) {
              if (error) {
                console.log(results);
                return db.rollback(function () {
                  console.log(error);
                  throw error;
                });
              }
              db.commit(function (err) {
                if (err) {
                  return connection.rollback(function () {
                    throw err;
                  });
                }
                res.send(results);
              });
            }
          );
        }
      );
    });
  } else {
    res.send("Please login to make your purchase");
  }
});

app.get("/logout", (req, res, next) => {
  res.clearCookie("username", {
    path: "/",
  });
  req.session.destroy((err) => {
    if (err) return next(err);
    return res.redirect("/login");
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    console.log(req.session.user);
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM userdata WHERE username = ?;",
    [username],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
          if (response) {
            req.session.user = result;
            console.log(result);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Connected to backend!");
});

// SELECT  p.id, p.prod_img, p.price, p.name, c.quantity, c.purchase_id, c.product_id
// FROM  purchases_products c JOIN products p on p.id = c.product_id
