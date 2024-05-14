import axios from "axios";
import { useState } from "react";


const Search=()=>{
    const [rollno,setRollno]=useState("");
    const [mydata, setMydata]=useState([]);

    const handleSubmit=()=>{
        let url=`http://localhost:3000/student/?rollno=${rollno}`;

        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    }

const ans=mydata.map((key)=>{
    
    return(
        
    <div>
        <h1>name : {key.name}</h1>
        <h1>Rollno : {key.rollno} </h1>
        <h2>cIty : {key.city} </h2>
        <h2>total tution fees: {key.fees} </h2>
        
    </div>
    );
});
    
    return(
        <>
            <h1>welcome to Search</h1>
            Enter Rollno:
            <input type="text" value={rollno} onChange={(e)=>{setRollno(e.target.value)}}/>
            <button onClick={handleSubmit}>search</button>
            <br/>
            <br/>
            {ans}
        </>
        
    )
  }
  export default Search;
