import { useState } from "react";
import API from "../services/api";
import {Link,useNavigate} from "react-router-dom";
function Register() {

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post("/", form);
      alert("Admin Registered Successfully");
      console.log(res.data);
       navigate("/login");
    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="flex justify-center items-center h-screen">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded w-80"
      >

        <h2 className="text-2xl font-bold mb-4 text-center">
          Admin Register
        </h2>

        <input
          type="text"
          name="fullname"
          placeholder="Name"
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />

        <button className="bg-red-500 text-white w-full py-2">
          Register
        </button>
         <p className="text-right">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </form>

    </div>

  );
}

export default Register;