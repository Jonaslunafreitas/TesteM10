import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home";
import { Painel } from "./pages/Painel";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/painel/novo' element={<Painel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
