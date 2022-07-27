const express = require('express')
const User = require('../models/User')
const router = express.Router()



//GET :  RETURN ALL USERS 
router.get("/all", async (req, res) => {
  const allUsers = await User.find({});
  res.send(allUsers);
});

//POST :  ADD A NEW USER TO THE DATABASE 

router.post('/add', async function (req, res) {
  try {
     
     const newUser = new User({
          ...req.body
      })
      await newUser.save()
      res.send({msg : "user added"})
  
  } catch (error) {
      console.log(error)
  }
})

//PUT : EDIT A USER BY ID 

router.put("/:id", async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send({ msg: "User updated", updateUser });
  } catch (error) {
    console.log(error);
  }
});

//DELETE : REMOVE A USER BY ID 

router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.status(200).send({ msg: "User Deleted" });
  } catch (error) {
    console.log(error);
  }
});


module.exports = router 
