console.log("Web Serverni Boshlash")
const express = require('express');
const app = express();
const http = require('http');
//1 : Kirish Code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extend: true}));

//2: Session

//3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing code
// app.get("/", function(req, res){
//     res.end(`<h1>Hello World!</h1>`);
// });
// app.get("/gift", function(req, res){
//     res.end(`<h1>Siz sovg'alar bo'limidasiz`);
// });
app.get("/", function(){
    res.render('harid');
});



const server = http.createServer(app);
let Port = 3001;
server.listen(Port, function(){
    console.log(`The server is succesfully running on port ${Port}`);
});
