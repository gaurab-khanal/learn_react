import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from '../Colors';


const HeroSection = ()=>{
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    return(
        <>
            <div
            style={{
                padding: "1rem",
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.textColor}`,
                textAlign: "center"
            }}
            >
                <h1>Context API theme toggler</h1>
                <p>This is a nice paragraph</p>
                <button
                onClick={()=>{
                setThemeMode(themeMode==="light"? "dark" : "light")
            }}
                style={{
                    backgroundColor: "#26ae60",
                    padding: "10px 150px",
                    fontSize: "20px",
                    color: "#FFF",
                    border: `${currentTheme.border}`
                }}
                >Click Me</button>
            </div>
        </>
    )
}


export default HeroSection;