// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import API from "../api/axios";
// import cityBg from "../assets/soft.jpg";

// const Register = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const { data } = await API.post("/auth/register", form);
//       localStorage.setItem("token", data.token);
//       navigate("/dashboard");
//     } catch (error) {
//       alert(error.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
//       style={{ backgroundImage: `url(${cityBg})` }}
//     >
//       <div className="absolute inset-0 bg-black/60"></div>

//       <div
//         className="relative z-10 w-[90%] sm:w-[380px] lg:w-[420px]
//                    bg-white/15 backdrop-blur-xl
//                    border border-white/20
//                    rounded-2xl shadow-2xl p-6 sm:p-8"
//       >
//         <h2 className="text-2xl font-semibold text-white text-center">
//           Create Account ✨
//         </h2>

//         <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             onChange={handleChange}
//             className="w-full px-4 py-2.5 rounded-lg bg-white/20 text-white placeholder-gray-300"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             className="w-full px-4 py-2.5 rounded-lg bg-white/20 text-white placeholder-gray-300"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             className="w-full px-4 py-2.5 rounded-lg bg-white/20 text-white placeholder-gray-300"
//           />

//           <button
//             className="w-full py-2.5 rounded-lg
//                        bg-[#7A1E2C] hover:bg-[#5f1622]
//                        text-white transition"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-gray-300 text-sm text-center mt-5">
//           Already have an account?{" "}
//           <Link to="/" className="text-white hover:text-red-400">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;



import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";
import cityBg from "../assets/soft.jpg";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/register", form);
      localStorage.setItem("token", data.token);

      toast.success("Account created successfully 🌸");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${cityBg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div
        className="relative z-10 w-[90%] sm:w-[380px] lg:w-[420px]
                   bg-white/15 backdrop-blur-xl
                   border border-white/20
                   rounded-2xl shadow-2xl p-6 sm:p-8"
      >
        <h2 className="text-2xl font-semibold text-white text-center">
          Create Account ✨
        </h2>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-[#7A1E2C]/60"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-[#7A1E2C]/60"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-[#7A1E2C]/60"
          />

          {/* ✅ Updated Button Color — softer maroon rose */}
          <button
            className="w-full py-2.5 rounded-xl
                       bg-[#8B2C3B] hover:bg-[#742331]
                       active:scale-95
                       text-white font-medium
                       shadow-lg shadow-[#8B2C3B]/30
                       transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-300 text-sm text-center mt-5">
          Already have an account?{" "}
          <Link to="/" className="text-white hover:text-[#FFD6DB]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
