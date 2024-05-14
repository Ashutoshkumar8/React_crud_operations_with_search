import axios from "axios";
import { useState } from "react";

const Register=()=>{
    const [input, setInput]= useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input)
    }

    const handleSubmit=()=>{
        let url="http://localhost:3000/student";
        axios.post(url,input).then((res)=>{
            alert("you are Sessessfully Register!!");
        })
    }

    return(
        <>
        <h1>Welcome to home registation</h1>
        Enter Name : <input type="text" name="name" value={input.name} onChange={handleInput}/>
        <br/>
        Enter User ID : <input type="text" name="userid" value={input.userid} onChange={handleInput}/>
        <br/>
        Enter Email : <input type="text" name="email" value={input.email} onChange={handleInput}/>
        <br/>
        Enter Password : <input type="password" name="password" value={input.password} onChange={handleInput}/>
        <br/>
        <button onClick={handleSubmit}>Register Now!</button>
        </>


    )
}
export default Register;