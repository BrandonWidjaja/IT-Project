import React from 'react';
import styles from './Modules/NewEvent.module.css';

function NewEvent() {
    return (
        <>
            <h1 style = {{color: "#607EAA"}}>Add New Event</h1>
            <div className={styles.add}>
                <div style = {{width: "100%", display: "flex", flexDirection: "column"}}>
                    <div style = {{display: "flex"}}><p style = {{width: "25%"}}>Name of Event:</p><input style = {{width: "60%"}} className={styles.searchbar} type="text"></input></div>
                    <div style = {{display: "flex"}}><p style = {{width: "25%"}}>Location:</p><input style = {{width: "60%"}} className={styles.searchbar} type="text" ></input></div>
                    <div style = {{display: "flex", marginBottom: "1rem"}}><p style = {{width: "25%"}}>Description:</p><input style = {{width: "60%", height: "20rem"}} className={styles.searchbar} type="text" ></input></div>
                    <button style = {{marginTop: "auto", alignSelf: "flex-end"}}>Save</button>
                </div>
            </div>
        </>
    )
}

export default NewEvent;