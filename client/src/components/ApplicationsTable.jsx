const ApplicationsTable = ({ applications, onDelete, onEdit }) => {
  return (
    <div className="mt-8 bg-white rounded-2xl border border-[#F3C9CF] shadow-sm overflow-x-auto">

      <table className="w-full text-sm">

        {/* Header */}
        <thead className="border-b border-[#F3C9CF] bg-[#FFE3E6] text-[#7A1E2C]">
          <tr>
            <th className="px-6 py-4 text-left font-semibold">Company</th>
            <th className="px-6 py-4 text-left font-semibold">Role</th>
            <th className="px-6 py-4 text-left font-semibold">Status</th>
            <th className="px-6 py-4 text-left font-semibold">Applied</th>
            <th className="px-6 py-4 text-left font-semibold">Resume</th>
            <th className="px-6 py-4 text-left font-semibold">Action</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {applications.map((app) => (
            <tr key={app._id} className="border-b border-[#F3C9CF]">

              <td className="px-6 py-4 font-medium text-[#2B2B2B]">
                {app.companyName}
              </td>

              <td className="px-6 py-4 text-[#6B4A4E]">
                {app.role}
              </td>

              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border
                    ${
                      app.status === "Applied"
                        ? "bg-[#FFE4E6] text-[#4340f1] border-[#F3C9CF]"
                        : app.status === "Interview"
                        ? "bg-[#FFEDD5] text-[#C2410C] border-[#FED7AA]"
                        : app.status === "Offer"
                        ? "bg-[#FEF3C7] text-[#09b42e] border-[#FDE68A]"
                        : "bg-[#FECACA] text-[#bc0f0f] border-[#FCA5A5]"
                    }
                  `}
                >
                  {app.status}
                </span>
              </td>

              <td className="px-6 py-4 text-[#6B4A4E]">
                {new Date(app.appliedDate).toLocaleDateString()}
              </td>

              <td className="px-6 py-4 text-[#6B4A4E]">
                {app.resumeName || "-"}
              </td>

             
              <td className="px-6 py-4 flex gap-2">

                {/* Edit */}
                <button
                  onClick={() => onEdit(app)}
                  className="px-3 py-1.5 rounded-full text-sm
                             border border-[#7A1E2C]
                             text-[#7A1E2C]
                             hover:bg-[#FFE4E6]
                             transition"
                >
                  Edit
                </button>

                {/* Delete */}
                <button
                  onClick={() => onDelete(app._id)}
                  className="px-3 py-1.5 rounded-full text-sm
                             bg-[#7A1E2C] text-white
                             hover:bg-[#5f1622] transition"
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}
        </tbody>
      </table>

      {/* Empty */}
      {applications.length === 0 && (
        <div className="p-6 text-center text-[#6B4A4E]">
          No applications added yet.
        </div>
      )}
    </div>
  );
};

export default ApplicationsTable;

