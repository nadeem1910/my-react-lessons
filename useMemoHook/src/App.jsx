import { useState , useMemo} from 'react'
import './App.css'

function App() {
  const[count,setCount] = useState(0);
  const[input,setInput] = useState(0);

  function handleClick(){
    setCount(count +1 );
  }

function expensiveTask(num){
  for(let i = 0;i<=10000000;i++){}
  return num * 2;
}

  let doubleValue = useMemo(() => expensiveTask(input), [input]);
  return (
    <div>
      <button onClick={handleClick}>
        Increment 
      </button>
      <br/>
      <br/>
      <div>
        Count is {count}
      </div>
      <input
        type='number'
        placeholder='enter a number'
        value={input}
        onChange={(e)=> setInput(e.target.value)}
      />
      <div>
        Double is {doubleValue}
      </div>
    </div>
  )
}

export default App
