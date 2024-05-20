import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const firebase=useFirebase();
  const navigate=useNavigate();



  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  useEffect(()=>{
    if(firebase.isLoggedIn){
     navigate("/");
    }
  },[firebase,navigate])

  const handleSubmit= async(e)=>{
      e.preventDefault();
      console.log("login in a user....");
    const result= await firebase.siginWithEmailAndPass(email,password);
     
    console.log("successfull",result);
}

  return (
    <div className='container mt-5'>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control onChange={e=> setEmail(e.target.value)} type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
    Login
    </Button>
  </Form>

  <h1 className='mt-5 mb-5'>Or</h1>
  <Button variant='danger' onClick={firebase.siginWithGoogle}>Signin with Google</Button>
  </div>
  )
}
