import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/fontawesome-free-solid"
import styles from './Modules/BuildingDetails.module.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import CommentList from './CommentList';

PostList.propTypes = {
    postList: PropTypes.array,
};

PostList.defaultProps = {
    postList: [],
};

function PostList(props) {
    const {postList} = props;
    const { auth } = useAuth();
    const [content, setContent] = useState([]);
    const [checkLike, setCheckLike] = useState([])
    const [checkDislike, setCheckDislike] = useState([])

    function handleSubmit(e) {
      // prevent the form from refreshing the whole page
      // set configurations
      const configuration = {
        method: "post",
        url: "/post/addcomment",
        data: {
          _id: e._id,
          newComment: content,
          user_id: auth._id,
          user_name: auth.displayName
        }
      };
  
      // make the API call
      axios(configuration)
        .then((result) => {
          console.log(result)
          setContent("");
          //setComments(true);
        })
        .catch((error) => {
          error = new Error();
        });

      
    };

    function checkliked(e) {
      // set configurations
      axios.get(`/post/checkliked/${e._id}/${auth._id}`,)
      .then(res => {
          setCheckLike(res.data);
        }).catch(
          (err) => console.log("err", err)
      );
    };

    function checkdisliked(e) {
      // set configurations
      axios.get(`/post/checkdisliked/${e._id}/${auth._id}`,)
      .then(res => {
        setCheckDislike(res.data);
        }).catch(
          (err) => console.log("err", err)
      );
    };

    function like(e) { 
        // set configurations
        if(auth.email){
          const configuration = {
            method: "post",
            url: "/post/likepost",
            data: {
              _id: e._id,
              user: auth._id
            },
          };
      
          // make the API call
          axios(configuration)
            .then((result) => {
            })
            .catch((error) => {
              error = new Error();
            });
        }
      };
    
    function dislike(e) {      
        // set configurations
        if(auth.email){
          const configuration = {
            method: "post",
            url: "/post/dislikepost",
            data: {
              _id: e._id,
              user: auth._id
            },
          };
      
          // make the API call
          axios(configuration)
            .then((result) => {
            })
            .catch((error) => {
              error = new Error();
            });
        }
      };
    
      function deletePost(e) {
        console.log(e);        
        // set configurations
        const configuration = {
          method: "delete",
          url: "/admin/delete-post",
          data: {
            _id: e._id,
          },
        };
    
        // make the API call
        axios(configuration)
          .then((result) => {
          })
          .catch((error) => {
            error = new Error();
        });
    };
    
    return (
        <>
        {postList.map((post) => (
            
        <div className={styles.post}>
            <div style = {{marginBottom: "0.5rem"}}>
                {post?.postedByName ? (
                    <div style ={{display: "flex"}}>
                      {post.postedByPic && (<img style = {{height :"1.5rem", width:"1.5rem", marginRight: "0.5rem", borderRadius: "0.5rem", border: "1px solid lightgrey"}} src={post.postedByPic} alt="profile_pic" />)}
                      <Link to={`/profile/${post.postedByID}`} style = {{color: "grey", textDecoration: "None"}}>{post.postedByName}: </Link>
                    </div>
                    ): (
                        <></>
                )}
            </div>

            <div className={styles.title}>
                <h2 style = {{margin: '0.5rem'}}>Title: {post.title}</h2>
            </div>
            <p className={styles.content}>
                {post.description}
            </p>
            <div style = {{textAlign: "right"}}>
                <p style = {{color: "grey",marginBottom: "0.5rem"}}>Date: {post.dateTimePosted}</p>
            </div>

            <div className={styles.comments}>
                <CommentList commentList = {post.comments}/>
                {auth.email ? (
                <div >
                  <form onSubmit={handleSubmit} style = {{width: "100%", display: "flex", marginTop: "1rem"}}>
                    <input className={styles.new_comment} type="text" placeholder='Comment' 
                    onChange={(e) => setContent(e.target.value)} value={content}></input>
                    <FontAwesomeIcon className ={styles.buttons} onClick={(e) => handleSubmit(post)} style = {{margin: "0.5rem"}} icon= {Icons.faPaperPlane}/>
                  </form>
                </div>
                ) : (
                  <></>
                )}
            </div>
            <div style = {{display: "flex", justifyContent: "space-between"}}>
              <div className={styles.like}>
                {checkliked(post)}
                {checkdisliked(post)}
                {checkLike  ? (
                  <FontAwesomeIcon className ={styles.likeDone} icon={Icons.faThumbsUp} size="xl" onClick={(e) => like(post)}/>
                ) : (
                  <FontAwesomeIcon className ={styles.likeIcon} icon={Icons.faThumbsUp} size="xl" onClick={(e) => like(post)}/>
                )}
                <p style={{marginLeft:'0.5rem', marginRight:'0.5rem', color:"var(--light-secondary)"}}>{post?.likedBy.length}</p>
                
                {checkDislike  ? (
                  <FontAwesomeIcon className ={styles.likeDone} icon={Icons.faThumbsDown} size="xl" onClick={(e) => dislike(post)}/>
                ) : (
                  <FontAwesomeIcon className ={styles.likeIcon} icon={Icons.faThumbsDown} size="xl" onClick={(e) => dislike(post)}/>
                )}
                <p style={{marginLeft:'0.5rem', color:"var(--light-secondary)"}}>{post?.dislikedBy.length}</p>
              </div>
              {auth.role === "Admin" ? (
                <p className = {styles.deleteButton} onClick={(e) => deletePost(post)}>delete</p>
              ) : (
                <></>
              )}
            </div>
        </div>
        ))}
        </>
    );
}

export default PostList;