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

    return (
        <>
            <form style = {{display: "flex", justifyContent: "space-between"}}>
                <h1 style = {{color: "#607EAA"}}>Buildings</h1>
                <input className={styles.searchbar} type="text" placeholder='Search'></input>
            </form>
            
            <GetList buildingList = {buildingList.data}/>
            
        </>
    )
}

export default Buildings;