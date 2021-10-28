const { Promise } = require("mongoose");
var db = require("./connection");

function userModel() {
  this.cpuser = (collection_name, cpdata) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name)
        .find({ username: cpdata.username, password: cpdata.opass })
        .toArray((err, result) => {
          err ? reject(err) : resolve(result);
        });
    });
  };

  this.upuser = (collection_name, cpdata) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name).updateOne(
        { username: cpdata.username },
        { $set: { password: cpdata.npass } },
        (err, result) => {
          err ? reject(err) : resolve(result);
        }
      );
    });
  };

  this.epfetch = (collection_name, userDetails) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name)
        .find(userDetails)
        .toArray((err, result) => {
          err ? reject(err) : resolve(result);
        });
    });
  };

  this.upuserprofile = (collection_name, userDetails) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name).updateOne(
        { username: userDetails.username },
        {
          $set: {
            name: userDetails.name,
          },
        },
        (err, result) => {
          err ? reject(err) : resolve(result);
        }
      );
    });
  };
}

module.exports = new userModel();
