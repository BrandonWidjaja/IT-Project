import React from 'react';
import styles from './Modules/NewBuilding.module.css';

function NewBuilding() {
    return (
        <>
            <h1 style = {{color: "#607EAA"}}>Add New Building</h1>
            <div className={styles.add}>
                <div style = {{width: "100%", display: "flex", flexDirection: "column"}}>
                    <div style = {{display: "flex"}}><p style = {{width: "25%"}}>Name of building:</p><input style = {{width: "60%"}} className={styles.searchbar} type="text"></input></div>
                    <div style = {{display: "flex"}}><p style = {{width: "25%"}}>Location:</p><input style = {{width: "60%"}} className={styles.searchbar} type="text" ></input></div>
                    <div style = {{display: "flex", marginBottom: "1rem"}}><p style = {{width: "25%"}}>Description:</p><input style = {{width: "60%", height: "20rem"}} className={styles.searchbar} type="text" ></input></div>
                    <div style = {{display: "flex", marginBottom: "1rem"}}><p style = {{width: "25%"}}>Image:</p>
                        <div className={styles.imagebutton}>
                        <input style = {{width: "80%", height: "8rem"}} ></input>
                        <button style = {{width: "82%", alignSelf: "flex-start"}}>Upload</button>
                        </div>
                    </div>
                    <button style = {{marginTop: "auto", alignSelf: "flex-end"}}>Save</button>
                </div>
            </div>
        </>
    )
}

export default NewBuilding;