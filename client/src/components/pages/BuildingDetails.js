import React, { useEffect, useState } from 'react';
import styles from './Modules/BuildingDetails.module.css';
import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/fontawesome-free-solid"
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import GetPosts from './Posts';
import PostComments from './Comments'

function BuildingDetails() {
    const { auth } = useAuth();
    const navigate = useNavigate();
    
    var rating = 0;
    const {name} = useParams();

    const [building, setBuilding] = useState("")

    const setRating = (e) => {
        rating = e;
    }

    const handleRating = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
  
        // set configurations
        const configuration = {
          method: "post",
          url: "http://localhost:3001/building/rate-building",
          data: {
            id: JSON.parse(localStorage.getItem("User"))._id,
            buildingName: name,
            rating
          },
        };

        // make the API call
        axios(configuration)
          .then((result) => {
          })
          .catch((error) => {
            error = new Error();
          });
      };

    useEffect(() => {
        axios.get(`http://localhost:3000/building/building-detail/${name}`)
        .then(res => {
            setBuilding(res.data);
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
        <>  <div style = {{display: "flex", justifyContent: "space-between"}}>
            <h1 style = {{color: "#607EAA"}}>{building.name}</h1>
            <Link key = {building.id} to={`/building-edit/${building.name}`}>Edit Building</Link>
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
                    
                    <p style={{display:"flex", alignItems:"center"}}>Rating: <Rating initialRating={building.data?.rating} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" readonly/></p>
                </div>
                {auth.role === "Admin" && (
                    <button style = {{alignSelf: 'flex-end', marginTop:'1.5rem' , width: "15%"}} onClick={deleteBuilding}>Delete</button>
                )}
                
            </div>
            <div className={styles.rate}>
                <p style={{display:"flex", alignItems:"center"}}>Rate:<Rating initialRating={0} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" fractions={2} onChange={(e) => setRating(e)}/></p>

                <button onClick={(e) => handleRating(e)} style={{height:"2rem"} }>Update</button>
            </div>
            <GetPosts building = {name}/>

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
                    <PostComments Comments />
                </form>
                <div className={styles.like}>
                    <FontAwesomeIcon className ={styles.likeIcon} icon={Icons.faThumbsUp} size="xl" onClick={()=> console.log("hahahahaha")}/>
                    <p style={{marginLeft:'0.5rem', marginRight:'0.5rem'}}>20</p>
                    <FontAwesomeIcon className ={styles.likeIcon} icon={Icons.faThumbsDown} size="xl"/>
                    <p style={{marginLeft:'0.5rem'}}>20</p>
                </div>
            </div>
            
        </>
    )
}

export default BuildingDetails;