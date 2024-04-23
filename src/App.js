import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./Component/Navbar"

function App() {
  return (
    <div className="App">

    {/* Navigation component */}
    <div>
      <Navbar/>
    </div>

    {/* Adding Routes */}

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>

    </div>
  );
}

export default App;
