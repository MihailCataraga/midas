import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acasa from './pages/Acasa';
import './styles/index.scss';
import Portofoliu from './pages/Portofoliu';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Acasa />} />
        <Route path='/portofoliu' element={<Portofoliu />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
