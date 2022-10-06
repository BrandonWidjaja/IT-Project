import React from 'react';
import PropTypes from 'prop-types'
import PostComments from './Comments'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/fontawesome-free-solid"
import styles from './Modules/BuildingDetails.module.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import useAuth from "../../hooks/useAuth";

PostList.propTypes = {
    postList: PropTypes.array,
};

PostList.defaultProps = {
    postList: [],
};

function PostList(props) {
    const {postList} = props;
    const { auth } = useAuth();
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
                <p>Comment Function Not Available Yet</p>
                <PostComments Comments />
            </form>
            <div className={styles.like}>
                <FontAwesomeIcon className ={styles.likeIcon} icon={Icons.faThumbsUp} size="xl" onClick={(e) => like(post)}/>
                <p style={{marginLeft:'0.5rem', marginRight:'0.5rem', color:"var(--light-secondary)"}}>{post?.likedBy.length}</p>
                <FontAwesomeIcon className ={styles.likeIcon} icon={Icons.faThumbsDown} size="xl" onClick={(e) => dislike(post)}/>
                <p style={{marginLeft:'0.5rem', color:"var(--light-secondary)"}}>{post?.dislikedBy.length}</p>
            </div>
        </div>
        ))}
        </>
    );
}

export default PostList;