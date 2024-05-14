import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import myimg1 from "./img/edit.png";
import myimg2 from "./img/delet.jpg";

const Update = () => {
    const [mydata, setMydata] = useState([]);
    const navigate = useNavigate();

    const loadData = () => {
        let url = "http://localhost:3000/student";
        axios.get(url).then((res) => {
            setMydata(res.data);
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });
    }

    useEffect(() => {
        loadData();
    }, []);

    const myDel = (id) => {
        let api = `http://localhost:3000/student/${id}`;
        axios.delete(api).then((res) => {
            alert("Record Deleted");
            loadData();
        }).catch((error) => {
            console.error("Error deleting record:", error);
        });
    }

    const recUpdate = (id) => {
        navigate("/myedit/" + id);
    }

    const ans = mydata.map((key) => {
        return (
            <tr key={key.id}>
                <td>{key.id}</td>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                
                <td align="center">
                <a href="#" onClick={()=>recUpdate(key.id)}>
                    <img src={myimg1} alt="Edit" width="50" />
                    </a>
                </td>
                
                <td align="center">
                    <a onClick={() => myDel(key.id)}>
                        <img src={myimg2} alt="Delete" width="30" />
                    </a>
                </td>
            </tr>
        );
    });

    return (
        <>
            <h1>Update</h1>
            <table width="500" align="center" bgcolor="pink" border="1">
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>Rollno</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Fees</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    {ans}
                </tbody>
            </table>
        </>
    );
}

export default Update;
