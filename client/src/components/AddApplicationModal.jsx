const AddApplicationModal = ({ isOpen, onClose, onSubmit, form, setForm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Soft Overlay */}
      <div
        className="absolute inset-0 bg-[#7A1E2C]/20 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div className="relative w-[90%] max-w-lg
                      bg-white rounded-3xl
                      border border-[#F3C9CF]
                      p-6 shadow-xl z-10">

        <h2 className="text-xl font-semibold mb-4 text-[#7A1E2C]">
          Add Application 🌸
        </h2>

        <form
          className="space-y-4"
          onSubmit={onSubmit}
        >
          {/* Company */}
          <input
            type="text"
            placeholder="Company Name"
            value={form.companyName}
            onChange={(e) =>
              setForm({ ...form, companyName: e.target.value })
            }
            required
            className="w-full p-3 rounded-xl bg-white
                       border border-[#F3C9CF]
                       focus:border-[#7A1E2C] focus:ring-2 focus:ring-[#FFD6DB]
                       outline-none"
          />

          {/* Role */}
          <input
            type="text"
            placeholder="Role"
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
            required
            className="w-full p-3 rounded-xl bg-white
                       border border-[#F3C9CF]
                       focus:border-[#7A1E2C] focus:ring-2 focus:ring-[#FFD6DB]
                       outline-none"
          />

          {/* Status */}
          <select
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-white
                       border border-[#F3C9CF]
                       focus:border-[#7A1E2C] outline-none"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>

          {/* Date */}
          <input
            type="date"
            value={form.appliedDate}
            onChange={(e) =>
              setForm({ ...form, appliedDate: e.target.value })
            }
            required
            className="w-full p-3 rounded-xl bg-white
                       border border-[#F3C9CF]
                       focus:border-[#7A1E2C] outline-none"
          />

          {/* Resume */}
          <input
            type="text"
            placeholder="Resume Name"
            value={form.resumeName}
            onChange={(e) =>
              setForm({ ...form, resumeName: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-white
                       border border-[#F3C9CF]
                       focus:border-[#7A1E2C] outline-none"
          />

          {/* Notes */}
          <textarea
            placeholder="Notes (optional)"
            value={form.notes}
            onChange={(e) =>
              setForm({ ...form, notes: e.target.value })
            }
            rows={3}
            className="w-full p-3 rounded-xl bg-white
                       border border-[#F3C9CF]
                       focus:border-[#7A1E2C] outline-none"
          ></textarea>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-full
                         bg-[#FFE3E6] text-[#7A1E2C]
                         hover:bg-[#FFD6DB] transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-full
                         bg-[#7A1E2C] text-white
                         hover:bg-[#5f1622]
                         active:scale-95 transition"
            >
              Add
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddApplicationModal;


// const AddApplicationModal = ({
//   isOpen,
//   onClose,
//   onSubmit,
//   form,
//   setForm,
//   isEdit,
// }) => {
//   if (!isOpen) return null;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(e);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">

//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-[#7A1E2C]/20 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div
//         className="relative w-[92%] max-w-lg
//                    bg-white rounded-3xl
//                    border border-[#F3C9CF]
//                    p-6 shadow-xl z-10"
//         onClick={(e) => e.stopPropagation()}   // ✅ prevents overlay close on button click
//       >
//         <h2 className="text-xl font-semibold mb-4 text-[#7A1E2C]">
//           {isEdit ? "Update Application" : "Add Application"} 🌸
//         </h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>

//           <input
//             type="text"
//             placeholder="Company Name"
//             value={form.companyName}
//             onChange={(e) =>
//               setForm({ ...form, companyName: e.target.value })
//             }
//             required
//             className="w-full p-3 rounded-xl border border-[#F3C9CF]
//                        focus:border-[#7A1E2C] focus:ring-2 focus:ring-[#FFD6DB]
//                        outline-none"
//           />

//           <input
//             type="text"
//             placeholder="Role"
//             value={form.role}
//             onChange={(e) =>
//               setForm({ ...form, role: e.target.value })
//             }
//             required
//             className="w-full p-3 rounded-xl border border-[#F3C9CF]
//                        focus:border-[#7A1E2C] focus:ring-2 focus:ring-[#FFD6DB]
//                        outline-none"
//           />

//           <select
//             value={form.status}
//             onChange={(e) =>
//               setForm({ ...form, status: e.target.value })
//             }
//             className="w-full p-3 rounded-xl border border-[#F3C9CF]
//                        focus:border-[#7A1E2C] outline-none"
//           >
//             <option>Applied</option>
//             <option>Interview</option>
//             <option>Offer</option>
//             <option>Rejected</option>
//           </select>

//           <input
//             type="date"
//             value={form.appliedDate}
//             onChange={(e) =>
//               setForm({ ...form, appliedDate: e.target.value })
//             }
//             required
//             className="w-full p-3 rounded-xl border border-[#F3C9CF]
//                        focus:border-[#7A1E2C] outline-none"
//           />

//           <input
//             type="text"
//             placeholder="Resume Name (optional)"
//             value={form.resumeName}
//             onChange={(e) =>
//               setForm({ ...form, resumeName: e.target.value })
//             }
//             className="w-full p-3 rounded-xl border border-[#F3C9CF]
//                        focus:border-[#7A1E2C] outline-none"
//           />

//           <textarea
//             placeholder="Notes (optional)"
//             value={form.notes}
//             onChange={(e) =>
//               setForm({ ...form, notes: e.target.value })
//             }
//             rows={3}
//             className="w-full p-3 rounded-xl border border-[#F3C9CF]
//                        focus:border-[#7A1E2C] outline-none"
//           />

//           {/* Buttons */}
//           <div className="flex justify-end gap-3 pt-2">

//             <button
//               type="button"
//               onClick={onClose}
//               className="px-5 py-2 rounded-full
//                          bg-[#FFE3E6] text-[#7A1E2C]
//                          hover:bg-[#FFD6DB] transition"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               className="px-5 py-2 rounded-full
//                          bg-[#7A1E2C] text-white
//                          hover:bg-[#5f1622]
//                          active:scale-95 transition"
//             >
//               {isEdit ? "Update" : "Add"}
//             </button>

//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddApplicationModal;
