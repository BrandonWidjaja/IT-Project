import React from 'react';
import styles from './Buildings.module.css';

function Buildings() {
    return (
        <>
            <div style = {{display: "flex", justifyContent: "space-between"}}>
                <h1 style = {{color: "#607EAA"}}>Buildings</h1>
                <div className={styles.searchbar}>
                    <p style = {{margin: "auto"}}>Search</p>
                </div>
            </div>
            
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1626092806645-ae053131caff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "test"></img>
                <div style = {{width: "100%"}}>
                    <p>Name:</p>
                    <p>Location:</p>
                    <hr/>
                    <p>Rating:</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1626092806645-ae053131caff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "test"></img>
                <div style = {{width: "100%"}}>
                    <p>Name:</p>
                    <p>Location:</p>
                    <hr/>
                    <p>Rating:</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1626092806645-ae053131caff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "test"></img>
                <div style = {{width: "100%"}}>
                    <p>Name:</p>
                    <p>Location:</p>
                    <hr/>
                    <p>Rating:</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1626092806645-ae053131caff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "test"></img>
                <div style = {{width: "100%"}}>
                    <p>Name:</p>
                    <p>Location:</p>
                    <hr/>
                    <p>Rating:</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1626092806645-ae053131caff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "test"></img>
                <div style = {{width: "100%"}}>
                    <p>Name:</p>
                    <p>Location:</p>
                    <hr/>
                    <p>Rating:</p>
                </div>
            </div>
            
        </>
    )
}

export default Buildings;