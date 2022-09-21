import styles from './Modules/Profile.module.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, Link } from 'react-router-dom';

function Profile() {

    const {email} = useParams();

    const [user, setUser] = useState("")


    useEffect(() => {
        axios.get(`http://localhost:3001/user/getprofile/${email}`)
        .then(res => {
            setUser(res.data);
        }).catch(
            (err) => console.log("err", err)
        );
    }, [setUser, email])
    console.log(user);
    return (
        <>
            <h1 style = {{color: "#607EAA"}}>Profile</h1>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1626092806645-ae053131caff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "test"></img>
                <div style = {{width: "100%", display: "flex", flexDirection: "column"}}>
                    <p>Name: {user.data?.displayName} </p>
                    <p>Date of Birth: {user.data?.birthDate}</p>
                    <hr style = {{marginLeft: "0", marginRight: "0"}}/>
                    <p >Bio: {user.data?.bio}</p>
                    <Link to={`/profile-edit/${email}`} style = {{marginTop: "auto", alignSelf: "flex-end", marginBottom: "0", width: "15%"}}>
                        <button style = {{width: "100%"}}>Edit</button>
                    </Link>
                </div>
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
            </div>
            
        </>
    )
}

export default Profile;