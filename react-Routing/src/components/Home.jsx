import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  function goToAboutPg(){
    navigate("/about")
  }
  return (
    <div>
      Home Page
      <br/>
      <br/>
      <button onClick={goToAboutPg}>About Page</button>
    </div>
    
  )
}

export default Home
