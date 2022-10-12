import React, { useEffect, useState } from 'react';
import styles from './Modules/BuildingDetails.module.css';
import Rating from 'react-rating'
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import GetPosts from './Posts';
//import PostComments from './Comments'
import PostList from './PostList';


function BuildingDetails() {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const {name} = useParams();
    const [building, setBuilding] = useState("");
    const [post, setPost] = useState([]);
    const [rated, setRated] = useState(false);
    const [approve, setApprove] = useState(false);

    const handleRating = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // set configurations
        const configuration = {
          method: "post",
          url: "/building/rate-building",
          data: {
            id: JSON.parse(localStorage.getItem("User"))._id,
            buildingName: name,
            rating
          },
        };

        // make the API call
        axios(configuration)
          .then((result) => {
            setRated(true);
          })
          .catch((error) => {
            error = new Error();
          });
      };

    useEffect(() => {
        axios.get(`/building/building-detail/${name}`)
        .then(res => {
            setBuilding(res.data);
        }).catch(
            (err) => console.log("err", err)
        );

        axios.get(`/post/getpost/${name}`)
        .then(res => {
            setPost(res.data);
        }).catch(
            (err) => console.log("err", err)
        );
        setRating(rating);
    }, [setBuilding, post, name, rating])

    const deleteBuilding = () => {
        const configuration = {
          method: "delete",
          url: "/admin/delete-building",
          data: {
            name
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
    }

    function approveBuilding(e) {
        setApprove(true);
        const configuration = {
          method: "post",
          url: "/admin/approve",
          data: {
            id: e
          },
        };
        // make the API call
        axios(configuration)
        .then((result) => {
        })
        .catch((error) => {
          error = new Error();
        });
    }
    return (
        <>  
            <div style = {{display: "flex", justifyContent: "space-between"}}>
            <h1 style = {{color: "#607EAA"}}>{building.name}</h1>
            <div style = {{marginTop: "auto", marginBottom: "0"}}>
                {auth.email ? (
                    <Link style = {{color: "grey"}} key = {building.id} to={`/building-edit/${building.name}`}>Edit Building</Link>
                ) :(
                    <></>
                )
                }
                
            </div>
            </div>
            <div className={styles.card}>
                <img src = {building.data?.pic} alt = "building_pic"></img>
                <div style = {{display: "flex", flexDirection: "column", marginRight: "2.5rem", textAlign: "center"}}>
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
                    
                    <p style={{display:"flex", alignItems:"center", margin: "auto", marginTop:"1rem"}}>Rating: <Rating initialRating={building.data?.averageRating} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" readonly/></p>
                </div>
                {auth.role === "Admin" && (
                    <div style = {{display: "flex", width: "100%", justifyContent:"right"}}>
                        {building?.data?.approved ? (
                            <></>
                        ) : (
                            <>
                                {approve ? (
                                    <p style = {{margin :"auto", marginRight: "1rem", marginBottom: "0"}}>Approved</p>
                                ) :(
                                    <button style = {{margin:"auto",  width: "15%"}} onClick={(e) => approveBuilding(building.data._id)}>Approve</button>
                                )}
                            </>
                            
                        )
                        }
                        
                        <button style = {{alignSelf: 'flex-end', marginTop:'1.5rem' , width: "15%"}} onClick={deleteBuilding}>Delete</button>
                    </div>
                    
                )}
                
            </div>
            {auth.email ? (
                <>
                <div className={styles.rate}>
                    <p style={{display:"flex", alignItems:"center"}}>Your Rating:<Rating initialRating={rating} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" fractions={2} onClick={(e) => setRating(e)}/></p>
                    {!rated ? (
                        <button onClick={(e) => handleRating(e)} style={{height:"2rem"} }>Update</button>
                    ) : (
                        <p>Updated</p>
                    )}
                </div>
                <GetPosts building = {name}/>
                </>
            ) : (
                <></>
            )}
            <h1 style = {{color: "#607EAA", marginTop: "3rem"}}>Posts</h1>
            <PostList postList = {post}/>

            
        </>
    )
}

export default BuildingDetails;