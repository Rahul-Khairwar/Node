import React, { useEffect, useState } from 'react'
import BASE_URL from '../config/Api';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Update = () => {

    const [studata,setStudata] = useState([]);
  const navigate= useNavigate();

    const loadData=async()=>{

    let api = `${BASE_URL}/students/updatedata`;

    axios.get(api).then((res)=>{
        console.log(res.data);
        setStudata(res.data);
    })
}

    useEffect(()=>{
        loadData()
    },[])


     const myDel=async(id)=>{
  let api=`${BASE_URL}/students/studelete`;
  const res= await axios.post(api,{StuId:id})
  console.log(res.data)
  loadData();
 }

 const myEdit=(id)=>{
  navigate(`/stuedit/${id}`)
}


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
                <td> 
                    <button onClick={()=>{myDel(key._id)}} >delete</button>  
                    </td>
                <td> <a onClick={()=>{myEdit(key._id)}} >edit</a>  </td>
              </tr> 
            </>
        ) 
    })

  return (
    < >
       <h1>Display Records</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>fees</th>
          <th>delete</th>
          <th>edit</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
    </>
  )
}

export default Update
