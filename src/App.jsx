import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acasa from './pages/Acasa';
import './styles/index.scss';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Acasa />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
