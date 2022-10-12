import React, { useState } from 'react';
import styles from './Modules/NewEvent.module.css';
import axios from "axios";
import { useParams } from 'react-router-dom';

function NewEvent() {
    const [eventName, setEventName] = useState(""); 
    const [eventDateTime, setEventDateTime] = useState(""); 
    const [eventLocation, setEventLocation] = useState(""); 
    const [description, setDescription] = useState("");
    const [event, setEvent] = useState(false);
    const {name} = useParams();
 
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        
        // set configurations
        const configuration = {
          method: "post",
          url: "/event/new",
          data: {
            eventLocationName: name,
            eventName,
            eventDateTime,
            eventLocation,
            description
          },
        };
        console.log(eventName, eventLocation, description);
    
        // make the API call
        axios(configuration)
          .then((result) => {
            setEvent(true);
          })
          .catch((error) => {
            error = new Error();
          });
      };

    return (
        <>
            <h1 style = {{color: "#607EAA"}}>Add New Event</h1>
            <div className={styles.add}>
            {!event ? (
                <div style = {{width: "100%", display: "flex", flexDirection: "column"}}>
                    <div style = {{paddingBottom: "0.5rem", display: "flex"}}><p style = {{width: "25%"}}>Name of Event:</p>
                    <input style = {{width: "60%"}} className={styles.searchbar} type="text"
                    value={eventName} onChange={(e) => setEventName(e.target.value)} 
                    placeholder='Event Name' required/>
                    </div>
                    <div style = {{paddingBottom: "0.5rem", display: "flex"}}><p style = {{width: "25%"}}>Date & Time of Event:</p>
                    <input style = {{width: "60%"}} className={styles.searchbar} type="text"
                    value={eventDateTime} onChange={(e) => setEventDateTime(e.target.value)} 
                    placeholder='Eg: 25/1/2022 10:00am' required/>
                    </div>
                    <div style = {{paddingBottom: "0.5rem", display: "flex"}}><p style = {{width: "25%"}}>Location:</p>
                    <input style = {{width: "60%"}} className={styles.searchbar} type="text" 
                    value={eventLocation} onChange={(e) => setEventLocation(e.target.value)}  
                    placeholder='Location' required/>
                    </div>
                    <div style = {{display: "flex", marginBottom: "1rem"}}><p style = {{width: "25%"}}>Description:</p>
                    <textarea style = {{width: "60%", height: "20rem"}} className={styles.searchbar} type="text" 
                    value={description} onChange={(e) => setDescription(e.target.value)} 
                    placeholder='Description' required/>
                    </div>
                    <button onClick={(e) => handleSubmit(e)} style = {{marginTop: "auto", alignSelf: "flex-end"}}>Save</button>
                </div>
            ): (
                <p>Event added successfully</p>
            )}
            </div>
        </>
    )
}

export default NewEvent;