import { useState } from "react";
//import axios from "axios";
import styles from './Modules/BuildingDetails.module.css';
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/fontawesome-free-solid";

const Comments = () => {
    const [content, setContent] = useState([]);
    //const [comment, setComments] = useState('');

    // const handleSubmit = (e) => {
    //   // prevent the form from refreshing the whole page
    //   e.preventDefault();
  
    //   // set configurations
    //   const configuration = {
    //     method: "post",
    //     url: "/post/addcomment",
    //     data: {
    //       content
    //     },
    //   };
  
    //   // make the API call
    //   axios(configuration)
    //     .then((result) => {
    //       //setComments(true);
    //     })
    //     .catch((error) => {
    //       error = new Error();
    //     });
    // };
  

    return (
        <div >
          <div style = {{width: "100%", display: "flex", marginTop: "1rem"}}>
            <input className={styles.new_comment} type="text" placeholder='Comment' 
            value={content} onChange={(e) => setContent(e.target.value)}></input>
             <FontAwesomeIcon style = {{margin: "0.5rem", color:"var(--light-secondary)"}} icon= {Icons.faPaperPlane}/>
             </div>
        </div>
    )
}

export default Comments