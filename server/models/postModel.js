const { Promise } = require("mongoose");
var db = require("./connection");

function postModel() {
  // post: { texts:'Text from Front-end.', userID: 1 }
  // collection_name: 'post'
  this.addPost = (collection_name, post, imagePath) => {
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

            post._id = _id + 1;
            post.info = Date();
            post.comments = [];
            post.imagePath = imagePath;
            post.userId = parseInt(post.userId);
            db.collection(collection_name).insertOne(post, (err, result) => {
              err ? reject(err) : resolve(result);
            });
          }
        });
    });
  };
  // This gets all post created in collection
  this.getPosts = (collection_name) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name)
        .find()
        .toArray((err, result) => {
          err ? reject(err) : resolve(result);
        });
    });
  };
  // This gets post by it's id
  this.getPostById = (collection_name, id) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name)
        .find({ _id: id })
        .toArray((err, result) => {
          if (err) reject(err);
          else {
            if (result.length == 0)
              return reject(`No post found by id: ${id}.`);
            else {
              var post = result[0];
              return resolve(post);
            }
          }
        });
    });
  };
  // This gets all post by user
  this.getAllPostByUserId = (collection_name, userId) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name)
        .find({ userId: userId })
        .toArray((err, result) => {
          if (err) reject(err);
          else {
            if (result.length == 0)
              return resolve({ message: `No post found for user.`, posts: [] });
            else {
              return resolve({
                message: `No. of post by user is ${result.length}`,
                posts: result,
              });
            }
          }
        });
    });
  };

  // This gets all post of friends
  this.getAllFriendsPost = (collection_name, userId) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name)
        .find({ _id: userId })
        .toArray((err, result) => {
          if (err) reject(err);
          else {
            console.log(result);
            if (result.length === 0) {
              resolve("User Not found");
            } else {
              let user = result[0];
              let friendList = user.friends || [];
              db.collection("post")
                .find({ userId: { $in: [...friendList] } })
                .toArray((err, result) => {
                  if (err) reject(err);
                  else {
                    console.log(result);
                    return resolve(result);
                  }
                });
            }
          }
        });
    });
  };
  // This adds new comment to post by it's id.
  this.addCommentByPostId = (collection_name, postId, comment) => {
    return new Promise((resolve, reject) => {
      db.collection(collection_name).findOneAndUpdate(
        { _id: postId },
        { $push: { comments: comment } },
        (err, result) => {
          if (err) reject(err);
          else {
            return resolve({
              message: `Added new comment to a post with id: ${postId}`,
              result,
            });
          }
        }
      );
    });
  };
}

module.exports = new postModel();
