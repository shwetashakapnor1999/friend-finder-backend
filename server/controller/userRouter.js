var express = require("express");
var router = express.Router();
var userModel = require("../models/userModel");

router.get("/", (req, res, next) => {
  res.send("its working , user router invoked");
});
router.post("/cpuser", (req, res, next) => {
  var collection_name = "register";
  userModel
    .cpuser(collection_name, req.body)
    .then((result) => {
      if (result.length == 0) res.json({ response: 0 });
      else {
        if (req.body.npass == req.body.cnpass) {
          //res.json({'response':'change pass'})
          userModel
            .upuser(collection_name, req.body)
            .then((result) => {
              res.json({ response: 2 });
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.json({ response: 1 });
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/epfetch", (req, res, next) => {
  var collection_name = "register";
  userModel
    .epfetch(collection_name, req.body)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/upuserprofile", (req, res, next) => {
  var collection_name = "register";
  userModel
    .upuserprofile(collection_name, req.body)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
