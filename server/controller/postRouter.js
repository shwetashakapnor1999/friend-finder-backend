var express = require("express");
var router = express.Router();
var postModel = require("../models/postModel");
var indexModel = require("../models/indexModel");
const uploadPhoto = require("./helper");

router.get("/", (req, res, next) => {
  res.send("its working");
});

router.post("/createPost", uploadPhoto, (req, res, next) => {
  var imagePath = `photos/${req.file.filename}`;
  console.log(req.body);
  var collection_name = "post";
  postModel
    .addPost(collection_name, req.body, imagePath)
    .then((result) => {
      res.json({ response: "success", result });
    })
    .catch((err) => {
      res.json({ response: "failed" });
    });
});

router.get("/posts", (req, res, next) => {
  var collection_name = "post";
  postModel
    .getPosts(collection_name)
    .then((result) => {
      res.json({ response: "success", posts: result });
    })
    .catch((err) => {
      res.json({ response: "failed" });
    });
});

router.get("/post/:id", (req, res, next) => {
  var collection_name = "post";
  let postId = parseInt(req.params.id);
  postModel
    .getPostById(collection_name, postId)
    .then((result) => {
      res.json({ response: "success", post: result });
    })
    .catch((err) => {
      console.log(err);
      res.json({ response: "failed" });
    });
});

router.get("/posts/:userid", (req, res, next) => {
  var collection_name = "post";
  let userId = parseInt(req.params.userid);
  postModel
    .getAllPostByUserId(collection_name, userId)
    .then(({ posts, message }) => {
      res.json({ response: "success", posts, message });
    })
    .catch((err) => {
      console.log(err);
      res.json({ response: "failed" });
    });
});

router.post("/addComment", (req, res, next) => {
  var collection_name = "post";
  let { userId, comment, postId } = req.body;
  console.log(req.body);
  let body = { userId, comment };
  indexModel
    .getUserProfile("register", parseInt(userId))
    .then((user) => {
      console.log(user);
      body.userName = user.name;
      body.user_photo = user.user_photo;
      postModel
        .addCommentByPostId(collection_name, parseInt(postId), body)
        .then(({ result, message }) => {
          res.json({ response: "success", message, result });
        })
        .catch((err) => {
          console.log(err);
          res.json({ response: "failed" });
        });
    })
    .catch((err) => {
      console.log(err);
      res.json({ response: "failed" });
    });
});

router.get("/getAllFriendsPost/:userid", (req, res, next) => {
  var collection_name = "register";
  let userId = parseInt(req.params.userid);
  postModel
    .getAllFriendsPost(collection_name, userId)
    .then((posts) => {
      res.json({ response: "success", posts });
    })
    .catch((err) => {
      console.log(err);
      res.json({ response: "failed" });
    });
});

module.exports = router;
