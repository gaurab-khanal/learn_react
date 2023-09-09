import { useState } from "react"
import ThemeContext from "./context/ThemeContext"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"

function App() {

  const themeHook = useState("light");

  return (
    <> 

      <ThemeContext.Provider value={themeHook}>
        <div>
          <Header/>
          <HeroSection/>
        </div>
      </ThemeContext.Provider>

    </>
  )
}



export default App
