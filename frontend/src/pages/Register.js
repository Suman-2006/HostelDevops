// import { useState } from "react";
// import axios from "axios";

// function Register() {
//   const [form, setForm] = useState({ name:"", email:"", password:"", role:"student" });

//   const register = async () => {
//     await axios.post("/api/auth/register", form);
//     alert("Registered Successfully");
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Register</h3>
//       <input className="form-control mb-2" placeholder="Name"
//         onChange={e=>setForm({...form,name:e.target.value})}/>
//       <input className="form-control mb-2" placeholder="Email"
//         onChange={e=>setForm({...form,email:e.target.value})}/>
//       <input type="password" className="form-control mb-2" placeholder="Password"
//         onChange={e=>setForm({...form,password:e.target.value})}/>
//       <select className="form-control mb-2"
//         onChange={e=>setForm({...form,role:e.target.value})}>
//         <option value="student">Student</option>
//         <option value="admin">Admin</option>
//       </select>
//       <button className="btn btn-success" onClick={register}>Register</button>
      
//     </div>
//   );
// }

// // export default Register;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Register() {

//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "student"
//   });

//   const [registered, setRegistered] = useState(false);

//   const register = async () => {
//     try {
//       await axios.post("/api/auth/register", form);
//       alert("Registered Successfully");
//       setRegistered(true);   // Show login button
//     } catch (err) {
//       alert("Registration failed");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Register</h3>

//       <input
//         className="form-control mb-2"
//         placeholder="Name"
//         onChange={e => setForm({ ...form, name: e.target.value })}
//       />

//       <input
//         className="form-control mb-2"
//         placeholder="Email"
//         onChange={e => setForm({ ...form, email: e.target.value })}
//       />

//       <input
//         type="password"
//         className="form-control mb-2"
//         placeholder="Password"
//         onChange={e => setForm({ ...form, password: e.target.value })}
//       />

//       <select
//         className="form-control mb-2"
//         onChange={e => setForm({ ...form, role: e.target.value })}
//       >
//         <option value="student">Student</option>
//         <option value="admin">Admin</option>
//       </select>

//       <button className="btn btn-success me-2" onClick={register}>
//         Register
//       </button>

//       {/* Proceed to Login Button */}
//       {registered && (
//         <button
//           className="btn btn-primary"
//           onClick={() => navigate("/")}
//         >
//           Proceed to Login
//         </button>
//       )}

//       <p className="mt-3">
//         Already have an account?{" "}
//         <span
//           style={{ color: "blue", cursor: "pointer" }}
//           onClick={() => navigate("/")}
//         >
//           Login Here
//         </span>
//       </p>
//     </div>
//   );
// }

// export default Register;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student"
  });

  const [registered, setRegistered] = useState(false);

  const register = async () => {
    try {
      await axios.post("/api/auth/register", form);
      alert("Registered Successfully");
      setRegistered(true);
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(to right, #eef2f3, #dbe9f4)" }}>

      <div className="card shadow-lg p-4" style={{ width: "450px", borderRadius: "15px" }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold">Create Account</h3>
          <p className="text-muted">Register for HostelOps</p>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Full Name</label>
          <input
            className="form-control"
            placeholder="Enter your name"
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            className="form-control"
            placeholder="Enter your email"
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Create password"
            onChange={e => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Select Role</label>
          <select
            className="form-select"
            onChange={e => setForm({ ...form, role: e.target.value })}
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button className="btn btn-success w-100 fw-semibold" onClick={register}>
          Register
        </button>

        {registered && (
          <button
            className="btn btn-primary w-100 mt-2 fw-semibold"
            onClick={() => navigate("/")}
          >
            Proceed to Login
          </button>
        )}

        <div className="text-center mt-3">
          <small>
            Already have an account?{" "}
            <span
              className="fw-semibold text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              Login Here
            </span>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Register;