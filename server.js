const http = require("http");

const mongodb = require("mongodb");

let db;

const connectionstring =
  "mongodb+srv://jurabek7:Hostinguz4890@cluster0.lpazpyk.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(
  connectionstring,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDb conetion succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = process.env.PORT || 3079;
      server.listen(PORT, function () {
        console.log(`The server is running successfully on port: ${PORT}`);
      });
    }
  }
);