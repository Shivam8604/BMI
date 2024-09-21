import React, { useMemo, useState } from 'react';
import './App.css'

const App = () => {

  const [height,setHeight] = useState(70)
  const [weigth,setWeight] = useState(180)

  function onHeightChange(event){
    setHeight(event.target.value)
  }
  function onWeightChange(event){
    setWeight(event.target.value)
  }

  const output = useMemo(()=>{
    const calculateHeight = height / 100;
    return (weigth/(calculateHeight*calculateHeight)).toFixed(2)
  },[weigth,height])

  return (
    <main>
      <h1>Project 1 BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight:{weigth}</p>
        <input className='input-slider' onChange={onWeightChange} type='range' step='1' min='40' max="200"/>
        <p className='slider-output'>Height: {height}</p>
        <input className='input-slider' min="140" max="220" onChange={onHeightChange}  type='range'/>
      </div>
      <div className='output-section'>
        <p>Your BMI is</p>
        <p className='output'>{output}</p>
      </div>
    </main>
  )
}

export default App
