import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {

  const [count, setCount] = useState(0)

  function handleClick()
    {
      setCount(count+1)
    }
  return (
    <div>
      <Button incrementCount={handleClick} text="Click Here">
        <h1>{count}</h1>
      </Button>

      <Card name="Md Nadeem Khan">
        <h1>I am Learning React</h1>
        <p>Want to be consistent</p>
      </Card>
    </div>
  )
}

export default App
