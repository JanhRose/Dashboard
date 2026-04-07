// src/Components/StatCard.jsx
const StatCard = ({ title, value, percentage }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-start">
    <div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <h3 className="text-2xl font-bold mt-1 text-gray-800">{value}</h3>
      <p className="text-green-500 text-xs mt-2 font-semibold">
        <span className="mr-1">↗</span>
        {percentage}{" "}
        <span className="text-gray-400 font-normal">vs mes anterior</span>
      </p>
    </div>
  </div>
);

export default StatCard;
