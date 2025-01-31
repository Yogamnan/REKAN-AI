import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./pages/Contact"
import Home from "./pages/Home"
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>

  )
}

export default App