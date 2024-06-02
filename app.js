console.log("Web serverni yozamiz");
const express = require("express");
const app = express();
const fs = require("fs");
const mongodb = require("mongodb");

// MONGODB calling
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session bog'liq kodlar

// 3 Viewsga bog'liq kodlar
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing ga bog'liq kodlar
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  // console.log(req.body);
  const newReja = req.body.reja;
  db.collection("plans").insertOne({ reja: newReja }, (err, data) => {
    console.log(data);
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    {
      _id: new mongodb.ObjectId(data.id),
    },
    { $set: { reja: data.newInput } },
    (err, data) => {
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "Hamma rejalar o'chirildi" });
    });
  }
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        // console.log(data);
        res.render("reja", { items: data });
      }
    });
});

// app.get("/hello", function (req, res) {
//   res.end("<h1 style='background: red'>Hello World by John</h1>");
// });

// app.get("/gift", function (req, res) {
//   res.end("<h1>Siz sovg'alar sahifasidasiz</h1>");
// });

// app.get("/contact", function (req, res) {
//   res.end("<h1>You are in contact page</h1>");
// });

//   Calling server

module.exports = app;