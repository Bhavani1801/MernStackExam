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
    res.render("books.ejs",{books});
})
app.get('/new',(req,res)=>{
    res.render('new.ejs');
})
app.post('/',(req,res)=>{
let{title,author,price,pages}=req.body;
books.push({
    title,author,price,pages
})
    res.redirect('/');
})