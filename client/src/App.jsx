import {Routes,Route} from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import Error from './pages/Error'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={< Policy/>} />
      <Route path="*" element={<Error />} />

    </Routes>
    </>
  )
}

export default App
