import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Singil/>
    <div className="container">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/info' element={<Info/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
