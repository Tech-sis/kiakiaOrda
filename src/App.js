import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/homepage'
import Admin from './pages/admin'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
