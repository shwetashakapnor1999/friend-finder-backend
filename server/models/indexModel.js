const { Promise } = require("mongoose");
var db = require("./connection");

function indexModel() {
  this.usersignup = (collection_name, userDetails) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name)
        .find()
        .toArray((err, result) => {
          if (err) reject(err);
          else {
            var _id;
            if (result.length == 0) _id = 0;
            else {
              var max_id = result[0]._id;
              for (let row of result) {
                if (max_id < row._id) max_id = row._id;
              }
              _id = max_id;
            }

            userDetails._id = _id + 1;
            userDetails.status = 1;
            userDetails.role = "user";
            userDetails.info = Date();
            userDetails.user_photo = "photos/1632298132540-photo.png";
            //console.log(userDetails)
            db.collection(collection_name).insertOne(
              userDetails,
              (err, result) => {
                err ? reject(err) : resolve(result);
              }
            );
          }
        });
    });
  };
  this.userlogin = (collection_name, body) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name)
        .find({
          username: body.username,
          status: 1,
        })
        .toArray((err, result) => {
          if (err) {
            reject(err);
          } else {
            if (result.length > 0) {
              let user = result[0];
              if (user.password === body.password) {
                resolve({
                  id: user._id,
                  name: user.name,
                  username: user.username,
                  isAdmin: user.role === "admin" ? true : false,
                  isError: false,
                });
              } else {
                resolve({
                  id: user._id,
                  name: user.name,
                  username: user.username,
                  isAdmin: user.role === "admin" ? true : false,
                  errorMessage: "Wrong Password",
                  isError: true,
                });
              }
            } else {
              resolve({ isError: true, errorMessage: "User Not Found" });
            }
          }
        });
    });
  };
  this.getUserProfile = (collection_name, userId) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name)
        .find({ _id: userId })
        .toArray((err, result) => {
          err ? reject(err) : resolve(result[0]);
        });
    });
  };
  this.usercontact = (collection_name, userDetails) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name)
        .find()
        .toArray((err, result) => {
          if (err) reject(err);
          else {
            var _id;
            if (result.length == 0) _id = 0;
            else {
              var max_id = result[0]._id;
              for (let row of result) {
                if (max_id < row._id) max_id = row._id;
              }
              _id = max_id;
            }

            userDetails._id = _id + 1;
            // userDetails.status=1
            // userDetails.role='user'
            userDetails.info = Date();
            //console.log(userDetails)
            db.collection(collection_name).insertOne(
              userDetails,
              (err, result) => {
                err ? reject(err) : resolve(result);
              }
            );
          }
        });
    });
  };
  //  Add new friend to user by their IDs
  this.addNewFriend = (collection_name, userId, friendId) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name).findOneAndUpdate(
        { _id: userId },
        { $push: { friends: friendId } },
        (err, result) => {
          if (err) reject(err);
          else {
            return resolve({
              message: `Added new friend to User by id: ${userId}`,
              result,
            });
          }
        }
      );
    });
  };
  //  Add new friend to user by their IDs
  this.getRecommendations = (collection_name, userId) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name)
        .find({ _id: userId })
        .toArray((err, result) => {
          if (err) reject(err);
          else {
            if (result.length === 0) {
              resolve("User Not found");
            } else {
              let user = result[0];
              let friendList = user.friends || [];
              db.collection(collection_name)
                .find({ _id: { $nin: [...friendList, userId] }, role: "user" })
                .limit(5)
                .toArray((err, result) => {
                  if (err) reject(err);
                  else {
                    return resolve(result);
                  }
                });
            }
          }
        });
    });
  };
  //  Get all friend to user by their IDs
  this.getAllFriends = (collection_name, userId) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name)
        .find({ _id: userId })
        .toArray((err, result) => {
          if (err) reject(err);
          else {
            if (result.length === 0) {
              resolve("User Not found");
            } else {
              let user = result[0];
              let friendList = user.friends || [];
              db.collection(collection_name)
                .find({ _id: { $in: [...friendList] }, role: "user" })
                .toArray((err, result) => {
                  if (err) reject(err);
                  else {
                    return resolve(result);
                  }
                });
            }
          }
        });
    });
  };
  //  Update user profile to add image
  this.updateUserProfileImage = (collection_name, userId, imagePath) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name).findOneAndUpdate(
        { _id: userId },
        { $set: { user_photo: imagePath } },
        (err, result) => {
          if (err) reject(err);
          else {
            return resolve({
              message: `Updated user profile image by id: ${userId}`,
              result,
            });
          }
        }
      );
    });
  };
}

module.exports = new indexModel();
