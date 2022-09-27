import React, { useState }from 'react';
import styles from './Modules/BuildingDetails.module.css';
import axios from "axios";
import PropTypes from 'prop-types';

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

    const handleSubmit = (e) => {
      // prevent the form from refreshing the whole page
      e.preventDefault();

      // set configurations
      const configuration = {
        method: "post",
        url: "http://localhost:3001/post/new",
        data: {
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
                <h2> Write a review</h2>
                {!post ? (
                  <>
                    <input style = {{width: "100%", height:"2rem"}} type="text" placeholder='Title'
                    value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    <input style = {{width: "100%", height:"5rem"}} type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} required/>
                    <div style = {{marginTop: "0.5rem", alignSelf: "flex-end", marginBottom: "0", width: "15%"}}>
                        <button  onClick={(e) => handleSubmit(e)} style = {{height: "2rem", width: "100%"}}>Post</button>
                    </div>
                  </>
                ): (
                  <>Posted</>
                )}
            </div>
        </div>
        
        
        </>
    )
}

export default Posts;