import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URL from "../config/Api";
const StuEdit=()=>{
    const {id} = useParams();
    const [mydata, setMydata] = useState({});


    const loadData=async()=>{
    let api=`${BASE_URL}/students/editdatashow/?id=${id}`;
    const res = await axios.post(api);
    setMydata(res.data);
    console.log(res.data);
    }

    useEffect(()=>{
        loadData();
    }, [])
    
    const handleInput=(e)=>{
         let name= e.target.name;
         let value= e.target.value;
         setMydata(values=>({...values, [name]:value}));
         console.log(mydata);
    }


     /*const handleSubmit=async(e)=>{
        e.preventDefault();
        let api=`${BASE_URL}/students/editdatasave`;
        const res= await axios.put(api, mydata);
        console.log(res);   
     }*/

        const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BASE_URL}/students/editdatasave`;

    try {
        const res = await axios.put(api, mydata);

        if (res.status === 200) {
            // Assuming success status is 200
            console.log("Updated Successfully");
            alert("Updated Successfully");
        } else {
            console.log("Not Updated");
            alert("Not Updated");
        }
    } catch (error) {
        console.log("Error occurred:", error);
        alert("Something went wrong. Not Updated.");
    }
}


    return(
        <>
          <div id="myForm" className="bg-dark">
          <h1> Edit Detail : </h1>
          <Form id="form"> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Roll No.</Form.Label>
        <Form.Control type="text" name="rollno"  value={mydata.rollno}  onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail"> 
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" value={mydata.name} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter city</Form.Label>
        <Form.Control type="text" name="city" value={mydata.city} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter 2 city</Form.Label>
        <Form.Control type="text" name="fees" value={mydata.fees}  onChange={handleInput} />
      </Form.Group>
      <Button className="button" type="submit" onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
</div>
        
        </>
    )
}

export  default StuEdit;