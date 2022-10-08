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
        },
      };
  
      // make the API call
      axios(configuration)
        .then((result) => {
          console.log(result)
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
          return res.data;
        }
      )
      return false;
    };

    function checkdisliked(e) {
      // set configurations
      axios.get(`/post/checkdisliked/${e._id}/${auth._id}`,)
      .then(res => {
          return res.data;
        }
      )
      return false;
    };

    function like(e) {   
        // set configurations
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
      };
    
    function dislike(e) {
        console.log(e);        
        // set configurations
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
      };
    return (
        <>
        {postList.map((post) => (
            
        <div className={styles.post}>
            <div style = {{marginBottom: "0.5rem"}}>
                {post?.postedByName ? (
                        <Link to={`/profile/${post.postedByID}`} style = {{color: "grey"}}>{post.postedByName}: </Link>
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

            <form className={styles.comments}>
                <CommentList commentList = {post.comments}/>
                <div >
                  <form onSubmit={handleSubmit} style = {{width: "100%", display: "flex", marginTop: "1rem"}}>
                    <input className={styles.new_comment} type="text" placeholder='Comment' 
                    onChange={(e) => setContent(e.target.value)}></input>
                    <FontAwesomeIcon className ={styles.buttons} onClick={(e) => handleSubmit(post)} style = {{margin: "0.5rem", color:"var(--light-secondary)"}} icon= {Icons.faPaperPlane}/>
                  </form>
                </div>
            </form>
            <div className={styles.like}>
            {checkliked(post) ? (
              <FontAwesomeIcon className ={styles.likeIcon} icon={Icons.faThumbsUp} size="xl" onClick={(e) => like(post)}/>
            ) : (
              <FontAwesomeIcon style = {{color: "black"}} className ={styles.likeIcon} icon={Icons.faThumbsUp} size="xl" onClick={(e) => like(post)}/>
            )}
            <p style={{marginLeft:'0.5rem', marginRight:'0.5rem', color:"var(--light-secondary)"}}>{post?.likedBy.length}</p>
            
            {checkdisliked(post) ? (
              <FontAwesomeIcon className ={styles.likeIcon} icon={Icons.faThumbsDown} size="xl" onClick={(e) => dislike(post)}/>
            ) : (
              <FontAwesomeIcon style = {{color: "black"}} className ={styles.likeIcon} icon={Icons.faThumbsDown} size="xl" onClick={(e) => dislike(post)}/>
            )}

                
                
                <p style={{marginLeft:'0.5rem', color:"var(--light-secondary)"}}>{post?.dislikedBy.length}</p>
            </div>
        </div>
        ))}
        </>
    );
}

export default PostList;