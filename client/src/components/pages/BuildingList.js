import React from 'react';
import PropTypes from 'prop-types'
import styles from './Modules/Buildings.module.css';
import { Link } from 'react-router-dom';


GetList.propTypes = {
    buildingList: PropTypes.array,
};

GetList.defaultProps = {
    buildingList: [],
};

function GetList(props) {
    const {buildingList} = props;
    // console.log(props)
    return (
        <>
        {buildingList.map((building) => (
            <Link key = {building.id} to={`/building-detail/${building.name}`}>
                <div className={styles.card}>
                    <img src="https://images.unsplash.com/photo-1626092806645-ae053131caff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "test"></img>
                        <div style = {{width: "100%"}}>
                            <p>Name: {building.name}</p>
                            <p>Location: {building.location}</p>
                            <hr/>
                            <p>Rating:</p>
                        </div>
                </div>
            </Link>
        ))}
        </>
    );
}

export default GetList;