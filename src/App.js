import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { GeneralForm } from './components/GeneralForm';
import { PortalForm } from './components/PortalForm';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<GeneralForm></GeneralForm>}></Route>
      <Route path='/portal' element={<PortalForm></PortalForm>}></Route>
     </Routes>
    </div>
  );
}

export default App;
