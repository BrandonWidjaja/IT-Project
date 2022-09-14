import React from 'react';
import styles from './Modules/BuildingDetails.module.css';
import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/fontawesome-free-solid"

function BuildingDetails() {
      
    return (
        <>
            <h1 style = {{color: "#607EAA"}}>Widjaja Royal Building</h1>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1626092806645-ae053131caff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "test"></img>
                <div style = {{display: "flex", flexDirection: "column", marginRight: "2.5rem"}}>
                    <p>Name: Widjaja Royal Building</p>
                    <p>Location:</p>
                    <p style={{display:"flex", alignItems:"center"}}>Rating: <Rating emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" readonly/></p>
                </div>
            </div>
            <div className={styles.rate}>
                <p style={{display:"flex", alignItems:"center"}}>Rate:<Rating initialRating={2.5} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" fractions={2}/></p>
                <button style={{height:"2rem"}}>Update</button>
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
                <div className={styles.like}>
                    <FontAwesomeIcon className ={styles.likeIcon} icon={Icons.faThumbsUp} size="xl" onClick={()=> console.log("hahahahaha")}/>
                    <p style={{marginLeft:'0.5rem', marginRight:'0.5rem'}}>20</p>
                    <FontAwesomeIcon className ={styles.likeIcon} icon={Icons.faThumbsDown} size="xl"/>
                    <p style={{marginLeft:'0.5rem'}}>20</p>
                </div>
            </div>
            
        </>
    )
}

export default BuildingDetails;