import React, { useState } from "react";
import styles from './Modules/NewBuilding.module.css';
import axios from "axios";

function NewBuilding() {
    // initial state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [building, setBuilding] = useState("");

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:3001/building/addBuilding",
      data: {
        name,
        description
      },
    };

    // make the API call
    axios(configuration)
    .then((result) => {
      setBuilding(true);
    })
    .catch((error) => {
      error = new Error();
    });
  };

    return (
        <>
            <h1 style = {{color: "#607EAA"}}>Add New Building</h1>
            <div className={styles.add}>
                <form style = {{width: "100%", display: "flex", flexDirection: "column"}} onSubmit={(e) => handleSubmit(e)}>
                    <div style = {{display: "flex"}}><p style = {{width: "25%"}}>Name of building:</p>
                    <input style = {{width: "60%"}} className={styles.searchbar} type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} required></input>
                    </div>
                    <div style = {{display: "flex"}}><p style = {{width: "25%"}}>Location:</p>
                        <input style = {{width: "60%"}} className={styles.searchbar} type="text" ></input>
                    </div>
                    <div style = {{display: "flex", marginBottom: "1rem"}}><p style = {{width: "25%"}}>Description:</p>
                        <textarea style = {{width: "60%", height: "20rem"}} className={styles.searchbar} type="text" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} required></textarea>
                    </div>
                    <div style = {{display: "flex", marginBottom: "1rem"}}><p style = {{width: "25%"}}>Image:</p>
                        <div className={styles.imagebutton}>
                        <input style = {{width: "80%", height: "8rem"}}></input>
                        <button style = {{width: "82%", alignSelf: "flex-start"}}>Upload</button>
                        </div>
                    </div>
                    <button onClick={(e) => handleSubmit(e)} type = "submit" style = {{marginTop: "auto", alignSelf: "flex-end"} }>Save</button>
                    {building ? (
                        <p style = {{textAlign: "center"}}>New Building Added Successfully</p>
                    ) : (
                        <p style = {{textAlign: "center"}}>Error</p>
                    )}
                </form>
            </div>
        </>
    )
}

export default NewBuilding;