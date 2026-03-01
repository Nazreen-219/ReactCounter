import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    
      <div className="w-full h-screen duration-200 p-0 m-0"
      style = {{backgroundColor : color}}>
         
        <div className="fixed flex flex-wrap justify-center 
        bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
            <button className='outline-none px-4 py-1 rounded-full text-white'
            onClick={()=> setColor("red")} //onclieck ek function expect krta hai to humne ek call back function likha jo setcolor se return lega 
            style={{backgroundColor:"red"}}
            >Red</button>

            <button className='outline-none px-4 py-1 rounded-full  text-white'
            onClick={()=> setColor("blue")} 
           style={{backgroundColor:"blue"}}
            >Blue</button>

            <button className='outline-none px-4 py-1 rounded-full  text-white'
            onClick={()=> setColor("green")} 
            style={{backgroundColor:"green"}}
            >Green</button>

            <button className='outline-none px-4 py-1 rounded-full  text-white'
            onClick={()=> setColor("pink")} 
            style={{backgroundColor:"pink"}}
            >Pink</button>

            <button className='outline-none px-4 py-1 rounded-full  text-white'
            onClick={()=> setColor("yellow")} 
            style={{backgroundColor:"yellow"}}
            >Yellow</button>

            <button className='outline-none px-4 py-1 rounded-full  text-white'
            onClick={()=> setColor("purple")} 
            style={{backgroundColor:"purple"}}
            >Purple</button>
          </div>
        </div>
      </div>

  
  )
}

export default App
