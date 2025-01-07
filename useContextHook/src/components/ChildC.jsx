import React, { useContext } from 'react'
import { userContext } from '../App'

const ChildC = () => {
    // using context
    const user = useContext(userContext)
  return (
    <div>
      {user.name}
    </div>
  )
}

export default ChildC
