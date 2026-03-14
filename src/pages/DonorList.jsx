import { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import API from "../services/api";
function DonorList() {

  const [donors, setDonors] = useState([]);

  // Dummy data (later fetch from backend)
 useEffect(() => {
  const fetchDonors = async () => {
    const res = await API.get("/donor-list");
    setDonors(res.data.data);
  };

  fetchDonors();
}, []);

  return (
    <><Navbar />
    <div className="p-10 bg-gray-100 min-h-screen">
         

      <h1 className="text-3xl font-bold text-red-600 mb-6">
        Available Blood Donors
      </h1>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden">

        <table className="w-full text-left">

          <thead className="bg-red-600 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Blood Group</th>
              <th className="p-3">City</th>
              <th className="p-3">Contact</th>
              
            </tr>
          </thead>

          <tbody>

            {donors.map((donor, index) => (
              <tr key={index} className="border-b">

                <td className="p-3">{donor.name}</td>
                <td className="p-3">{donor.bloodGroup}</td>
                <td className="p-3">{donor.city}</td>
                <td className="p-3">{donor.contact}</td>
               
                
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
    </>
  );
}

export default DonorList;