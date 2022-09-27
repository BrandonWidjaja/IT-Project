import { useState } from "react";
import axios from "axios";
import styles from './Modules/BuildingDetails.module.css';

const Comments = () => {
    const [content, setContent] = useState([]);
    const [comment, setComments] = useState('');

    const handleSubmit = (e) => {
      // prevent the form from refreshing the whole page
      e.preventDefault();
  
      // set configurations
      const configuration = {
        method: "post",
        url: "http://localhost:3001/post/addcomment",
        data: {
          content
        },
      };
  
      // make the API call
      axios(configuration)
        .then((result) => {
          setComments(true);
        })
        .catch((error) => {
          error = new Error();
        });
    };
  

    return (
        <div >
          <div style = {{width: "100%", display: "flex", flexDirection: "column"}}>
            <input className={styles.new_comment} type="text" placeholder='Comment' 
            value={content} onChange={(e) => setContent(e.target.value)}></input>
             <button onClick={()=>handleSubmit()} style = {{marginTop: "auto", alignSelf: "flex-end"} }>Send</button>
             </div>
        </div>
    )
}

export default Comments