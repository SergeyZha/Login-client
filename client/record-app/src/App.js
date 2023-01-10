import './App.css';

// eslint-disable-next-line
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import AllUsers from './components/AllUsers';
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<h1>Hello there</h1>} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
