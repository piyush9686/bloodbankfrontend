import { Link } from "react-router-dom";
import BloodCard from "../components/BloodCard";
import Navbar from "../components/Navbar";

function Home() {

  const bloodGroups = [
    "A+","B+","O+","AB+",
    "A-","B-","O-","AB-"
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
        <Navbar />
      {/* Hero Section */}
      <div className="text-center py-20 bg-red-600 text-white">

        <h1 className="text-5xl font-bold mb-4">
          PN Blood Bank
        </h1>

        <p className="text-xl mb-6">
          Save Lives by Donating Blood ❤️
        </p>

        <div className="flex justify-center gap-6">

          <Link
            to="/donate-blood"
            className="bg-white text-red-600 px-6 py-2 rounded font-semibold"
          >
            Donate Blood
          </Link>

          <Link
            to="/request-blood"
            className="bg-black text-white px-6 py-2 rounded"
          >
            Request Blood
          </Link>

        </div>

      </div>

      {/* Blood Groups */}
      <div className="p-10">

        <h2 className="text-3xl font-bold text-center mb-8 text-red-600">
          Available Blood Groups
        </h2>

        <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto">

          {bloodGroups.map((group, index) => (
            <BloodCard key={index} group={group} />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;