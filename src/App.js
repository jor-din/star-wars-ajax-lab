import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import StarshipsList from './pages/StarshipList';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/starship-list" element={<StarshipsList/>}/>
      </Routes>
    </>
  );
}

export default App;
