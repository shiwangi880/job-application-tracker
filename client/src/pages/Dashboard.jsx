import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import StatsCard from "../components/StatsCard";
import ApplicationsTable from "../components/ApplicationsTable";
import AddApplicationModal from "../components/AddApplicationModal";
import API from "../api/axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    applied: 0,
    interview: 0,
    offer: 0,
    rejected: 0,
    total: 0,
  });

  const [applications, setApplications] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    companyName: "",
    role: "",
    status: "Applied",
    appliedDate: "",
    resumeName: "",
    notes: "",
  });

  //  Fetch
  const fetchData = async () => {
    try {
      const statsRes = await API.get("/applications/stats");
      const appsRes = await API.get("/applications");

      const data = statsRes.data;

      setStats({
        applied: data.Applied || 0,
        interview: data.Interview || 0,
        offer: data.Offer || 0,
        rejected: data.Rejected || 0,
        total: data.Total || 0,
      });

      setApplications(appsRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //  Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this application?")) return;
    await API.delete(`/applications/${id}`);
    fetchData();
  };

  //  Edit click
  const handleEdit = (app) => {
    setForm({
      companyName: app.companyName,
      role: app.role,
      status: app.status,
      appliedDate: app.appliedDate.split("T")[0],
      resumeName: app.resumeName || "",
      notes: app.notes || "",
    });

    setEditingId(app._id);
    setIsModalOpen(true);
  };

  //  Add + Update submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await API.put(`/applications/${editingId}`, form);
    } else {
      await API.post("/applications", form);
    }

    setEditingId(null);
    setIsModalOpen(false);

    setForm({
      companyName: "",
      role: "",
      status: "Applied",
      appliedDate: "",
      resumeName: "",
      notes: "",
    });

    fetchData();
  };

  return (
    <Layout>

      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-[#7A1E2C]">
            Overview of Your Job Applications
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Track your progress across all stages
          </p>
        </div>

        <button
          onClick={() => {
            setEditingId(null);
            setIsModalOpen(true);
          }}
          className="px-5 py-2 rounded-full bg-[#7A1E2C] text-white
                     hover:bg-[#5f1622] transition shadow-sm"
        >
          + Add Application
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <StatsCard title="Applied" value={stats.applied} color="text-blue-600" />
        <StatsCard title="Interview" value={stats.interview} color="text-amber-600" />
        <StatsCard title="Offer" value={stats.offer} color="text-emerald-600" />
        <StatsCard title="Rejected" value={stats.rejected} color="text-red-600" />
        <StatsCard title="Total" value={stats.total} color="text-purple-600" />
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
        <ApplicationsTable
          applications={applications}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>

      
      <AddApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        form={form}
        setForm={setForm}
        isEdit={!!editingId}
      />

    </Layout>
  );
};

export default Dashboard;
