const Person = require("../models/person.js");

// Create new person
const createPerson = async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create many people
const createMany = async (req, res) => {
  try {
    const people = await Person.create(req.body); // array of people
    res.status(201).json(people);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Find all by name
const findByName = async (req, res) => {
  try {
    const people = await Person.find({ name: req.params.name });
    res.json(people);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Find by id
const findById = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete by id
const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPerson = await Person.findByIdAndDelete(id);
    if (!deletedPerson) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.json(deletedPerson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete many peoples using name
const deleteByName = async (req, res) => {
  try {
    const nameToDelete = req.params.name; 
    const result = await Person.deleteMany({ name: nameToDelete });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: `No person found with name "${nameToDelete}"` });
    }

    res.json({
      message: `${result.deletedCount} person(s) deleted`,
      result
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  createPerson,
  createMany,
  findByName,
  findById,
  deleteById,
  deleteByName
};
