import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();

  function goToHomePg(){
    navigate('/');
  };

  return (
    <div>
      Dashboard page
      <br/>
      <br/>
      <button onClick={goToHomePg}>Go to Home</button>
      <Outlet/>
    </div>
  )
}

export default Dashboard
