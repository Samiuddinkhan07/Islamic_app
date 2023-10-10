
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import DashBoard from './App/Components/DashBoard/DashBoard';
import Homepage from './App/Pages/Homepage/Homepage';
import Quran from './App/Pages/Quran/Quran';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<DashBoard/>} exact>
          <Route path='/' element={<Homepage/>} exact>
          </Route>
          <Route path="/Quran" element={<Quran/>} exact></Route>
        </Route>
      
      
        
      </Routes>
      
    </Router>
    </>  
  )
}

export default App
