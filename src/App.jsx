import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";

import PrivateRoute from "./layouts/PrivateRoute";
import Products from "./Pages/Products";
import Product from "./Pages/Product";

import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/private" element={<PrivateRoute />}>
            <Route index element={<Products />} />
            <Route path="product/:path" element={<Product />} />
          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
