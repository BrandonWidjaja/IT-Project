import React, { useEffect, useState } from "react";
import styles from './Modules/NewBuilding.module.css';
import axios from "axios";
import { useParams } from 'react-router-dom';

function BuildingEdit() {

  const {name} = useParams();
    // initial state
  const [building, setBuilding] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/building/building-detail/${name}`)
    .then(res => {
        setBuilding(res.data);
    }).catch(
        (err) => console.log("err", err)
    );
}, [setBuilding, name])
console.log(building);
  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:3001/building/addBuilding",
      data: {
        name
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
            <h1 style = {{color: "#607EAA"}}>Edit Building</h1>
            <div className={styles.add}>
                <form style = {{width: "100%", display: "flex", flexDirection: "column"}} onSubmit={(e) => handleSubmit(e)}>
                    <div style = {{display: "flex"}}><p style = {{width: "25%"}}>Name of building:</p>
                    <input style = {{width: "60%"}} className={styles.searchbar} type="text" 
                    placeholder= {name} required ></input>
                    </div>
                    <div style = {{display: "flex"}}><p style = {{width: "25%"}}>Location:</p>
                        <input style = {{width: "60%"}} className={styles.searchbar} type="text" 
                        placeholder={building?.data?.location}></input>
                    </div>
                    <div style = {{display: "flex", marginBottom: "1rem"}}><p style = {{width: "25%"}}>Description:</p>
                        <textarea style = {{width: "60%", height: "20rem"}} className={styles.searchbar} type="text" 
                        placeholder={building?.data?.description} required></textarea>
                    </div>
                    <div style = {{display: "flex", marginBottom: "1rem"}}><p style = {{width: "25%"}}>Image:</p>
                        <div className={styles.imagebutton}>
                        <input style = {{width: "80%", height: "8rem"}}></input>
                        <button style = {{width: "82%", alignSelf: "flex-start"}}>Upload</button>
                        </div>
                    </div>
                    <button onClick={(e) => handleSubmit(e)} type = "submit" style = {{marginTop: "auto", alignSelf: "flex-end"} }>Save</button>
                    {building ? (
                        <p style = {{textAlign: "center"}}>Building Editted Successfully</p>
                    ) : (
                        <p style = {{textAlign: "center"}}>Error</p>
                    )}
                </form>
            </div>
        </>
    )
}

export default BuildingEdit;