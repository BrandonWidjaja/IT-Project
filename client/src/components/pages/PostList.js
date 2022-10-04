import React from 'react';
import PropTypes from 'prop-types'
import PostComments from './Comments'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/fontawesome-free-solid"
import styles from './Modules/BuildingDetails.module.css';
import { Link } from 'react-router-dom';

PostList.propTypes = {
    postList: PropTypes.array,
};

PostList.defaultProps = {
    postList: [],
};

function PostList(props) {
    const {postList} = props;
    console.log(props);

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
                <FontAwesomeIcon className ={styles.likeIcon} icon={Icons.faThumbsUp} size="xl" onClick={()=> console.log("hahahahaha")}/>
                <p style={{marginLeft:'0.5rem', marginRight:'0.5rem', color:"var(--light-secondary)"}}>20</p>
                <FontAwesomeIcon className ={styles.likeIcon} icon={Icons.faThumbsDown} size="xl"/>
                <p style={{marginLeft:'0.5rem', color:"var(--light-secondary)"}}>20</p>
            </div>
        </div>
        ))}
        </>
    );
}

export default PostList;