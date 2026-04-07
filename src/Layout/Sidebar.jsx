function Sidebar() {
  return (
    <aside className="h-full bg-slate-900 text-white flex flex-col border-r border-slate-800">
      <h2 className="text-xl font-bold mb-6">dashboard</h2>

      <nav className="flex flex-col gap-4">
        <a href="#">Dashboard</a>
        <a href="#">Users</a>
        <a href="#">Settings</a>
      </nav>
    </aside>
  );
}

export default Sidebar;
