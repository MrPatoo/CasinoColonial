
import './App.css'
//navbar
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import NavBar from '../src/components/navbar/navbar'

function App() {


  return (
    <>
<p>hola</p>
<Router>
     <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/clients" element={<p>Hola</p>} />
        <Route path="/games" element={<p>Hola</p>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
