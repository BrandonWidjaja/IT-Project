import React from 'react';
import PropTypes from 'prop-types'
import styles from './Modules/Buildings.module.css';
import { Link } from 'react-router-dom';
import Rating from 'react-rating'

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
            <Link key = {building.id} to={`/building-detail/${building.name}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className={styles.card}>
                    <img src="https://images.unsplash.com/photo-1626092806645-ae053131caff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "test"></img>
                    <div className={styles.cardDetail} style = {{width: "100%"}}>
                        <div styles = {{height: "80%"}}>
                            <h2>Name: {building.name}</h2>
                            <p>Location: {building.location}</p>
                            <p style={{}}>Rating:<Rating initialRating={building.rating} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" readonly/></p>
                        </div>
                        <div>
                            <p>Rating:<Rating initialRating={building.rating} emptySymbol="fa fa-star-o fa-lx" fullSymbol="fa fa-star fa-lx" readonly/></p>
                        </div>
                    </div>
                </div>
            </Link>
        ))}
        </>
    );
}

export default GetList;