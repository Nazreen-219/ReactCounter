import {  useCallback, useState , useEffect , useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(6);
 const [numberAllowed , setNumber] = useState(false);
const [characterAllowed , setCharacter] = useState(false);
const [password , setPassword] = useState("");
  // const[genPassword , passwordGenerator] = usestate();
   
  const passwordRef = useRef(null);

 
  //usecalback is responsible for memoize
  // (funct ko memory me store kar lena taaki bar baar naya na create karna pare ) your function
  // we used call back for optimization 
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
    for (let i = 0; i < length; i++) {
      const element = str[i];
      let char =Math.floor( Math.random() * str.length + 1);
      pass = pass +  str.charAt(char);
      
    }

    setPassword(pass);
  } , [length , numberAllowed , characterAllowed , setPassword]);

  const copyPassowrdToClipboard = useCallback(()=>{ //in nextjs we dont have window object -> in nextjs whole code execute in server 
     passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,50);
    window.navigator.clipboard.writeText(password)
  }, [password])
  // useEffect -> used because whenever there would any change in dependencies we have passed , 
  // tab password generate function ko again run kar dena 
  useEffect(() => {
    passwordGenerator();
  } , [length , numberAllowed , characterAllowed] )

  // copying of particular passoword into clipboard 
  // now i want copy btn par click krne par mera password hi select ho for that we have -> userRef hook
  // useRef -> used whenever i have to take reference 

  

  return (
  <>
    <div className="max-w-md mx-auto shadow-md rounded-lg px-4 py-3 m-8  bg-gray-700">
      <h1 className="text-white text-center text-0.5xl mb-4">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 text-0.5xl text-orange-600 font-bold"
          placeholder="Password"
          readOnly
          ref={passwordRef} 
        />
        <button className="ouline-none bg-blue-500 text-0.5xl text-white px-3 py-0.5 
        shrink-0" onClick={copyPassowrdToClipboard} >Copy</button>
      </div>
        <div className="flex text-sm gap-x-4">
          <div className='flex items-center gap-x-1'>
            <input type="range"  
            min ={6}
            max={50}
            value={length}
            className='cursor-pointer text-cyan-600' 
            onChange={(e) => {setlength(e.target.value)}}/>
            <label className='text-orange-600 text-0.5xl font-bold '>Length :{length}</label>
          </div>

           <div className="flex text-sm gap-x-1">
          <input type="checkbox" className='' 
          checked = {numberAllowed}
          onChange={()=> setNumber((prev) => !prev)} />
          <label className='text-orange-600 font-bold' >Numbers</label>
         </div>

           <div className="flex text-sm gap-x-1">
          <input type="checkbox" className='' 
            checked={characterAllowed}
            onChange={() => setCharacter((prev) => !prev)}/>
          <label className='text-orange-600 font-bold'>Character</label>
         </div>
        </div>

        
    </div>
  </>
)

}


export default App


// useCallback stores (memoizes) the function and returns the same 
// function instance on every render as long as its dependencies do not change.
