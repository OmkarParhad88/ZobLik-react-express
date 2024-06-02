import React from 'react'
import { signOut } from '../state/name/nameSlice'
import { useSelector , useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.name.value)

  const SignOut = () => {
   dispatch(signOut());
   navigate("/"); 
  };
  return (
    <>
      
      <h1>this is home page</h1>
      <h4>  the user name is " {name} "geting from reduxstore</h4>
      
      <Button color="primary" onClick={SignOut}>SignOut</Button>
      

    </>
  )
}

export default Home
