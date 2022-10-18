import React from 'react';
import styles from './Modules/About.module.css';

function About() {
    return (
        <>
            <div className={styles.container}>
                <h1>About Us</h1>
<<<<<<< Updated upstream
                <p>content</p>
                <h1>Member</h1>
                <p>content</p>
                
=======
                <div className={styles.content}>
                <p style = {{marginTop: "2rem"}}>Welcome to Unirecs!</p>
                <br></br>
                <p style = {{margin:"auto", width: "60%"}}>We're a passionate bunch of computer science undergraduates inspired to improve the 
                    experience of current and incoming students in UniMelb! </p>
                <br></br>
                <p style = {{margin:"auto", width: "60%"}}>Unirecs is an application designed to allow 
                    students to provide their reviews to establishments in the Unimelb campus, to obtain a better overview 
                    of what is available on campus to meet the requirements of students!</p>
                </div>
                <h1 style = {{marginTop: "2rem"}}>Members</h1>
                <div className={styles.member}>
                <img src="https://res.cloudinary.com/dm13bguzr/image/upload/v1664328940/group_photo_xthmow.jpg" alt = "member"></img>
                </div>
                <p>Jiayao Wu - FrontEnd/Backend</p>
                <p>Yun Keng Leong - FrontEnd</p>
                <p>Hai Thong Nguyen - FrontEnd</p>
                <p>Boon Hien Thia - Backend</p>
                <p>Brandon Widjaja - Backend</p>
>>>>>>> Stashed changes
            </div>
        </>
    )
}

export default About;