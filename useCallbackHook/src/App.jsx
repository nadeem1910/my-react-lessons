// useCallBack hook --> It's a hook that lets you cache a function definition between re-renders.
import { useCallback , useState } from 'react';
import './App.css'
import ChildComponent from './components/ChildComponent';

function App() {
const [count,setCount] = useState(0);

const handleChange = useCallback(() => {
    setCount(count+1);
  } , [count])

  return (
    <div>
      <div>
        Count : {count}
      </div>
      <br />
      <button onClick={handleChange}>
        Increment
      </button>
      <br />
      <br />
      <div>
        <ChildComponent 
          buttonName="Click Me"
          handleChange={handleChange}
        />
      </div>
    </div>
  )
}

export default App
