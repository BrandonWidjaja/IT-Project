import React from 'react';
import PropTypes from 'prop-types'
import styles from './Modules/Buildings.module.css';
import { Link } from 'react-router-dom';
import axios from "axios";

GetList.propTypes = {
    buildingList: PropTypes.array,
};

GetList.defaultProps = {
    buildingList: [],
};

function GetList(props) {
    const {buildingList} = props;

    function deleteBuilding(e) {
        const configuration = {
          method: "delete",
          url: "/admin/delete-building",
          data: {
            e
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
        {buildingList.map((building) => (
            <>
                {!building?.approved ? (
                    <Link key = {building.id} to={`/building-detail/${building.name}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <div className={styles.card}>
                        <div style = {{width: "25%", marginRight: "1rem"}}>
                            <img style = {{width: "100%", maxHeight: "10rem", objectFit:"cover"}}src={building?.pic} alt = "test"></img>
                        </div>
                        <div className={styles.cardDetail} style = {{width: "100%"}}>
                            <div styles = {{height: "80%"}}>
                                <h2>{building.name}</h2>
                                <p>Location: {building.location}</p>
                            </div>
                        </div>
                        
                    </div>
                </Link>
                ) : (
                    <></>
                )}
            </>
            
            
        ))}
        </>
    );
}

export default GetList;