import styles from './Modules/Profile.module.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom"
import useAuth from "../../hooks/useAuth";

function Profile() {
    const { auth } = useAuth();
    const { id } = useParams();
    const [user, setUser] = useState("");
    const [other, setOther] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('User'));
        axios.get(`/user/getprofile/${id}`)
            .then(res => {
                console.log(res.data);
                setUser(res.data);
            }).catch(
                (err) => console.log("err", err)
        );
        if (localStorage.getItem('User')) {
            if (user._id === id) {
                setOther(false);
            } else {
                setOther(true);
                console.log("hi");
            }
        }
    }, [setUser, navigate, id])

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        
        // set configurations
        const configuration = {
          method: "post",
          url: "/admin/ban-user",
          data: {
            id: id
          },
        };
    
        // make the API call
        axios(configuration)
          .then((result) => {
            navigate("/");
          })
          .catch((error) => {
            error = new Error();
        });
    };

    
    return (
        <>
            {user.data?.role === "User" && <h1 style = {{color: "#607EAA"}}>Profile</h1>}
            {user.data?.role === "Admin" && <h1 style = {{color: "#607EAA"}}>Admin Profile</h1>}
            
            <div className={styles.card}>
                <img style = {{width : "8rem", height : "10rem", marginRight:"2rem", objectFit: "cover"}} src={user.data?.pic} alt = "profile_pic"></img>
                <div style = {{width: "100%", display: "flex", flexDirection: "column"}}>
                    <p>Name: {user.data?.displayName} </p>
                    {/* <p>Date of Birth: {user.data?.birthDate}</p> */}
                    <p>Email: {user.data?.email}</p>
                    {user.data?.status === "Banned" ? (
                        <p style = {{color: "red"}}> (Banned)</p>
                    ): (
                        <></>
                    )}
                    <hr style = {{marginLeft: "0", marginRight: "0"}}/>
                    <p >Bio: {user.data?.bio}</p>
                    
                    {
                    other ? (
                        <>
                            { auth.role === "Admin" ? (
                                <div style = {{marginTop: "auto", alignSelf: "flex-end", marginBottom: "0", width: "15%"}}>
                                    <button style = {{width: "100%"}} onClick={(e) => handleSubmit(e)} >Ban</button>
                                </div>
                            ): (
                                <></>
                            )}
                        </>
                    ) : (
                        <Link to={`/profile-edit`} style = {{marginTop: "auto", alignSelf: "flex-end", marginBottom: "0", width: "15%"}}>
                        <button style = {{width: "100%"}}>Edit</button>
                        </Link>
                    )
                }
                    
                </div>
            </div>

            {/* <h1 style = {{color: "#607EAA", marginTop: "3rem"}}>Posts</h1>
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
            </div> */}
            
        </>
    )
}

export default Profile;