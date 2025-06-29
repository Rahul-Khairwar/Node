import axios from "axios";
import { useState } from "react";

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BASE_URL from "../config/Api";

const Search=()=>{
    const [rno, setRno]= useState("");
    const [mydata, setMydata]= useState([]);  
    
    
    const handleSubmit=()=>{
        let api=`${BASE_URL}/students/searchdata`;
        axios.post(api, {sturno:rno}).then((res)=>{
            console.log(res.data);
            setMydata(res.data);

        })
    }

    const ans=mydata.map((key)=>{
        return(
            <>
             <h1>{key.rollno}</h1>
             <h1>{key.name}</h1>
             <h1>{key.city}</h1>
             <h1>{key.fees}</h1>
      
            </>
        )
    })
    return(
        <>
        <center>
          <h1 id="searchbar"> Search Data</h1>
          <span>Enter Rollno :</span> 
          <input id="input" type="text" value={rno} onChange={(e)=>{setRno(e.target.value)}} />
          <button id="but" onClick={handleSubmit}> Search</button>
          <br /><br />
          
            {ans}
          
          </center>


        </>
    )
}

export default Search;