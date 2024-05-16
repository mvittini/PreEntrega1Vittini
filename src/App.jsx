import { useState } from 'react'
import viteLogo from '/vite.svg'
import { ItemListContainer } from './components/ItemListContainer'
import "./css/main.css"
import { Header } from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <ItemListContainer/>
    </>
  )
}

export default App
