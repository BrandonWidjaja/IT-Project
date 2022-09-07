import React from 'react';
import styles from './Modules/BuildingDetails.module.css';
import Rating from 'react-rating'

function BuildingDetails() {
    return (
        <>
            <h1 style = {{color: "#607EAA"}}>Widjaja Royal Building</h1>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1626092806645-ae053131caff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "test"></img>
                <div style = {{display: "flex", flexDirection: "column", marginRight: "2.5rem"}}>
                    <p>Name: Widjaja Royal Building</p>
                    <p>Location:</p>
                    <p >Rating: <Rating /></p>
                </div>
            </div>
            <div className={styles.rate}>
                <p >Rate: <Rating /></p>
                <button style = {{marginTop: "auto", alignSelf: "flex-end"}}>Update</button>
            </div>

            <h1 style = {{color: "#607EAA", marginTop: "3rem"}}>Posts</h1>
            <div className={styles.post}>
                <div className={styles.title}>
                    <h2 style = {{margin: '0.5rem'}}>Title:</h2>
                </div>
                <p className={styles.content}>
                    content: blabla
                </p>
                <form className={styles.comments}>
                    <p>hi</p>
                    <input className={styles.new_comment} type="text" placeholder='Comment'></input>
                </form>
                <p> like dislike</p>
            </div>
            
        </>
    )
}

export default BuildingDetails;