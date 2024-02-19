import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Upadate from './pages/Update';
import Add from './pages/Add';

import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/update/:id' element={<Upadate/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
