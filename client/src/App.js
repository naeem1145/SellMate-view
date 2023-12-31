import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BillsPage from "./pages/BillsPage";
import CartPage from "./pages/CartPage";
import CustomerPage from "./pages/CustomerPage";
import Homepage from "./pages/Homepage";
/* import ItemPage from "./pages/ItemPage"; */
import Login from "./pages/Login";
import Register from "./pages/Register";
import ItemPage from './pages/itemPage';
import Dashboard from "./pages/Dashboard";
import Sucess from "./pages/Sucess";
import Cancel from "./pages/Cancel";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
           <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/items"
            element={
              <ProtectedRoute>
                <ItemPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bills"
            element={
              <ProtectedRoute>
                <BillsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/customers"
            element={
              <ProtectedRoute>
                <CustomerPage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route  path='/sucess' element={<Sucess />}/>
          <Route  path='/cancel' element={<Cancel />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}



export function ProtectedRoute({ children }) {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App