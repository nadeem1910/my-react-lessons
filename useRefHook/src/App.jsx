
import { useState , useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);
  let val = useRef(0); // variables created using useRef hook persists their values across re-renders

  let btnRef = useRef(); // use Case 2 -> making reference of a DOM element and directly manipulate DOM element using useRefHook

  function handleClick(){
    val.current = val.current + 1;
    console.log(`value of val is ${val.current}`)
    setCount(count+1);
  }

  function changeColor(){
    btnRef.current.style.backgroundColor = 'red';
  }

  useEffect(() => {
    // runs on every render
    alert("runs on each render!!!") 
  })
  
  return (
    <div>
      <button ref={btnRef} onClick={handleClick}>
        Increment
      </button>
      <br/>
      <br/>
      <button onClick={changeColor}>
        Change color of 1st Button
      </button>
      <div>
        Count : {count}
      </div>
    </div>
  )
}

export default App
