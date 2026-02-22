import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(15) //useState hook is responsile for changing state (propagation in ui)
  // 1st-> counter variable created 
  // 2nd ->set counter is function jo counter variable ko control karega
  //  let counter = 15

   const addValue = ()=>{
    //  counter = counter + 1 // console par  to update hote dikhega lekin UI  me update nahi hoga 
     // so react will handle what updation will happen fir this they have prvided some methods -> hooks 
     //data will updates through these hooks
      { setCount(counter + 1)
       console.log("clicked" , counter)}
   }
  
   const removeValue = () =>{
     setCount (counter -1)
     console.log(" clicked " , counter)
   }
  return (
    <>
      <h1>Counting with React</h1>
      <h2>Counter Value : {counter}</h2> 

      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App

// react ka mojor work hai UI updation handling like on a single click kaha kaha multiple updations kab hona hai
// as we have not import react in this file still parsing of elements happen because of babels(_jsx)