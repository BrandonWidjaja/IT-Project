import React from 'react';
import styles from './Modules/Profile.module.css';
// import { useParams } from 'react-router-dom';

function ProfileEdit() {
    // const {email} = useParams();

    // const [name, setName] = useState("");

    // UpdateProfileHandler=(e)=>{
    //     e.preventDefault();
    //     //create object of form data

    //     //update-profile
    //     axios.post("http://localhost:3001/user/edit-profile/",formData,{
    //         headers: {
    //             "content-type": "application/json"
    //           }
    //     }).then(res=>{
    //         console.log(res);
    //        this.setState({msg:res.data.message});
    //     })
    //     .catch(err=>console.log(err))
    // }


    return (
        <>
            <h1 style = {{color: "#607EAA"}}>Profile</h1>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1626092806645-ae053131caff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "test"></img>
                <div style = {{width: "100%", display: "flex", flexDirection: "column"}}>
                    <div style = {{display: "flex"}}>
                        <p style = {{width: "25%"}}>Name:</p>
                        <input style = {{width: "60%"}} className={styles.searchbar} type="text" placeholder='Name'></input>
                    </div>
                    <div style = {{display: "flex"}}>
                        <p style = {{width: "25%"}}>Date of Birth:</p>
                        <input style = {{width: "60%"}} className={styles.searchbar} type="text" placeholder='Date of Birth'></input>
                    </div>
                    <hr style = {{marginLeft: "0", marginRight: "0"}}/>
                    <div style = {{display: "flex", marginBottom: "1rem"}}>
                        <p style = {{width: "25%"}}>Bio:</p>
                        <input style = {{width: "60%", height: "5rem"}} className={styles.searchbar} type="text" placeholder='Bio'>
                        </input>
                    </div>
                    <button style = {{marginTop: "auto", alignSelf: "flex-end"}}>Edit</button>
                </div>
            </div>
        </>
    )
}

export default ProfileEdit;