const { Promise } = require("mongoose");
var db = require("./connection");

function adminModel() {
  this.fetchUsers = (collection_name) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name)
        .find({ role: "user" })
        .toArray((err, result) => {
          err ? reject(err) : resolve(result);
        });
    });
  };

  this.manageuserstatus = (collection_name, data) => {
    return new Promise((resolve, reject) => {
      if (data.status == "block") {
        db.collection(collection_name).updateOne(
          { _id: data._id },
          { $set: { status: 0 } },
          (err, result) => {
            err ? reject(err) : resolve(result);
          }
        );
      } else if (data.status == "verify") {
        db.collection(collection_name).updateOne(
          { _id: data._id },
          { $set: { status: 1 } },
          (err, result) => {
            err ? reject(err) : resolve(result);
          }
        );
      } else {
        db.collection(collection_name).deleteOne(
          { _id: data._id },
          (err, result) => {
            err ? reject(err) : resolve(result);
          }
        );
      }
    });
  };
  this.cpadmin = (collection_name, cpdata) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name)
        .find({ username: cpdata.username, password: cpdata.opass })
        .toArray((err, result) => {
          err ? reject(err) : resolve(result);
        });
    });
  };

  this.upadmin = (collection_name, cpdata) => {
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

  this.upadminprofile = (collection_name, userDetails) => {
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

module.exports = new adminModel();
