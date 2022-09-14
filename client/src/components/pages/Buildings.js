import React, { useEffect, useState } from 'react';
import styles from './Modules/Buildings.module.css';
import GetList from './BuildingList';
import axios from "axios";

const Buildings = () => {

    const [buildingList, setBuildingList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/building/buildings`)
        .then(res => {
            setBuildingList(res.data);
        }).catch(
            (err) => console.log("err", err)
        );
    }, [setBuildingList])

    console.log(buildingList);
    return (
        <>
            <form style = {{display: "flex", justifyContent: "space-between"}}>
                <h1 style = {{color: "#607EAA"}}>Buildings</h1>
                <input className={styles.searchbar} type="text" placeholder='Search'></input>
            </form>
            
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1626092806645-ae053131caff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "test"></img>
                <div style = {{width: "100%"}}>
                    <p>Name:</p>
                    <p>Location:</p>
                    <hr/>
                    <p>Rating:</p>
                </div>
            </div>
            
            <GetList buildingList = {buildingList.data}/>
            
        </>
    )
}

export default Buildings;