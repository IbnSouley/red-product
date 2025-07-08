import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import GlobalStyles from './styles/GlobalStyles';
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import Dashboard from './Components/Dashboard/Dashboard';
import Hotels from './Components/Hotel/Hotels'
import CreateHotel from './Components/Hotel/CreateHotel';
// import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <Router>
      {/* <GlobalStyles /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/new" element={<CreateHotel />} />
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
      </Routes>
    </Router>
  );
}

export default App;







// import { useState } from 'react';
// import './App.css';
// import Register from './Components/Auth/Register'
// import Login from './Components/Auth/Login'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   const [count, setCount] = useState(0)
//   return (
//    <Register/>,
//    <Login/>
//   );
// }

// export default App;
