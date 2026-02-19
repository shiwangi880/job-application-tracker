import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ApplicationsTable from "../components/ApplicationsTable";
import AddApplicationModal from "../components/AddApplicationModal";
import API from "../api/axios";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form, setForm] = useState({
    companyName: "",
    role: "",
    status: "Applied",
    appliedDate: "",
    resumeName: "",
    notes: "",
  });

  const fetchApplications = async () => {
    try {
      const res = await API.get("/applications");
      setApplications(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this application?")) return;

    try {
      await API.delete(`/applications/${id}`);
      fetchApplications();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddApplication = async (e) => {
    e.preventDefault();

    try {
      await API.post("/applications", form);
      setIsModalOpen(false);
      setForm({
        companyName: "",
        role: "",
        status: "Applied",
        appliedDate: "",
        resumeName: "",
        notes: "",
      });
      fetchApplications();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="bg-[#FFF5F7] min-h-screen p-6">

      
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#7A1E2C]">
            Your Applications
          </h2>
        </div>

        <div className="bg-white rounded-2xl 
                        border border-[#F3C9CF] 
                        shadow-sm p-4">
          <ApplicationsTable
            applications={applications}
            onDelete={handleDelete}
          />
        </div>
      </div>

      <AddApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddApplication}
        form={form}
        setForm={setForm}
      />
    </Layout>
  );
};

export default Applications;