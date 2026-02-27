const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  userId: { type:mongoose.Schema.Types.ObjectId, ref:"User"},
  category:String,
  description:String,
  priority:{ type:String, enum:["Low","Medium","High"]},
  status:{ type:String, default:"Pending"}
},{timestamps:true});

module.exports = mongoose.model("Complaint", complaintSchema);