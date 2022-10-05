const { Post } = require("../models/post");

const addNewPost = async (req, res, next) => {
  try {
    // create new post from req
    let today = getDateTime().substring(0, 10);
    const newPost = await new Post(req.body);
    newPost.dateTimePosted = today;
    await newPost.save();

    // send new post
    return await res.send(newPost);
  } catch (e) {
    // send error
    console.error(e);
    return res.send(e);
  }
};

// get a post from their objectID
const getPost = async (req, res, next) => {
  try {
    // retrieve object id of post from request
    let post = req.params.name;

    // find the user in the database
    let exists = await Post.find({ buildingName: post });
    if (exists) {
      return res.send(exists);
    }
    // not found
    return res.send("post does not exist");
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
};

const likePost = async (req, res, next) => {
  try {
    // retrieve object id of post from request
    let postID = req.body._id;
    let user = req.body.user;

    // find the post in the database
    let exists = await Post.findOne({ _id: postID });
    if (exists) {
      if (exists.likedBy.includes(user)) {
        return res.send("Post already liked");
      } else {
        var removeIndex;
        for (var userID in exists.dislikedBy) {
          if (user == exists.dislikedBy[userID]) {
            removeIndex = userID;
          }
        }
        if (removeIndex) {
          exists.dislikedBy.splice(removeIndex, 1);
        }

        exists.likedBy.push(user);
      }

      exists.save();
      return res.send(exists);
    }
    // post not found
    return res.send("post does not exist");
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
};

const dislikePost = async (req, res, next) => {
  try {
    // retrieve object id of post from request
    let postID = req.body._id;
    let user = req.body.user;

    // find the post in the database
    let exists = await Post.findOne({ _id: postID });
    if (exists) {
      if (exists.dislikedBy.includes(user)) {
        return res.send("Post already disliked");
      } else {
        var removeIndex;
        for (var userID in exists.likedBy) {
          if (user == exists.likedBy[userID]) {
            removeIndex = userID;
          }
        }
        if (removeIndex) {
          exists.likedBy.splice(removeIndex, 1);
        }

        exists.dislikedBy.push(user);
      }

      exists.save();
      return res.send(exists);
    }
    // post not found
    return res.send("post does not exist");
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
};

const addComment = async (req, res, next) => {
  try {
    // retrieve object id of post from request
    let postID = req.body._id;
    let today = getDateTime().substring(0, 10);
    let commentedBy = req.body.displayName;

    let comment = {
      content: req.body.newComment,
      dateTimePosted: today,
      postedByID: commentedBy,
    };

    // find the post in the database
    let exists = await Post.findOne({ _id: postID });
    if (exists) {
      exists.comments.push(comment);
      exists.save();
      return res.send(exists);
    }
    // post not found
    return res.send("post does not exist");
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
};

const likeComment = async (req, res, next) => {
  try {
    // retrieve object id of post from request
    let postID = req.body._id;
    let commentID = req.body.commentID;
    let user = req.body.user;

    // find the post in the database
    let exists = await Post.findOne({ _id: postID });
    if (exists) {
      // find the comment that matches the ID
      for (var comment in exists.comments) {
        var foundComment = exists.comments[comment];

        if (foundComment._id.toString() == commentID.toString()) {
          // add the user to list of users that liked the comment
          if (exists.comments[comment].likedBy.includes(user)) {
            return res.send("Comment already liked");
          } else {
            var removeIndex;
            for (var userID in exists.comments[comment].dislikedBy) {
              if (user == exists.comments[comment].dislikedBy[userID]) {
                removeIndex = userID;
              }
            }

            if (removeIndex) {
              exists.comments[comment].dislikedBy.splice(removeIndex, 1);
            }

            foundComment.likedBy.push(user);
          }
        }
      }
      exists.save();
      return res.send(exists);
    }
    // post not found
    return res.send("post does not exist");
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
};

const dislikeComment = async (req, res, next) => {
  try {
    // retrieve object id of post from request
    let postID = req.body._id;
    let commentID = req.body.commentID;
    let user = req.body.user;

    // find the post in the database
    let exists = await Post.findOne({ _id: postID });
    if (exists) {
      // find the comment that matches the ID
      for (var comment in exists.comments) {
        var foundComment = exists.comments[comment];

        if (foundComment._id.toString() == commentID.toString()) {
          // add the user to list of users that liked the comment
          if (exists.comments[comment].dislikedBy.includes(user)) {
            return res.send("Comment already disliked");
          } else {
            var removeIndex;
            for (var userID in exists.comments[comment].likedBy) {
              if (user == exists.comments[comment].likedBy[userID]) {
                removeIndex = userID;
              }
            }

            if (removeIndex) {
              exists.comments[comment].likedBy.splice(removeIndex, 1);
            }
            foundComment.dislikedBy.push(user);
          }
        }
      }
      exists.save();
      return res.send(exists);
    }
    // post not found
    return res.send("post does not exist");
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
};

const getDateTime = () => {
  const today = new Date().toLocaleString("en-AU", {
    timeZone: "Australia/Melbourne",
  });
  return today;
};

module.exports = {
  addNewPost,
  getPost,
  addComment,
  likeComment,
  dislikeComment,
  likePost,
  dislikePost,
};
