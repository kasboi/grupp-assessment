import SideBar from "./SideBar"
import Settings from "./Settings"
import NavBar from "./NavBar/NavBar"
import { useState } from "react"

function App() {
    const [visible, setVisible] = useState(false)

    return (
        <div className="App relative overflow-hidden">
            <NavBar visible={visible} setVisible={setVisible}/>
            <div className="flex w-full">
                <SideBar visible={visible} setVisible={setVisible}/>
                <Settings />
            </div>
        </div>
    )
}

export default App
