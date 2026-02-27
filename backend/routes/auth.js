// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const router = express.Router();

// router.post("/register", async (req,res)=>{
//   const {name,email,password,role} = req.body;
//   const hash = await bcrypt.hash(password,10);
//   const user = new User({name,email,password:hash,role});
//   await user.save();
//   res.json({message:"Registered"});
// });

// router.post("/login", async (req,res)=>{
//   const {email,password} = req.body;
//   const user = await User.findOne({email});
//   if(!user) return res.status(400).json({message:"User not found"});

//   const valid = await bcrypt.compare(password,user.password);
//   if(!valid) return res.status(400).json({message:"Wrong password"});

//   const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET);
//   res.json({token,role:user.role});
// });

// module.exports = router;


const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: "User exists" });

  const hashed = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashed,
    role
  });

  await user.save();
  res.json({ message: "Registered Successfully" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET
  );

  res.json({ token, role: user.role });
});

module.exports = router;