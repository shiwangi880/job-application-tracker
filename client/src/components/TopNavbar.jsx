import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <header className="m-4 mb-0 h-16 bg-white/90 backdrop-blur 
                       rounded-2xl border border-[#F3C9CF] shadow-sm 
                       flex items-center justify-between px-6">

      <h2 className="text-lg font-semibold text-[#7A1E2C]">
        Dashboard
      </h2>

      <button
        onClick={logoutHandler}
        className="px-5 py-2 rounded-full bg-[#7A1E2C] text-white
                   hover:bg-[#5f1622] active:scale-95
                   transition shadow-sm"
      >
        Logout
      </button>

    </header>
  );
};

export default TopNavbar;
