import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Courses from './pages/Courses';
import About from './pages/About';
import Login from './pages/Login';
import Downloads from './pages/Downloads/Downloads';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Vision from './pages/Vision';
import Chairman from './pages/Chairman';
import Policies from './pages/Policies';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
          <Route exact path='/contacts' element={<ContactUs />}></Route>
          <Route exact path='/courses' element={<Courses />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/download' element={<Downloads />}></Route>
          <Route exact path='/Vision' element={<Vision />}></Route>
          <Route exact path='/policies' element={<Policies />}></Route>
          <Route exact path='/Chairman' element={<Chairman />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;