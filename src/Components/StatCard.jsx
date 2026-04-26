import { ArrowUpRight, ArrowDownRight } from "lucide-react";

// src/Components/StatCard.jsx
const StatCard = ({ title, value, percentage, icon: Icon }) => (
  <div className="bg-white  p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-start">
    <div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <h3 className="text-2xl font-bold mt-1 text-gray-800">{value}</h3>
      <div className="flex items-center mt-2 text-green-500 text-xs font-semibold">
        <ArrowUpRight size={16} className="mr-1" />
        <span>{percentage} </span>
        <span className="text-gray-400 font-normal ml-2">vs mes anterior</span>
      </div>
    </div>
    <div className="p-4 rounded-full bg-blue-100 text-blue-800 flex-shrink-0">
      {Icon && <Icon size={20} />}
    </div>
  </div>
);

export default StatCard;
