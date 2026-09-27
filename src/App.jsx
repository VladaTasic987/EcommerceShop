import MainPage from "./components/mainPage";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";


function App() {

  

  return (
    <>
      
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </>
  )
}

export default App
