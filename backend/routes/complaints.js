// const express = require("express");
// const Complaint = require("../models/Complaint");
// const router = express.Router();

// router.post("/", async (req,res)=>{
//   const complaint = new Complaint(req.body);
//   await complaint.save();
//   res.json({message:"Complaint submitted"});
// });

// router.get("/", async (req,res)=>{
//   const {status,category} = req.query;
//   let filter = {};
//   if(status) filter.status=status;
//   if(category) filter.category=category;
//   const complaints = await Complaint.find(filter);
//   res.json(complaints);
// });

// router.put("/:id", async (req,res)=>{
//   await Complaint.findByIdAndUpdate(req.params.id,{status:req.body.status});
//   res.json({message:"Status updated"});
// });

// module.exports = router;

const express = require("express");
const Complaint = require("../models/Complaint");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const router = express.Router();


// 👨‍🎓 Submit Complaint
router.post("/", auth, async (req, res) => {
  const complaint = new Complaint({
    userId: req.user.id,
    category: req.body.category,
    description: req.body.description,
    priority: req.body.priority
  });

  await complaint.save();
  res.json({ message: "Complaint Submitted" });
});


// 👨‍🎓 View Own Complaints
router.get("/my", auth, async (req, res) => {
  const complaints = await Complaint.find({ userId: req.user.id });
  res.json(complaints);
});


// 👨‍💼 View All Complaints + Filter
// router.get("/", auth, admin, async (req, res) => {
//   const { status, category } = req.query;

//   let filter = {};

//   if (status) filter.status = status;
//   if (category) filter.category = category;

//   const complaints = await Complaint.find(filter).populate("userId", "name email");
//   res.json(complaints);
// });

router.get("/", auth, async (req, res) => {
  const { status, category } = req.query;

  let filter = {};

  if (status) {
    filter.status = status;
  }

  if (category) {
    filter.category = new RegExp(category, "i"); 
    // "i" makes it case-insensitive
  }

  const complaints = await Complaint.find(filter)
    .populate("userId", "name email");

  res.json(complaints);
});

// router.get("/", auth, async (req, res) => {
//   const { status, category } = req.query;

//   let filter = {};

//   if (status) filter.status = status;
//   if (category) filter.category = category;

//   const complaints = await Complaint.find(filter).populate("userId", "name email");

//   res.json(complaints);
// });

// 👨‍💼 Update Status
router.put("/:id", auth, admin, async (req, res) => {
  await Complaint.findByIdAndUpdate(req.params.id, {
    status: req.body.status
  });

  res.json({ message: "Status Updated" });
});

module.exports = router;