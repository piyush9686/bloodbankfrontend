import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar.jsx";

function RequestList() {

  const [requests, setRequests] = useState([]);
  const [searchBlood, setSearchBlood] = useState("");

  // Fetch requests from backend
  const fetchRequests = async () => {
    try {
      const res = await API.get("/requests");
      setRequests(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // Update status
  const updateStatus = async (id, status) => {
    try {
      await API.put(`/requests/${id}`, { status });
      fetchRequests();
    } catch (error) {
      console.log(error);
    }
  };

  // Filter requests by blood group
  const filteredRequests = requests.filter((req) =>
    req.bloodGroup.toLowerCase().includes(searchBlood.toLowerCase())
  );

  return (
    <div>

      <Navbar />

      <div className="p-6">

        <h2 className="text-2xl font-bold mb-6 text-red-600">
          Blood Requests
        </h2>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Blood Group (A+, O-, etc)"
            value={searchBlood}
            onChange={(e) => setSearchBlood(e.target.value)}
            className="border p-2 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <table className="w-full border shadow-md">

          <thead className="bg-red-500 text-white">
            <tr>
              <th className="p-2">Patient</th>
              <th className="p-2">Blood</th>
              <th className="p-2">City</th>
              <th className="p-2">Units</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredRequests.map((req) => (

              <tr key={req._id} className="text-center border">

                <td className="p-2">{req.patientName}</td>
                <td className="p-2">{req.bloodGroup}</td>
                <td className="p-2">{req.city}</td>
                <td className="p-2">{req.unitsRequired}</td>

                <td className="p-2">

                  {req.status === "Pending" && (
                    <span className="text-yellow-500 font-semibold">
                      Pending
                    </span>
                  )}

                  {req.status === "Accepted" && (
                    <span className="text-green-600 font-semibold">
                      Accepted
                    </span>
                  )}

                  {req.status === "Rejected" && (
                    <span className="text-red-600 font-semibold">
                      Rejected
                    </span>
                  )}

                </td>

                <td className="space-x-2">

                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                    onClick={() => updateStatus(req._id, "Accepted")}
                  >
                    Accept
                  </button>

                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    onClick={() => updateStatus(req._id, "Rejected")}
                  >
                    Reject
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RequestList;