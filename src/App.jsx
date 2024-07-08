import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

function App() {

  return (
    <>
      <Router >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
