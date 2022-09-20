const { Post } = require("../models/post");

const addNewPost = async (req, res, next) => {
  try {
    // create new post from req
    const newPost = await new Post(req.body);
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
    let postID = req.body._id;

    // find the user in the database
    let exists = await Post.findOne({ _id: postID });
    if (exists) {
      return res.send(exists);
    }
    // user not found
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
    let today = getDateTime().substring(0,10)
    let commentedBy = req.body.displayName;

    let comment = {"content": req.body.newComment, "dateTimePosted": today, "postedByID": commentedBy};

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
}

const likeComment = async (req, res, next) => {
  try {
    // retrieve object id of post from request
    let postID = req.body._id;
    let commentID = req.body.commentID;
    let user = req.body.user;

    // find the post in the database
    let exists = await Post.findOne({ _id: postID});
    if (exists) {
      // find the comment that matches the ID
      for (var comment in exists.comments){
        var foundComment = exists.comments[comment];
        
        if (foundComment._id.toString() == commentID.toString()){
          // add the user to list of users that liked the comment
          if (exists.comments[comment].likedBy.includes(user)){
            return res.send("Comment already liked");
          } else {
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
}


const dislikeComment = async (req, res, next) => {
  try {
    // retrieve object id of post from request
    let postID = req.body._id;
    let commentID = req.body.commentID;
    let user = req.body.user;

    // find the post in the database
    let exists = await Post.findOne({ _id: postID});
    if (exists) {
      // find the comment that matches the ID
      for (var comment in exists.comments){
        var foundComment = exists.comments[comment];
        
        if (foundComment._id.toString() == commentID.toString()){
          // add the user to list of users that liked the comment
          if (exists.comments[comment].dislikedBy.includes(user)){
            return res.send("Comment already disliked");
          } else {
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
}


const getDateTime = () => {
  const today = new Date().toLocaleString("en-AU", {timeZone: "Australia/Melbourne"});
  return today;
}

module.exports = { addNewPost, getPost, addComment, likeComment, dislikeComment };
