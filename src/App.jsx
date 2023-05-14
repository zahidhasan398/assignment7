import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoadCaf from './component/LoadCaf'
import Header from './component/Header'
import Faq from './component/Faq'

function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <LoadCaf></LoadCaf>
      <Faq></Faq>
    </div>
  )
}

export default App
