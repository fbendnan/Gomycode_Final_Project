const express = require("express");
const {
  createPerson,
  createMany,
  findByName,
  findById,
  deleteById,
  deleteByName,
} = require("../controllers/personController.js");

const router = express.Router();

// routes
router.post("/create", createPerson);
router.post("/createMany", createMany);
router.get("/findByName/:name", findByName);
router.get("/findById/:id", findById);
router.delete("/deleteById/:id", deleteById);
router.delete("/deleteByName/:name", deleteByName);

module.exports = router;

