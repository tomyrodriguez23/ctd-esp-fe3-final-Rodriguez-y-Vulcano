
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import { Routes, Route } from 'react-router-dom'
import {Rutas} from './Components/utils/Rutas'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={Rutas.home} element={<Home />} />
        <Route path={Rutas.contact} element={<Contact />} />
        <Route path={Rutas.favs} element={<Favs />} />
        <Route path={Rutas.id} element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
