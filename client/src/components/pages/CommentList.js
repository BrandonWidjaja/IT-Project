import PropTypes from 'prop-types'
// import PostComments from './Comments'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import * as Icons from "@fortawesome/fontawesome-free-solid"
// import styles from './Modules/BuildingDetails.module.css';
import { Link } from 'react-router-dom';
// import axios from "axios";
import React from 'react';
//import useAuth from "../../hooks/useAuth";

CommentList.propTypes = {
    commentList: PropTypes.array,
};

CommentList.defaultProps = {
    commentList: [],
};

function CommentList(props) {
    const {commentList} = props;
    //const { auth } = useAuth();

    return (
        <>
        {commentList.map((comment) => (
            <div>
                <p style = {{fontSize: "1rem"}}>{comment.content}</p>
                <div style = {{color: "grey", textAlign: "right"}}>
                    By: <Link to={`/profile/${comment.postedByID}`} style = {{color: "grey", fontSize: "1rem"}}>{comment.postedByName}</Link>
                    <p style = {{fontSize: "1rem"}}>Date: {comment.dateTimePosted}</p>
                </div>
                <hr></hr>
            </div>
            
        ))}
        </>
    );
}

export default CommentList;