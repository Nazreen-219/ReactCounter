import {  useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(0);
 const [numberAllowed , setNumber] = useState(false);
const [characterAllowed , setCharacter] = useState(false);
const [password , setPassword] = useState("");
  // const[genPassword , passwordGenerator] = usestate();
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed){
      str += "0123456789";
    };
    if(characterAllowed){
      str += "~!@#$%^&*(){}[]?/";

    }

    // picking of random char from str of length 
    for (let i = 0; i < str.length; i++) {
      const element = str[i];
      let char =Math.floor( Math.random() * str.length + 1);
      pass = pass +  str.charAt(char);
      
    }

    setPassword(pass);
  } , [length , numberAllowed , characterAllowed , setPassword]);

  return (
  <>
    <div className="max-w-xs mx-auto shadow-md rounded-lg px-4 py-3 m-8  bg-gray-700">
      <h1 className="text-white text-center text-0.5xl mb-4">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 text-0.5xl"
          placeholder="Password"
          readOnly
        />
        <button className="ouline-none bg-blue-500 text-0.5xl text-white px-3 py-0.5 
        shrink-0">Copy</button>
      </div>
        <div className="flex text-xs gap-x-2">
          <div className='flex items-center gap-x-1'>
            <input type="range"  
            min ={6}
            max={100}
            value={length}
            className='cursor-pointer text-cyan-600' 
            onChange={(e) => {setlength(e.target.value)}}/>
            <label className='text-orange-600 text-0.5xl font-bold '>Length :{length}</label>
          </div>
        </div>
    </div>
  </>
)

}


export default App


// useCallback stores (memoizes) the function and returns the same 
// function instance on every render as long as its dependencies do not change.