import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="p-16 h-screen-90">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}
