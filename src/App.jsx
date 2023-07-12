//contains the main component of your application
//You can modify the JSX (JavaScript XML) syntax to define the structure and behavior of your components.
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import ButtonBigIconSecondary from './component/ComponentName'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const textColor = {color: 'black'};
  return (
    <>
      const element = <h1 style={textColor} >GRANDE/CON ICONO </h1>
      <div className="flex gap-24 pl-64 items-center">
        <div>
          <ButtonBigIconSecondary
          text= "Secondary"
          disabled ={true}
          fetching ={true}
          width="w-[175px]"
          />
        </div>
        </div>
    </>
  )
}

export default App
