import styles from './Modules/Profile.module.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import PostList from './PostList';

function Profile() {
    const { auth, getWithExpiry } = useAuth();
    const { id } = useParams();
    const [user, setUser] = useState("");
    const [other, setOther] = useState(true);
    const navigate = useNavigate();
    const [post, setPost] = useState([]);

    useEffect(() => {
        const user = getWithExpiry("Session");
        axios.get(`/user/getprofile/${id}`)
            .then(res => {
                setUser(res.data);
            }).catch(
                (err) => console.log("err", err)
        );

        axios.get(`/post/getuserpost/${id}`)
        .then(res => {
            setPost(res.data);
        }).catch(
            (err) => console.log("err", err)
        );

        if (localStorage.getItem('Session')) {
            if (user._id === id) {
                setOther(false);
            } else {
                setOther(true);
            }
        }
    }, [setUser, navigate, setPost, id, auth, post, user, getWithExpiry])

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
            <h1 style = {{color: "#607EAA", marginTop: "4rem",marginBottom: "1rem"}}>Posts</h1>
            <PostList postList = {post}/>
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