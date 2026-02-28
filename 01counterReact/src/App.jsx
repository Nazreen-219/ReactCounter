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
      setCount(counter + 1)
      setCount(counter + 1)
       setCount(counter + 1)
       setCount(counter + 1)

        // value will update 4 times but in UI it will update only once because react will batch all the updates and then update the UI once
        // value 16 hi aayegi 
        //as setcounter me ek call back milta hai
        //usesate sabhi updates ko batch karta hai aur fir UI ko update karta hai to charo same counter ko update kar raha hai that mean it will consider as same hi to kaam hai to ek hi baar update karega

        setCount((prevCounter) => prevCounter + 1) // this is the correct way to update the state when we have multiple updates in a single function
        setCount((prevCounter) => prevCounter + 1)
        setCount((prevCounter) => prevCounter + 1)
        setCount((prevCounter) => prevCounter + 1)
      
        console.log("clicked" , counter)
   }
  
   const removeValue = () =>{
     setCount (counter -1)
     console.log(" clicked " , counter)
   }
  return (
    <>
      <h1 className='bg-red '>Counting with React</h1>
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