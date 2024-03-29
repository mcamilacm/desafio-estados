import Registro from "./components/Registro";
import SocialButton from "./components/SocialButton";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
    <h1>Crea Una Cuenta</h1>
<Registro />
</div>
    </>
    
  )
}

export default App
