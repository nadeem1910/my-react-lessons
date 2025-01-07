import { createContext, useState } from "react"
import ChildA from "./components/ChildA";


// step 1 -> creating context
const userContext = createContext();

// step 2 -> wrap all the child inside a provider
// step 3 -> pass value
// step 4 -> consume the context inside the consumer
function App() {
  const [user,setUser] = useState({name:"Nadeem"})
    return (
      <>
        <userContext.Provider value={user}>
          <ChildA />
        </userContext.Provider> 
      </>
    )
}

export default App
export {userContext}
