var express = require("express");
let logger = require("morgan");
var http = require("http");
var path = require("path");
var cors = require("cors");

var indexRouter = require("./server/controller/indexRouter");
var adminRouter = require("./server/controller/adminRouter");
var userRouter = require("./server/controller/userRouter");
var postRouter = require("./server/controller/postRouter");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist/friend-finder")));
app.use(express.static("uploads"));

app.use("/webapi", indexRouter);
app.use("/webapiadmin", adminRouter);
app.use("/webapiuser", userRouter);
app.use("/webapipost", postRouter);

app.get("*", function (req, res) {
  var mypath = path.join(__dirname, "dist/friend-finder/index.html");
  res.sendFile(mypath);
});

http.createServer(app).listen(3000, (err, result) => {
  if (err) console.log(err);
  else console.log("Server running.....");
});
