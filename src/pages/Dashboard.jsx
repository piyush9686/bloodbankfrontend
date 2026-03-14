import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar.jsx";

function Dashboard() {


  const [stats, setStats] = useState({
    donors: 0,
    requests: 0,
    pending: 0,
    accepted: 0,
    rejected: 0
  });

  const fetchStats = async () => {

    try {

      const donorsRes = await API.get("/donor-list");
      const requestsRes = await API.get("/requests");

      const donors = donorsRes.data.data;
      const requests = requestsRes.data.data;

      const pending = requests.filter(r => r.status === "Pending").length;
      const accepted = requests.filter(r => r.status === "Accepted").length;
      const rejected = requests.filter(r => r.status === "Rejected").length;

      setStats({
        donors: donors.length,
        requests: requests.length,
        pending,
        accepted,
        rejected
      });

    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (

    <div className="">

      <Navbar />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

        <div className="bg-purple-500 text-white p-4 rounded">
          <h3>Total Donors</h3>
          <p className="text-2xl">{stats.donors}</p>
        </div>

        <div className="bg-blue-500 text-white p-4 rounded">
          <h3>Total Requests</h3>
          <p className="text-2xl">{stats.requests}</p>
        </div>

        <div className="bg-yellow-500 text-white p-4 rounded">
          <h3>Pending</h3>
          <p className="text-2xl">{stats.pending}</p>
        </div>

        <div className="bg-green-500 text-white p-4 rounded">
          <h3>Accepted</h3>
          <p className="text-2xl">{stats.accepted}</p>
        </div>

        <div className="bg-red-500 text-white p-4 rounded">
          <h3>Rejected</h3>
          <p className="text-2xl">{stats.rejected}</p>
        </div>

      </div>

    </div>

  );
}

export default Dashboard;