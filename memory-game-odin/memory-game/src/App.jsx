import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)
  const [clickedCards, setClickedCards] = useState([])

  return (
    <>
   <Cards />
    </>
  )
}

export default App
