// import {useState,useEffect} from "react";
// import axios from "axios";

// function Student(){
//   const [complaints,setComplaints]=useState([]);
//   const [form,setForm]=useState({category:"",description:"",priority:"Low"});

//   const load=async()=>{
//     const res=await axios.get("/api/complaints");
//     setComplaints(res.data);
//   };

//   const submit=async()=>{
//     await axios.post("/api/complaints",form);
//     load();
//   };

//   useEffect(()=>{load();},[]);

//   return(
//     <div className="container mt-5">
//       <h3>Submit Complaint</h3>
//       <input className="form-control mb-2" placeholder="Category"
//         onChange={e=>setForm({...form,category:e.target.value})}/>
//       <input className="form-control mb-2" placeholder="Description"
//         onChange={e=>setForm({...form,description:e.target.value})}/>
//       <select className="form-control mb-2"
//         onChange={e=>setForm({...form,priority:e.target.value})}>
//         <option>Low</option>
//         <option>Medium</option>
//         <option>High</option>
//       </select>
//       <button className="btn btn-success" onClick={submit}>Submit</button>

//       <ul className="list-group mt-4">
//         {complaints.map(c=>(
//           <li key={c._id} className="list-group-item">
//             {c.category} - {c.status}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Student;

// import { useState,useEffect } from "react";
// import axios from "axios";

// function Student() {
//   const token = localStorage.getItem("token");
//   const [complaints,setComplaints]=useState([]);
//   const [form,setForm]=useState({category:"",description:"",priority:"Low"});

//   const load = async ()=>{
//     const res = await axios.get("/api/complaints/my",{
//       headers:{Authorization:`Bearer ${token}`}
//     });
//     setComplaints(res.data);
//   };

//   const submit = async ()=>{
//     await axios.post("/api/complaints",form,{
//       headers:{Authorization:`Bearer ${token}`}
//     });
//     load();
//   };

//   useEffect(()=>{load();},[]);

//   return (
//     <div className="container mt-5">
//       <h3>Submit Complaint</h3>
//       <input className="form-control mb-2" placeholder="Category"
//         onChange={e=>setForm({...form,category:e.target.value})}/>
//       <input className="form-control mb-2" placeholder="Description"
//         onChange={e=>setForm({...form,description:e.target.value})}/>
//       <select className="form-control mb-2"
//         onChange={e=>setForm({...form,priority:e.target.value})}>
//         <option>Low</option>
//         <option>Medium</option>
//         <option>High</option>
//       </select>
//       <button className="btn btn-success" onClick={submit}>Submit</button>

//       <h4 className="mt-4">My Complaints</h4>
//       <ul className="list-group">
//         {complaints.map(c=>(
//           <li key={c._id} className="list-group-item">
//             {c.category} - {c.status}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Student;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";

// function Student() {

//   const token = localStorage.getItem("token");

//   const [complaints, setComplaints] = useState([]);
//   const [form, setForm] = useState({
//     category: "",
//     description: "",
//     priority: "Low"
//   });
//   const [loading, setLoading] = useState(true);

//   // Redirect if not logged in
//   useEffect(() => {
//     if (!token) {
//       window.location = "/";
//     } else {
//       loadComplaints();
//     }
//   }, []);

//   // Load student's complaints
//   const loadComplaints = async () => {
//     try {
//       const res = await axios.get("/api/complaints/my", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setComplaints(res.data);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       alert("Error loading complaints");
//       setLoading(false);
//     }
//   };

//   // Submit complaint
//   const submit = async () => {
//     if (!form.category || !form.description) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       await axios.post("/api/complaints", form, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       alert("Complaint Submitted Successfully");

//       // Reset form
//       setForm({
//         category: "",
//         description: "",
//         priority: "Low"
//       });

//       loadComplaints();
//     } catch (err) {
//       console.error(err);
//       alert("Submission failed");
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="container mt-5">
//         <h3>Submit Complaint</h3>

//         <input
//           className="form-control mb-2"
//           placeholder="Category"
//           value={form.category}
//           onChange={e => setForm({ ...form, category: e.target.value })}
//         />

//         <input
//           className="form-control mb-2"
//           placeholder="Description"
//           value={form.description}
//           onChange={e => setForm({ ...form, description: e.target.value })}
//         />

