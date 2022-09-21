import React, { useState } from "react";
import styles from './Modules/NewBuilding.module.css';
import axios from "axios";

function NewBuilding() {
    // initial state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
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
        description,
        location
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
                    <input style = {{width: "100%"}} className={styles.searchbar} type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} required></input>
                    </div>
                    <div style = {{display: "flex"}}><p style = {{width: "25%"}}>Location:</p>
                        <input style = {{width: "100%"}} className={styles.searchbar} type="text" 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} required></input>
                    </div>
                    <div style = {{display: "flex", marginBottom: "1rem"}}><p style = {{width: "25%"}}>Description:</p>
                        <textarea style = {{width: "100%", height: "15rem"}} className={styles.searchbar} type="text" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} required></textarea>
                    </div>
                    <div style = {{display: "flex"}}>
                        <p style = {{width: "25%"}}>Image:</p>
                        <button>Upload</button>
                    </div>
                    <button onClick={(e) => handleSubmit(e)} type = "submit" style = {{marginTop: "auto", alignSelf: "flex-end"} }>Save</button>
                    {building ? (
                        <p style = {{textAlign: "center"}}>New Building Added Successfully</p>
                    ) : (
                        <p style = {{textAlign: "center"}}></p>
                    )}
                </form>
            </div>
        </>
    )
}

export default NewBuilding;