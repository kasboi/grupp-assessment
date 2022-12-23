import { useState } from 'react'
import Navbar from './Navbar'
import Settings from './Settings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Settings />
      {/* <Navbar /> */}
    </div>
  )
}

export default App
