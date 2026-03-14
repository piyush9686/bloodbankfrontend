import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

const handleLogout = () => {

  // remove token
  localStorage.removeItem("token");

  // remove cookie if you used one
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  navigate("/login");
};
    return (
        <nav className="bg-red-700 flex items-centre h-16" >
            <img src="../public/logo.webp" alt="Logo" />
            <h2 className="text-white p-4 font-bold text-2xl">Blood Bank</h2>
            <div className="gap-9 text-white font-semibold flex items-centre  text-2xl p-4 ml-auto ">
                <Link to="/home" className="hover:underline">  Home </Link>
                <Link to="/dashboard" className="hover:underline">  Dashboard </Link>
                <Link to="/donor-list" className="hover:underline">  DonorList </Link>
                <Link to="/request-blood" className="hover:underline">  RequestBlood </Link>
                <Link to="/donate-blood" className="hover:underline">  DonateBlood </Link>
                <Link to="/request-list" className="hover:underline">  RequestList </Link>

                <button onClick={handleLogout} className="hover:underline"> Logout </button>
            </div>
         
        </nav>
    )
}
export default Navbar;