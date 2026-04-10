import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import Profile from './Page/Profile';
import About from './Page/About';
import Service from './Page/Service';
import Contact from './Page/Contact';
import Login from './Page/Login';

function App() {
  return (



   <Router>
    <Navbar />
    <Router>
      <Router path="/" element={<Home />} />
      <Router path="/profile" element={<Profile />} />
      <Router path="/about" element={<About />} />
      <Router path="/service" element={<Service />} />
      <Router path="/contact" element={<Contact />} />
      <Router path="/login" element={<Login />} />


    </Router>
   </Router>



  );
  
}

export default App;
