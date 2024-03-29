import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Maincontent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
        style={{
            width: "100vw",
            height: "100vh",
            padding: "1.5rem",
            backgroundColor: theme == "light" ? "white" : "black",
            color: theme == "light" ? "black" : "white",
        }}
    >
        <p>hello, This is a website that you can change your theme.</p>
        <button onClick={toggleTheme}>Theme change!</button>
    </div>
  )
}

export default Maincontent;