import React, { useEffect, useState } from 'react';
import styles from './Modules/Buildings.module.css';
import GetList from './BuildingList';
import axios from "axios";

const Buildings = () => {

    const [buildingList, setBuildingList] = useState([])
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios.get(`/building/buildings`)
        .then(res => {
            setBuildingList(res.data);
        }).catch(
            (err) => console.log("err", err)
        );
    }, [setBuildingList])

    const search =(data) => {
        if (data) {
            return data.filter((item) => item.name.toLowerCase().includes(query));
        }
        
    }

    return (
        <>
            <form style = {{display: "flex", justifyContent: "space-between"}}>
                <h1 style = {{color: "#607EAA"}}>Buildings</h1>
                <input className={styles.searchbar} type="text" placeholder='Search' onChange = {(e) => setQuery(e.target.value)}></input>
            </form>
            
            <GetList buildingList = {search(buildingList.data)}/>
            
        </>
    )
}

export default Buildings;