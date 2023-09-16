import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import WeatherReport from './components/WeatherReport';

function App() {
  return (
    <div className="App justify-content-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/:lat/:lon" element={<WeatherReport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
