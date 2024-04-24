import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acasa from './pages/Acasa';
import './styles/index.scss';
import Portofoliu from './pages/Portofoliu';
import Servicii from './pages/Servicii';
import Fqu from './pages/Fqu';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Acasa />} />
        <Route path='/portofoliu' element={<Portofoliu />} />
        <Route path='/servicii' element={<Servicii />} />
        <Route path='/fqu' element={<Fqu />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
