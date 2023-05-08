import { useState } from 'react'

import './App.css'

function App() {
  const[red,setRed]=useState(0)
  const[green,setgreen]=useState(0)
  const[blue,setblue]=useState(0)
  const[colour,setcolour]=useState(0)

const redcolour=(e)=>{
setRed(e.target.value)
updatefinal(e.target.value,green,blue)
}
const greencolour=(e)=>{
  setgreen(e.target.value)
  updatefinal(e.target.value,red,blue)
}

const bluecolour=(e)=>{
  setblue(e.target.value)
  updatefinal(e.target.value,green,red)
}

const updatefinal=(r,g,b)=>{
  const newColor = `rgb(${r}, ${g}, ${b})`;
  setcolour(newColor);

}

  return (
    <>
    <div style={{background:colour,width: '400px', height: '400px'}} className='flex flex-col text-white'>
<h1>Change the colour over here</h1>
    Red
    <input type="range" min={0} max={255} value={red} onChange={(e)=>redcolour(e)} />
    Green
    <input type="range" min={0} max={255} value={green} onChange={(e)=>greencolour(e)} />
    Blue
    <input type="range" min={0} max={255} value={blue} onChange={(e)=>bluecolour(e)} />
    </div>

    </>
  )
}

export default App
