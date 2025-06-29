import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from "axios";
import BASE_URL from '../config/Api';

const Display = () => {
    const [studata,setStudata] = useState([]);

   const loadData = () =>{

        let api = `${BASE_URL}/students/datadisplay`;

        axios.get(api).then((res)=>{
            console.log(res.data);
            setStudata(res.data);
        })
     }

    useEffect(()=>{
            loadData();
        },[]);

      let sno=0;
    const ans= studata.map((key)=>{
        sno++;
        return(
            <>
              <tr>
                <td> {sno} </td>
                <td> {key.rollno} </td>
                <td> {key.name} </td>
                <td> {key.city} </td>
                <td> {key.fees} </td>
              </tr> 
            </>
        )
    })

  return (
    <>
     <h1>Display Records</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
    </>
  )
}

export default Display
