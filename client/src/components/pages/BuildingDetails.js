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
    var rating = 0;
    const {name} = useParams();
    const [building, setBuilding] = useState("");
    const [post, setPost] = useState([]);
    const [rated, setRated] = useState(false);

    const setRating = (e) => {
        rating = e;
    }

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
        axios.get(`http://localhost:3001/building/building-detail/${name}`)
        .then(res => {
            setBuilding(res.data);
        }).catch(
            (err) => console.log("err", err)
        );

        axios.get(`http://localhost:3001/post/getpost/${name}`)
        .then(res => {
            setPost(res.data);
        }).catch(
            (err) => console.log("err", err)
        );
    }, [setBuilding, name])

    const deleteBuilding = () => {
        const configuration = {
          method: "delete",
          url: "http://localhost:3001/admin/delete-building",
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


    return (
        <>  
            <div style = {{display: "flex", justifyContent: "space-between"}}>
            <h1 style = {{color: "#607EAA"}}>{building.name}</h1>
            <div style = {{marginTop: "auto", marginBottom: "0"}}>
                <Link style = {{color: "grey"}} key = {building.id} to={`/building-edit/${building.name}`}>Edit Building</Link>
            </div>
            </div>
            <div className={styles.card}>
                <img src = {building.data?.pic} alt = "building_pic"></img>
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
                    
                    <p style={{display:"flex", alignItems:"center"}}>Rating: <Rating initialRating={building.data?.averageRating} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" readonly/></p>
                </div>
                {auth.role === "Admin" && (
                    <button style = {{alignSelf: 'flex-end', marginTop:'1.5rem' , width: "15%"}} onClick={deleteBuilding}>Delete</button>
                )}
                
            </div>
            {auth.email ? (
                <>
                <div className={styles.rate}>
                    <p style={{display:"flex", alignItems:"center"}}>Your Rating:<Rating initialRating={0} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" fractions={2} onChange={(e) => setRating(e)}/></p>
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