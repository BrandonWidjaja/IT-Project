import React, { useEffect, useState } from 'react';
import styles from './Modules/Buildings.module.css';
import GetList from './PendingBuildingList';
import axios from "axios";

function AdminBuildingPending() {

    const [buildingList, setBuildingList] = useState([])
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios.get(`/building/buildings`)
        .then(res => {
            setBuildingList(res.data);
            console.log(res);
        }).catch(
            (err) => console.log("err", err)
        );
        
    }, [setBuildingList, buildingList])

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

    // return (
    //     <>
    //         <form style = {{display: "flex", justifyContent: "space-between"}}>
    //             <h1 style = {{color: "#607EAA"}}>Pending</h1>
    //         </form>
            
    //         <div className={styles.card}>
    //             <img src="https://images.unsplash.com/photo-1626092806645-ae053131caff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "test"></img>
    //             <div style = {{width: "100%"}}>
    //                 <p>Name:</p>
    //                 <p>Location:</p>
    //                 <div className={styles.pendbutton}>
    //                     <button style = {{width: "15%"}}>Approve</button>
    //                     <button style = {{width: "15%"}}>Deny</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )
}

export default AdminBuildingPending;