import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Root, About } from './views'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);