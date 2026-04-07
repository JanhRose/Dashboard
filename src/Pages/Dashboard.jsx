import StatCard from "../Components/StatCard";

function Dashboard() {
  return (
    // En tu archivo de Página (ej. Home.jsx o Dashboard.jsx)
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title="Ingresos" value="$23,000" percentage="12%" />
      <StatCard title="Usuarios" value="1,200" percentage="5%" />
      <StatCard title="Ventas" value="450" percentage="8%" />
      <StatCard title="Visitas" value="10,000" percentage="2%" />
    </div>
  );
}

export default Dashboard;
