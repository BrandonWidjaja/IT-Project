import PropTypes from 'prop-types'
import axios from "axios";
import React, { useEffect, useState } from 'react';
import styles from './Modules/EventList.module.css';

EventList.propTypes = {
    name: PropTypes.string,
};
  
EventList.defaultProps = {
    name: "default",
};

function EventList(props) {
    const {name} = props;
    const [events, setEvents] = useState([]);

    useEffect(() => {
         axios.get(`/event/getbuildingevent/${name}`)
        .then(res => {
            console.log(res.data.data);
            setEvents(res.data.data);
        }).catch(
            (err) => console.log("err", err)
        );
    }, [name])

    return (
        <>
        <div className={styles.card}>
            {events.map((event) => (
                <div className={styles.content}>
                    <p className={styles.title}>Name: {event.eventName}</p>
                    <p style ={{marginLeft:"1rem"}}>Date: {event.eventDateTime}</p>
                    <p style ={{marginLeft:"1rem"}}>Location: {event.eventLocation}</p>
                    
                    <p style ={{marginLeft:"1rem"}}>Description: {event.description}</p>
                    <hr></hr>
                </div>
            ))}

        </div>
        </>

    );
}

export default EventList;