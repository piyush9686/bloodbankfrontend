import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import API from "../services/api";
function DonateBlood() {

  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    city: "",
    contact: "",
    lastDonationDate: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle submit


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/donate-blood", formData);

    alert("Donor added successfully");

    console.log(res.data);

  } catch (error) {
    console.log(error);
  }
};


  return (
    <><Navbar />
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-96"
      >

        <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
          Donate Blood
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
        />

        {/* Blood Group */}
        <select
          name="bloodGroup"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
        >
          <option value="">Select Blood Group</option>
          <option>A+</option>
          <option>B+</option>
          <option>O+</option>
          <option>AB+</option>
          <option>A-</option>
          <option>B-</option>
          <option>O-</option>
          <option>AB-</option>
        </select>

        {/* City */}
        <input
          type="text"
          name="city"
          placeholder="City"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
        />

        {/* Contact */}
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
        />

        {/* Last Donation Date */}
        <input
          type="date"
          name="lastDonationDate"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Submit
        </button>

      </form>

    </div>
    </>
  );
}

export default DonateBlood;