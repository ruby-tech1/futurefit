import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <main>
      {/* <Login /> */}
      <Dashboard />
    </main>
    // <BrowserRouter>
    //   <Routes path='/' element={}>

    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
