import express, { json } from 'express';
import mysql from "mysql"
import cors from "cors";
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser';
import session from 'express-session'



const app = express()
const saltRounds = 10

 
const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "asdwow123",
    database: "ecommerce_db"
})


app.use(express.json())
app.use(cors(({
    credentials: true,
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"]
    })));

app.use(session({
    key: "username",
    secret:"subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24 * 1000
    }
}))

app.use(cookieParser())


app.get("/", (req, res) =>{
    res.json("Hello this is the backend")
})

app.get("/products", (req, res) => {
    const query = "SELECT p.id, p.name, p.price, p.stock, p.brand_id, p.prod_img, b.brand, c.categories FROM products p JOIN brands b on p.brand_id = b.id JOIN categories c on p.category_id = c.id ORDER BY p.id ASC;";
    db.query(query, (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
 })

app.get("/brands", (req, res) => {
    const query = "SELECT * from brands";
    db.query(query, (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
 })

 app.get("/categories", (req, res) => {
    const query = "SELECT * from categories";
    db.query(query, (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
 })


 app.post("/userdata", (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    bcrypt.hash(password,saltRounds, (err, hash) =>{

        if(err) {
            console.log(err);
        }
        db.query(
            "INSERT INTO userdata (username, password, email) values (?, ?, ?)",
            [username, hash, email]
            , (err, result) =>{
            console.log(err)
            }
        ) 
    })

})

app.post("/checkout", (req, res) => {


    db.query("INSERT INTO purchases (item, price, brand, img, product_id) values ?",
    [req.map(item => [item.name, item.price, item.brand, item.img, item.productid])]
    , (err, result) => {
        console.log(err)
    }
    )
})




app.get("/logout", (req, res, next) =>{
    res.clearCookie("username", {
    path: "/"
    })
    req.session.destroy((err) => {
        if (err) return next(err)
        return res.redirect('/login')
    })
})
 

app.get("/login", (req, res) => {

    if (req.session.user) {
        console.log(req.session.user)
        res.send({loggedIn: true, user: req.session.user})
    } else{
        res.send({loggedIn: false})
    }
})



app.post("/login", (req, res) => {

    const username = req.body.username
    const password = req.body.password

    db.query(
        "SELECT * FROM userdata WHERE username = ?;",
        [username],
        (err, result) =>{
            if (err) {
                res.send({err: err})
            } 
                
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (err, response) =>{
                    if (response) {
                        req.session.user = result
                        res.send(result)
                    } else{ 
                        res.send({message: "Wrong username/password"})
                    }
                })
            }else {
                res.send({message: "User doesn't exist"})
            }
        }   
    )
 })






app.listen(3001, () =>{
    console.log('Connected to backend!')
})




