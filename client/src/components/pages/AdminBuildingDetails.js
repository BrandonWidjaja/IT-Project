import React, { useEffect, useState } from 'react';
import styles from './Modules/BuildingDetails.module.css';
import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/fontawesome-free-solid"
import { useParams } from 'react-router-dom';
import axios from "axios";

function AdminBuildingDetails() {
    
    const {name} = useParams();

    const [building, setBuilding] = useState("")

    useEffect(() => {
        axios.get(`/building/building-detail/${name}`)
        .then(res => {
            setBuilding(res.data);
        }).catch(
            (err) => console.log("err", err)
        );
    }, [setBuilding, name, building])

    return (
        <>  
            <h1 style = {{color: "#607EAA"}}>{building.name}</h1>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1626092806645-ae053131caff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "test"></img>
                <div style = {{display: "flex", flexDirection: "column", marginRight: "2.5rem"}}>
                    <p>Name: {building.name}</p>
                    {building.data?.location ? (
                        <p>Location: {building.data.location}</p>
                    ) : (
                        <p>No Location Yet</p>
                    )}

                    {building.data?.description ? (
                        <p>Description: {building.data.description}</p>
                    ) : (
                        <p>No Description Yet</p>
                    )}
                    
                    <p style={{display:"flex", alignItems:"center"}}>Rating: <Rating initialRating={building.data?.rating} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" readonly/></p>
                </div>
                <button style = {{alignSelf: 'flex-end', marginTop:'1.5rem' , width: "15%"}}>Delete</button>
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
                <div style = {{display: 'flex', justifyContent:'space-between'}}>
                    <div className={styles.like}>
                        <FontAwesomeIcon className ={styles.likeIcon} icon={Icons.faThumbsUp} size="xl" onClick={()=> console.log("hahahahaha")}/>
                        <p style={{marginLeft:'0.5rem', marginRight:'0.5rem'}}>20</p>
                        <FontAwesomeIcon className ={styles.likeIcon} icon={Icons.faThumbsDown} size="xl"/>
                        <p style={{marginLeft:'0.5rem'}}>20</p>
                    </div>
                    <p style={{margin:'auto', marginBottom:'0', marginRight:'0'}}>Delete</p>
                </div>
            </div>
            
        </>
    )
}

export default AdminBuildingDetails;