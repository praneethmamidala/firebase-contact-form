import React, { useState, useEffect} from 'react';
import "../app.css";
import { db } from "../firebase";

const Contact = () => {
    const [firstname,setFirstname]=useState("");
    const [secondname,setSecondname]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [house,setHouse]=useState("");
    const [city,setCity]=useState("");
    const [state,setState]=useState("");

    const [loader,setLoader]=useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection('contacts')
        .add({
            firstname: firstname,
            secondname: secondname,
            email: email,
            mobile: mobile,
            house: house,
            city: city,
            state: state,
        })
        .then(() => {
            alert("Your message has been successfully submitted👍");
            setLoader(false);
        })
        .catch(error => {
            alert(error.message);
            setLoader(false);
        });

        setFirstname("");
        setSecondname("");
        setEmail("");
        setMobile("");
        setHouse("");
        setCity("");
        setState("");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>PERSONAL DETAILS 👨‍💼</h1>

            <label>First Name</label>
            <input placeholder="First name" value={firstname}
            onChange={(e) => setFirstname(e.target.value)}/>

            <label>Second Name</label>
            <input placeholder="Second name" value={secondname}
            onChange={(e) => setSecondname(e.target.value)}/>

            <label>Email</label>
            <input placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)}/>

            <label>Mobile</label>
            <input placeholder="Mobile" value={mobile}
            onChange={(e) => setMobile(e.target.value)}/>

            <h1>ADDRESS 🏠</h1>

            <label>House No/Building</label>
            <input placeholder="House No/Building" value={house}
            onChange={(e) => setHouse(e.target.value)}/>
            <label>City</label>
            <input placeholder="City" value={city}
            onChange={(e) => setCity(e.target.value)}/>
            <label>State</label>
            <input placeholder="State" value={state}
            onChange={(e) => setState(e.target.value)}/>

            <button type="submit" style={{background : loader ? "#ccc" : "rgb(2, 2, 110)"}}>Submit</button>
        </form>
    )
}

export default Contact
