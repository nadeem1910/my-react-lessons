import { useEffect, useState } from "react"

function App() {
  const[count,setCount] = useState(0);
  const[total,setTotal] = useState(1);

  function handleClick(){
    setCount(count + 1);
  }

  function handleTotal(){
    setTotal(total + 1);
  }
  // first --> side-effect function
  // second --> clean-up function
  // third --> comma-separated dependency list
 

  // variation 1 --> runs on each render
  // useEffect(() => {
  //   alert("Run on each render")
  // })
  
  // variation 2 --> runs on only first render
  // useEffect(()=>{
  //   alert("Runs on first render only");
  // },[])


  // variation 3 --> runs whenever count is updated
  // useEffect(() => {
  //   alert(`Runs when count updates ${count}`,)
  // }, [count])
  

  // variation 4 --> works on multiple dependency
    //  useEffect(() => {
    //    alert("Runs whenever total or count clicked")
    //  }, [count,total])
  
     
  // variation 5 --> with clean up function
     useEffect(() => {
      alert("Count is updated")
       return () => {
         alert("Component is unmounted")
       }
     }, [count])
     

  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
      <br />
      Count is -: {count}
      <br />
      <br />
      <br />
      
      <button onClick={handleTotal}>
        Update Total
      </button>
      <br />
      Total is -: {total}
    </div>
  )
}

export default App
