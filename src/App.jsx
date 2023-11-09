import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Products from "./pages/Products";
import Admins from "./pages/Admins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />}>
            <Route path="/products/addnewproduct" element={<NewProduct />} />
          </Route>
          <Route path="/admins" element={<Admins />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
