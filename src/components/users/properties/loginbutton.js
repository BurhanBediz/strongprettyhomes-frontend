import React, { useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
    const navigate = useNavigate();
  return (
    <button className="btn-lg" style={styles.button} type="submit" onClick={()=> navigate(`/auth`)}>
             You must login to request a tour!
   </button>
  )
}

const styles = {
button: {
   
    border :0,
    backgroundColor : "var(--color1)",
    borderRadius: 5,
    width: 360,
    margin:"10px",
    marginLeft:"590px",
    minHeight:50,
    padding: 20,
    color:"white",
    display: "flex",
    textAlign: "center"
}
}
export default LoginButton