import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  console.log(themeMode);
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
