import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  function goToDashbrd(){
    navigate('/dashboard')
  };
  return (
    <div>
      About page
      <br/>
      <br/>
      <button onClick={goToDashbrd}>Go to Dashboard</button>
    </div>
  )
}

export default About
