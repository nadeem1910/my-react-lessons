
import './App.css'

function App() {

  function handleClick(){
    alert("You Clicked the Button")
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Can I submit your form");
  }

  function handleInputChange(e){
    console.log("value till now ", e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleInputChange} />
          <button type="submit">Submit</button>
      </form>

      <br />
      <br />

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  )
}

export default App
