import Home from "./component/Home/Home"
import Ideas from "./component/Ideas/Ideas"
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/idea" element={<Ideas/>}/>
 </Routes>
    </>
  )
};

export default App
