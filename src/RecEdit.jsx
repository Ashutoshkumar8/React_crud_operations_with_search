import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const RecEdit=()=>{
const [mydata,setMydata]=useState({});

const {id} = useParams();

const loadData=()=>{
    let api=`http://localhost:3000/student/${id}`
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
}

const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values,[name]:value}))
}

console.log(mydata);

const editSave=()=>{
    let url=`http://localhost:3000/student/${id}`;
   axios.put(url,mydata).then((res)=>{
    alert("save");
   })

}
useEffect(()=>{
    loadData();
}, []);



    return(
        <>
            <h1>welcome to edit : </h1>
            <input type="text" name="id" value={mydata.id} onChange={handleInput}/>
            <br/>
            <input type="text" name="rollno" value={mydata.rollno} onChange={handleInput}/>
            <br/>
            <input type="text" name="name" value={mydata.name} onChange={handleInput}/>
            <br/>
            <input type="text" name="city" value={mydata.city} onChange={handleInput}/>
            <br/>
            <input type="text" name="fees" value={mydata.fees} onChange={handleInput}/>
            <br/>
            <button onClick={editSave}>update</button>
        </>
    )
  }
  export default RecEdit;
