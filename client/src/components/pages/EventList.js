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
            setEvents(res.data.data);
        }).catch(
            (err) => console.log("err", err)
        );
    }, [name, events, setEvents])

    function deleteEvent(e) {
        console.log(e);        
        // set configurations
        const configuration = {
          method: "delete",
          url: "/event/delete-event",
          data: {
            _id: e._id,
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
    return (
        <>
        <div className={styles.card}>
            {events.length === 0 ? (
                <>No event</>
            ) : (
                <>
                    {events.map((event) => (
                    <div className={styles.content}>
                        <p className={styles.title}>Name: {event.eventName}</p>
                        <p style ={{marginLeft:"1rem"}}>Date: {event.eventDateTime}</p>
                        <p style ={{marginLeft:"1rem"}}>Location: {event.eventLocation}</p>
                        
                        <p style ={{marginLeft:"1rem"}}>Description: {event.description}</p>
                        <div style = {{display: "flex", justifyContent: "right"}}><p className = {styles.delete} onClick={(e) => deleteEvent(event)}>Delete</p></div>
                        <hr></hr>
                    </div>
                    ))}
                </>
            )} 
            

        </div>
        </>

    );
}

export default EventList;