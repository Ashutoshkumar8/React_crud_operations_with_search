import { useState } from "react";
import axios from "axios";

const Insert = () => {
    const [input, setInput] = useState({});//input={rollno:22}

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));//spared operater
    };

    const handleSubmit = () => {
        let url = "http://localhost:3000/student";
        axios.post(url, input)
            .then((res) => {
                alert("Data successfully saved!");
            })
            .catch((err) => {
                console.error("Error saving data:", err);
            });
    };

    return (
        <>
            <h1>Welcome to Insert</h1>
            Enter id:<input type="text" name="id" onChange={handleInput} />
            <br />
            Enter roll:<input type="text" name="rollno" onChange={handleInput} />
            <br />
            Enter name:<input type="text" name="name" onChange={handleInput} />
            <br />
            Enter city:<input type="text" name="city" onChange={handleInput} />
            <br />
            Enter fees:<input type="text" name="fees" onChange={handleInput} />
            <br />
            <button onClick={handleSubmit}>Save</button>
        </>
    );
};

export default Insert;
