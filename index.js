let express = require("express");
let app = express();
app.use(express.urlencoded({extended:true}))
app.listen(3000,()=>{
    console.log("server is running");
})
let books=[{
    title:"vignan",
    author:"bhavani",
    price:200,
    pages:60
},{
    title:"mern",
    author:"yasir",
    price:160,
    pages:80
}]
app.get('/',(req,res)=>{
    res.send("working")
})
app.get('/books',(req,res)=>{
    res.json("books.ejs",{books});
})
app.get('/books/new',(req,res)=>{
    res.json('new.ejs');
})
app.post('/books',(req,res)=>{
let{title,author,price,pages}=req.body;
books.push({
    title,author,price,pages
})
    res.redirect('/books');
})