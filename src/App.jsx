import MainPage from "./components/mainPage";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context";

function App() {

  


  return (
    <>
    <CartProvider>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </CartProvider>
    </>
  )
}

export default App
