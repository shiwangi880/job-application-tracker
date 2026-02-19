import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FFF7F8] p-4">
      {/* Floating App Shell */}
      <div className="flex min-h-[calc(100vh-2rem)] rounded-3xl overflow-hidden shadow-lg border border-[#F3C9CF] bg-white">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-1 bg-[#FFF7F8]">
          <TopNavbar />

          <main className="p-6 text-[#2B2B2B]">
            {children}
          </main>
        </div>

      </div>
    </div>
  );
};

export default Layout;
