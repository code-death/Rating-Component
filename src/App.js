import './App.css'
import Rating from './Components/Main/Rating'
import Thanks from './Components/Main/Thanks'
import { useState } from 'react'

function App() {
  const [rate, setRate] = useState()

  const handleRate = value => {
    setRate(value)
  }

  return <>{rate ? <Thanks rating={rate} /> : <Rating onRate={handleRate} />}</>
}

export default App
