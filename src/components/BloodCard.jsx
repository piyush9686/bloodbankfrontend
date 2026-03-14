function BloodCard({ group }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">

      <h2 className="text-2xl font-bold text-red-600">
        {group}
      </h2>

      <p className="text-gray-500 mt-2">
        Blood Group
      </p>

    </div>
  );
}

export default BloodCard;