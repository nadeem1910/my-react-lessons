import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'

function App() {
  const [isLoggedIn , setLog] = useState(true)
  
  // i) ternary operator
      return(
        <div>
          {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
        </div>
      )

  // ii) if-else method
      // if (isLoggedIn) {
      //   return(
      //     <LogoutBtn />
      //   )
      // }
      // else{
      //   return(
      //     <LoginBtn />
      //   )
      // }
  
}

export default App