//         <select
//           className="form-control mb-2"
//           value={form.priority}
//           onChange={e => setForm({ ...form, priority: e.target.value })}
//         >
//           <option value="Low">Low</option>
//           <option value="Medium">Medium</option>
//           <option value="High">High</option>
//         </select>

//         <button className="btn btn-success" onClick={submit}>
//           Submit
//         </button>

//         <h4 className="mt-4">My Complaints</h4>

//         {loading ? (
//           <p>Loading...</p>
//         ) : complaints.length === 0 ? (
//           <p>No complaints submitted yet.</p>
//         ) : (
//           <ul className="list-group">
//             {complaints.map(c => (
//               <li key={c._id} className="list-group-item d-flex justify-content-between">
//                 <span>
//                   <strong>{c.category}</strong> - {c.status}
//                 </span>
//                 <span className={
//                   c.status === "Resolved"
//                     ? "badge bg-success"
//                     : c.status === "In Progress"
//                     ? "badge bg-warning text-dark"
//                     : "badge bg-secondary"
//                 }>
//                   {c.priority}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </>
//   );
// }

// export default Student;



import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Student() {

  const token = localStorage.getItem("token");

  const [complaints, setComplaints] = useState([]);
  const [form, setForm] = useState({
    category: "",
    description: "",
    priority: "Low"
  });
  const [loading, setLoading] = useState(true);

  // Redirect if not logged in
  useEffect(() => {
    if (!token) {
      window.location = "/";
    } else {
      loadComplaints();
    }
  }, []);

  // Load student's complaints
  const loadComplaints = async () => {
    try {
      const res = await axios.get("/api/complaints/my", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setComplaints(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Error loading complaints");
      setLoading(false);
    }
  };

  // Submit complaint
  const submit = async () => {
    if (!form.category || !form.description) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post("/api/complaints", form, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert("Complaint Submitted Successfully");

      setForm({
        category: "",
        description: "",
        priority: "Low"
      });

      loadComplaints();
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">

        {/* Dashboard Header */}
        <div className="mb-4">
          <h2 className="fw-bold">Student Dashboard</h2>
          <p className="text-muted">Submit and track your hostel complaints</p>
        </div>

        {/* Complaint Form Card */}
        <div className="card border-0 shadow-lg mb-5" style={{ borderRadius: "16px" }}>
          <div className="card-body p-4">
            <h5 className="fw-bold mb-4">Submit Complaint</h5>

            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label fw-semibold">Category</label>
                <input
                  className="form-control"
                  placeholder="e.g. Electricity, Water"
                  value={form.category}
                  onChange={e => setForm({ ...form, category: e.target.value })}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label fw-semibold">Description</label>
                <input
                  className="form-control"
                  placeholder="Brief description"
                  value={form.description}
                  onChange={e => setForm({ ...form, description: e.target.value })}
                />
              </div>

              <div className="col-md-2">
                <label className="form-label fw-semibold">Priority</label>
                <select
                  className="form-select"
                  value={form.priority}
                  onChange={e => setForm({ ...form, priority: e.target.value })}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="col-md-2 d-flex align-items-end">
                <button
                  className="btn btn-success w-100 fw-semibold"
                  style={{ borderRadius: "10px" }}
                  onClick={submit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Complaints Section */}
        <div className="card border-0 shadow-lg" style={{ borderRadius: "16px" }}>
          <div className="card-body p-4">
            <h5 className="fw-bold mb-4">My Complaints</h5>

            {loading ? (
              <div className="text-center py-4">
                <div className="spinner-border text-primary" />
              </div>
            ) : complaints.length === 0 ? (
              <p className="text-muted">No complaints submitted yet.</p>
            ) : (
              <div className="table-responsive">
                <table className="table align-middle table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>Category</th>
                      <th>Priority</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complaints.map(c => (
                      <tr key={c._id}>
                        <td className="fw-semibold">{c.category}</td>
                        <td>
                          <span className={
                            c.priority === "High"
                              ? "badge bg-danger"
                              : c.priority === "Medium"
                              ? "badge bg-warning text-dark"
                              : "badge bg-info text-dark"
                          }>
                            {c.priority}
                          </span>
                        </td>
                        <td>
                          <span className={
                            c.status === "Resolved"
                              ? "badge bg-success"
                              : c.status === "In Progress"
                              ? "badge bg-warning text-dark"
                              : "badge bg-secondary"
                          }>
                            {c.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>
        </div>

      </div>
    </>
  );
}

export default Student;