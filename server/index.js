import express from 'express';
import mysql from "mysql"
import cors from "cors";

const app = express()

 
const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "asdwow123",
    database: "ecommerce_db"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res) =>{
    res.json("Hello this is the backend")
})

app.get("/products", (req, res) => {
    const query = "SELECT p.id, p.name, p.price, p.stock, p.prod_img, b.brand, c.categories FROM products p JOIN brands b on p.brand_id = b.id JOIN categories c on p.category_id = c.id ORDER BY p.id ASC;";
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





// if theres an auth problem
// ALTER USE 'root'@'localhost" IDENTIFIED WITH mysql_native_password by 'asdwow123'



app.listen(3001, () =>{
    console.log('Connected to backend!')
})






// app.post("/books", (req, res) =>{
//     const query = "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)"
//     const values = [

//         req.body.title,
//         req.body.desc,
//         req.body.price,
//         req.body.cover,
//     ]


//     db.query(query, [values], (err,data) => {
//         if (err) return res.json(err)
//         return res.json("Book has been created")
//     })
// })

// app.delete("/books/:id", (req, res) =>{
//     const bookId = req.params.id;
//     const q = "DELETE FROM books WHERE id = ?"

//     db.query(q, [bookId], (err, data) =>{
//         if (err) return res.json(err);
//         return res.json("book has been deleted successfully")
//     })
// })


// app.put("/books/:id", (req, res) =>{
//     const bookId = req.params.id;
//     const q = "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?";

//     const values=[
        
//         req.body.title,
//         req.body.desc,
//         req.body.price,
//         req.body.cover,
//     ]

//     db.query(q, [...values, bookId], (err, data) =>{
//         if (err) return res.json(err);
//         return res.json("book has been updated successfully")
//     })
// })

