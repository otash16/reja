console.log("Web Serverni Boshlash")
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require('http');
const fs = require('fs');
let user;
fs.readFile("database/user.json", 'utf8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        user = JSON.parse(data);
    }
});

//1 : Kirish Code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extend: true}));

//2: Session

//3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing codeapp.get("/", function(){
    app.post("/create-item", (req, res) => {
        console.log("user entered / create-item");
        const new_reja = req.body.reja;
        db.collection("plans").insertOne({reja : new_reja}, (err, data) => {
            res.json(data.ops[0]);
        })

        app.post("/delete-item", (req, res) => {
            const id = req.body.id;
            db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data){
                res.json({state: "success"})
            })

        });
    console.log(req.body);
    res.json({test : "succes"});
    })
app.get('/', function(req, res){
    res.render('harid');
});

app.get('/author', (req, res) => {
    res.render('author', {user: user});
})

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is succesfully running on port ${PORT}`);
});
