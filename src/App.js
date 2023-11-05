import logo from './logo.svg';
import './App.css';
import NavbarPage from './Pages/NavbarPage';
import Home from './Pages/Home';
import Song from './Pages/Song';

function App() {
  return (
    <div className="App">
    <NavbarPage/>
    <Home/>
    <Song/>
    </div>
  );
}

export default App;
