import React, { useState }from 'react';
import styles from './Modules/BuildingDetails.module.css';
import axios from "axios";
import PropTypes from 'prop-types';
import useAuth from "../../hooks/useAuth";

Posts.propTypes = {
  building: PropTypes.string,
};

Posts.defaultProps = {
  building: "default",
};

function Posts(props) {
    const [title, setTitle] = useState(""); 
    const [description, setDescription] = useState("");
    const [post, setPost] = useState(false);
    const {building} = props;
    const {auth} = useAuth();

    const handleSubmit = (e) => {
      // prevent the form from refreshing the whole page
      e.preventDefault();
      
      // set configurations
      const configuration = {
        method: "post",
        url: "/post/new",
        data: {
          postedByName: auth.displayName,
          postedByID: auth._id,
          buildingName: building,
          title,
          description
        },
      };
  
      // make the API call
      axios(configuration)
        .then((result) => {
          setPost(true);
        })
        .catch((error) => {
          error = new Error();
        });
    };
  
    return (
        <>
          <div className={styles.post}>
            <div style = {{width: "100%", display: "flex", flexDirection: "column"}}>
                <h2 style = {{marginBottom: "1rem", color: "var(--light-secondary)"}}> Write a review</h2>
                {!post ? (
                  <>
                    <input style = {{width: "100%", height:"2rem", marginBottom: "1rem"}} type="text" placeholder='Title'
                    value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    <textarea style = {{width: "100%", height:"5rem", marginBottom: "1rem", border:"1px solid lightgrey"}} type="text"
                    value={description}
                    placeholder = "Content"
                    onChange={(e) => setDescription(e.target.value)} required/>
                    <div style = {{marginTop: "0.5rem", alignSelf: "flex-end", marginBottom: "0", width: "15%"}}>
                        <button  onClick={(e) => handleSubmit(e)} style = {{height: "2rem", width: "100%"}}>Post</button>
                    </div>
                  </>
                ): (
                  <p>Posted</p>
                )}
            </div>
        </div>
        
        
        </>
    )
}

export default Posts;