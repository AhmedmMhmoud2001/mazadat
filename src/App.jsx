import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Auctions from "./pages/Auctions";
import AuctionDetails from "./pages/AuctionDetails";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Payments from "./pages/Payments";
import Transactions from "./pages/Transactions";
import Checkout from "./pages/Checkout";
import Services from "./pages/Services";
import About from "./pages/About";
import Help from "./pages/Help";
import AuthLogin from "./pages/AuthLogin";
import AuthRegister from "./pages/AuthRegister";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/auctions/:id" element={<AuctionDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
