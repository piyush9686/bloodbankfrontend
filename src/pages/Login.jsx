import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post("/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.data.token);

      alert("Login Successful");

      navigate("/home");

    } catch (error) {
      console.log(error);
    }

  };

  return (

    <div className="flex justify-center items-center h-screen">

      <form onSubmit={handleLogin} className="bg-white p-6 shadow-lg rounded">

        <h2 className="text-2xl mb-4">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="bg-red-500 text-white px-4 py-2 w-full ">
          Login
        </button>
        <p className="text-right">
          Don't have an account? <Link to="/">Register</Link>
        </p>
      </form>

    </div>

  );
}

export default Login;