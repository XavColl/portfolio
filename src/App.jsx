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
            <Route path="/portfolio" element={<Home />} />
            <Route path="/portfolio/skills" element={<Skills />} />
            <Route path="/portfolio/projects" element={<Projects />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
