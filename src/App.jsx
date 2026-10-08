import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import About from './pages/about.jsx'
import Home from './pages/home.jsx'
import Category from './pages/category.jsx'
import Ads from './pages/ads.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>

            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About Us</Link> |{" "}
                <Link to="/category">Category</Link> |{" "}
                <Link to="/ads">Ads</Link>
            </nav>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/category" element={<Category />} />

                <Route path="/ads" element={<Ads />} />

            </Routes>

        </BrowserRouter>
    </>
  )
}

export default App
