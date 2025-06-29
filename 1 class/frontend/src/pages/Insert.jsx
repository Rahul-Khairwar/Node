
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config/Api';
import axios from 'axios';

const Insert = () => {

const [input,setInput] = useState({});

const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setInput(values=>({...values,[name]:value}))
    console.log(input)
}

const handleSubmit = async (e) =>{
    e.preventDefault();
    let api = `${BASE_URL}/students/save`;
    const response = await axios.post(api,input);
    console.log(response);
    alert("done✅")
}

  return (
    <>
        <div id="myForm" className='bg-dark'>
          <Form id='form'>
          <h1>student details</h1>

     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Rollno.</Form.Label>
        <Form.Control type="text" name='rollno' placeholder='rollno' onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='name' placeholder='name' onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text"  name='city' placeholder='city' onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Fees</Form.Label>
        <Form.Control type="text"  name='fees' placeholder='fees' onChange={handleInput} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>

    </Form>
    </div>
    </>
  )
}

export default Insert
