import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  
  const [value , setValue] = useState('I change')
  const [color , setColor] = useState('black');
  const [charLimit , setCharLimit] = useState(50)
  const [range , setRange] = useState(0)
  const textInput = (e) => {
    setValue(e.target.value)
  }
  const colorValue =(e) =>{
    setColor(e.target.value);
  }
  const textLimit = (e) =>{
    setCharLimit(e.target.value);
  }
  const slider = (e) =>{
    setRange(e.target.value);
  }

  return (
    <div id="main">
      <form>
        <label>Char limit</label>
        <input id='charlimit-input' type='number' onChange={textLimit} value={charLimit} />
        <input type='color'onChange={colorValue}  />
        <input value={value} onChange={textInput}  maxLength={charLimit}  />
        <input type='range' onChange={slider} max={32} />
        
      </form>
      <div id='changing-div' style={{
        backgroundColor :`${color}`,
        padding :`${range}px`
    
        }} >
          {value}
      </div>
    </div>
  )
}


export default App;
