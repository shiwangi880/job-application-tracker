import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#FFE3E6] border-r border-[#F3C9CF] hidden md:block min-h-screen">
      
      <div className="p-6 text-xl font-bold text-[#7A1E2C]">
        JobTracker
      </div>

      <nav className="mt-4 flex flex-col gap-2 px-4 text-[#6B4A4E]">
        
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `text-left px-4 py-2 rounded-xl transition ${
              isActive
                ? "bg-[#FFD6DB] text-[#7A1E2C]"
                : "hover:bg-[#FFD6DB] hover:text-[#7A1E2C]"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/applications"
          className={({ isActive }) =>
            `text-left px-4 py-2 rounded-xl transition ${
              isActive
                ? "bg-[#FFD6DB] text-[#7A1E2C]"
                : "hover:bg-[#FFD6DB] hover:text-[#7A1E2C]"
            }`
          }
        >
          Applications
        </NavLink>

      </nav>
    </aside>
  );
};

export default Sidebar;