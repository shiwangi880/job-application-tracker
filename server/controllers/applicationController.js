import Application from "../models/Application.js";

export const createApplication = async (req, res) => {
  try {
    const application = await Application.create({
      userId: req.user._id,
      companyName: req.body.companyName,
      role: req.body.role,
      status: req.body.status,
      appliedDate: req.body.appliedDate,
      followUpDate: req.body.followUpDate,
      notes: req.body.notes,
      resumeName: req.body.resumeName,
    });

    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ----------GET LOGGED-IN USER'S APPLICATIONS----------
export const getApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      userId: req.user._id,
    }).sort({ createdAt: -1 });

    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ----------UPDATE APPLICATION----------
export const updateApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    if (application.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const updatedApplication = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// ----------DELETE APPLICATION----------
export const deleteApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    if (application.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await application.deleteOne();
    res.json({ message: "Application removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ---------ADD STATS CONTROLLER-----------

export const getApplicationStats = async (req, res) => {
  try {
    const stats = await Application.aggregate([
      {
        $match: {
          userId: req.user._id,
        },
      },
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    // Convert aggregation result into clean object
    const formattedStats = {
      Applied: 0,
      Interview: 0,
      Offer: 0,
      Rejected: 0,
      Total: 0,
    };

    stats.forEach((item) => {
      formattedStats[item._id] = item.count;
      formattedStats.Total += item.count;
    });

    res.json(formattedStats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


