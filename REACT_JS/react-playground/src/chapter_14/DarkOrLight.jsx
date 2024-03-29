import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import Maincontent from "./Maincontent";

function DarkOrLight(props){
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if (theme == "light"){
            setTheme("dark");
        } else if (theme == "dark") {
            setTheme("light");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Maincontent />
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;