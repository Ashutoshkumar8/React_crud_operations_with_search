import axios from "axios";
import { useEffect, useState } from "react";

const Display = () => {
    const [mydata, setMydata] = useState([]);

    const loadData = () => {
        let url = "http://localhost:3000/student";

        axios.get(url).then((res) => {
            setMydata(res.data);
        });
    }

    useEffect(() => {
        loadData();
    }, []);

    const ans = mydata.map((key) => {
        return (
            <tr >
                <td>{key.id}</td>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
        );
    });

    return (
        <>
            <h1>Welcome to display</h1>
            <table width="500" align="center" bgcolor="pink" border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Rollno</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Fees</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
            </table>
        </>
    );
}

export default Display;
