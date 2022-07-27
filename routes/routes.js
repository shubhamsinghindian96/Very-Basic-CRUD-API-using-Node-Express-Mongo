const express = require("express");
const Model = require("../models/UserModel");

const router = express.Router();

// =======================================================================
//Get All Users = GET API
router.get("/getUsers", async (req, res) => {
  try {
    const users = await Model.find();
    if (users.length === 0) {
      res.status(404).send("No users found");
    } else {
      res.status(200).json({
        message: "Users fetched Successfully",
        totalUsers: users.length,
        users,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// =======================================================================

//Get SIngle User based on User Id = GET API
router.get("/getUser/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const users = await Model.findById(userId);
    if (users) {
      res.status(200).json({
        message: "User fetched Successfully",
        user: users,
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// =======================================================================

//Create New User = POST API
router.post("/addUser", async (req, res) => {
  const userData = {
    name: req.body.name,
    age: req.body.age,
    city: req.body.city,
    state: req.body.state,
    mobileNo: req.body.mobileNo,
    emailAddress: req.body.emailAddress,
  };
  const data = new Model(userData);
  try {
    const dataToSave = await data.save();
    if (dataToSave) {
      res.status(201).json({
        message: "User added Successfully",
        user: dataToSave,
      });
    } else {
      res.status(404).json({
        message: "Please enter valid data",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// =======================================================================

//Update Existing User = PUT API
router.put("/updateUser/:id", (req, res) => {
  res.send("Updating data");
});

// =======================================================================

//Delete User = DELETE API
router.delete("/deleteUser/:id", (req, res) => {
  res.send("Deleting data");
});

module.exports = router;
