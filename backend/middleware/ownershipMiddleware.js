const mongoose = require("mongoose");

// resourceModel: the Mongoose model (Review, Order, etc.)
const checkOwnership = (resourceModel) => async (req, res, next) => {
  try {
    const resource = await resourceModel.findById(req.params.id);

    if (!resource) return res.status(404).json({ message: "Resource not found" });

    // owner or admin
    if (resource.user.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }

    req.resource = resource; // attach resource to request if needed
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { checkOwnership };

