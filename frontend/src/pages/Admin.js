// import {useState,useEffect} from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";

// function Admin(){
//   const token = localStorage.getItem("token");
//   const [complaints,setComplaints]=useState([]);
//   const [filter,setFilter]=useState({status:"",category:""});

//   const load=async()=>{
//     const res = await axios.get("/api/complaints",{
//       headers:{Authorization:`Bearer ${token}`},
//       params:filter
//     });
//     setComplaints(res.data);
//   };

//   const update=async(id,status)=>{
//     await axios.put(`/api/complaints/${id}`,{status},{
//       headers:{Authorization:`Bearer ${token}`}
//     });
//     load();
//   };

//   useEffect(()=>{load();},[filter]);

//   return(
//     <div className="container mt-5">
//       <h3>All Complaints</h3>

//       <div className="row mb-3">
//         <div className="col">
//           <input className="form-control" placeholder="Filter by Category"
//             onChange={e=>setFilter({...filter,category:e.target.value})}/>
//         </div>
//         <div className="col">
//           <select className="form-control"
//             onChange={e=>setFilter({...filter,status:e.target.value})}>
//             <option value="">All Status</option>
//             <option>Pending</option>
//             <option>In Progress</option>
//             <option>Resolved</option>
//           </select>
//         </div>
//       </div>

//       <table className="table">
//         <thead>
//           <tr>
//             <th>User</th>
//             <th>Category</th>
//             <th>Status</th>
//             <th>Update</th>
//           </tr>
//         </thead>
//         <tbody>
//           {complaints.map(c=>(
//             <tr key={c._id}>
//               <td>{c.userId.name}</td>
//               <td>{c.category}</td>
//               <td>{c.status}</td>
//               <td>
//                 <select onChange={e=>update(c._id,e.target.value)}>
//                   <option>Pending</option>
//                   <option>In Progress</option>
//                   <option>Resolved</option>
//                 </select>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Admin;


// import { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";

// function Admin() {

//   const token = localStorage.getItem("token");

//   const [complaints, setComplaints] = useState([]);
//   const [filter, setFilter] = useState({ status: "", category: "" });
//   const [loading, setLoading] = useState(true);

//   // Protect Route
//   useEffect(() => {
//     if (!token) {
//       window.location = "/";
//     } else {
//       loadComplaints();
//     }
//   }, []);

//   // Load complaints (with filter)
//   const loadComplaints = async () => {
//     try {
//       const res = await axios.get("/api/complaints", {
//         headers: { Authorization: `Bearer ${token}` },
//         params: filter
//       });
//       setComplaints(res.data);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       alert("Access denied or error loading complaints");
//       setLoading(false);
//     }
//   };

//   // Update status
//   const updateStatus = async (id, status) => {
//     try {
//       await axios.put(`/api/complaints/${id}`, { status }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       loadComplaints();
//     } catch (err) {
//       alert("Update failed");
//     }
//   };

//   // Reload when filter changes
//   useEffect(() => {
//     loadComplaints();
//   }, [filter]);

//   return (
//     <>
//       <Navbar />

//       <div className="container mt-5">
//         <h3>All Complaints</h3>

//         {/* Filter Section */}
//         <div className="row mb-3">
//           <div className="col">
//             <input
//               className="form-control"
//               placeholder="Filter by Category"
//               onChange={e =>
//                 setFilter({ ...filter, category: e.target.value })
//               }
//             />
//           </div>

//           <div className="col">
//             <select
//               className="form-control"
//               onChange={e =>
//                 setFilter({ ...filter, status: e.target.value })
//               }
//             >
//               <option value="">All Status</option>
//               <option value="Pending">Pending</option>
//               <option value="In Progress">In Progress</option>
//               <option value="Resolved">Resolved</option>
//             </select>
//           </div>
//         </div>

//         {/* Table */}
//         {loading ? (
//           <p>Loading...</p>
//         ) : complaints.length === 0 ? (
//           <p>No complaints found.</p>
//         ) : (
//           <table className="table table-bordered">
//             <thead className="table-dark">
//               <tr>
//                 <th>User</th>
//                 <th>Category</th>
//                 <th>Priority</th>
//                 <th>Status</th>
//                 <th>Update</th>
//               </tr>
//             </thead>
//             <tbody>
//               {complaints.map(c => (
//                 <tr key={c._id}>
//                   <td>{c.userId?.name}</td>
//                   <td>{c.category}</td>
//                   <td>{c.priority}</td>
//                   <td>
//                     <span className={
//                       c.status === "Resolved"
//                         ? "badge bg-success"
//                         : c.status === "In Progress"
//                         ? "badge bg-warning text-dark"
//                         : "badge bg-secondary"
//                     }>
//                       {c.status}
//                     </span>
//                   </td>
//                   <td>
//                     <select
//                       className="form-select"
//                       onChange={e => updateStatus(c._id, e.target.value)}
//                     >
//                       <option value="">Change</option>
//                       <option value="Pending">Pending</option>
//                       <option value="In Progress">In Progress</option>
//                       <option value="Resolved">Resolved</option>
//                     </select>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </>
//   );
// }

// export default Admin;


import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Admin() {

  const token = localStorage.getItem("token");

  const [complaints, setComplaints] = useState([]);
  const [filter, setFilter] = useState({ status: "", category: "" });

  const load = async () => {
    const res = await axios.get("/api/complaints", {
      headers:{ Authorization:`Bearer ${token}` },
      params: filter
    });
    setComplaints(res.data);
  };

  const update = async (id,status) => {
    await axios.put(`/api/complaints/${id}`,{ status },{
      headers:{ Authorization:`Bearer ${token}` }
    });
    load();
  };

  useEffect(()=>{ load(); },[filter]);

  return (
    <>
      <Navbar />

      <div className="container py-5">

        <div className="mb-4">
          <h2 className="fw-bold">Admin Dashboard</h2>
          <p className="text-muted">Manage and resolve complaints</p>
        </div>

        {/* Filter Card */}
        <div className="card shadow-lg mb-4 p-4" style={{ borderRadius: "15px" }}>
          <h5 className="fw-bold mb-3">Filter Complaints</h5>

          <div className="row g-3">
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="Filter by Category"
                onChange={e=>setFilter({...filter,category:e.target.value})}
              />
            </div>

            <div className="col-md-6">
              <select
                className="form-select"
                onChange={e=>setFilter({...filter,status:e.target.value})}
              >
                <option value="">All Status</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </div>
          </div>
        </div>

        {/* Complaints Table */}
        <div className="card shadow-lg p-4" style={{ borderRadius: "15px" }}>
          <h5 className="fw-bold mb-3">All Complaints</h5>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>User</th>
                  <th>Category</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map(c=>(
                  <tr key={c._id}>
                    <td>{c.userId?.name}</td>
                    <td>{c.category}</td>
                    <td>{c.priority}</td>
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
                    <td>
                      <select
                        className="form-select"
                        onChange={e=>update(c._id,e.target.value)}
                      >
                        <option>Change</option>
                        <option>Pending</option>
                        <option>In Progress</option>
                        <option>Resolved</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
}

export default Admin;