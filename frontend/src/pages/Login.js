// import {useState} from "react";
// import axios from "axios";

// function Login(){
//   const [email,setEmail]=useState("");
//   const [password,setPassword]=useState("");

//   const login=async()=>{
//     const res=await axios.post("/api/auth/login",{email,password});
//     if(res.data.role==="student") window.location="/student";
//     else window.location="/admin";
//   };

//   return(
//     <div className="container mt-5">
//       <h2>HostelOps Login</h2>
//       <input className="form-control mb-2" placeholder="Email"
//         onChange={e=>setEmail(e.target.value)}/>
//       <input type="password" className="form-control mb-2"
//         placeholder="Password"
//         onChange={e=>setPassword(e.target.value)}/>
//       <button className="btn btn-primary" onClick={login}>Login</button>
//     </div>
//   );
// }
// export default Login;

// import { useState } from "react";
// import axios from "axios";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const login = async () => {
//     const res = await axios.post("/api/auth/login", {
//       email,
//       password
//     });

//     localStorage.setItem("token", res.data.token);

//     if (res.data.role === "student") {
//       window.location = "/student";
//     } else {
//       window.location = "/admin";
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Login</h2>
//       <input className="form-control mb-2"
//         placeholder="Email"
//         onChange={(e)=>setEmail(e.target.value)} />
//       <input type="password"
//         className="form-control mb-2"
//         placeholder="Password"
//         onChange={(e)=>setPassword(e.target.value)} />
//       <button className="btn btn-primary" onClick={login}>Login</button>
//       <p className="mt-3">
//         Don't have account? <a href="/register">Register</a>
//       </p>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await axios.post("/api/auth/login", {
      email,
      password
    });

    localStorage.setItem("token", res.data.token);

    if (res.data.role === "student") {
      window.location = "/student";
    } else {
      window.location = "/admin";
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(to right, #eef2f3, #dbe9f4)" }}>

      <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "15px" }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold">HostelOps</h3>
          <p className="text-muted">Login to your account</p>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            className="form-control"
            placeholder="Enter your email"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100 fw-semibold" onClick={login}>
          Login
        </button>

        <div className="text-center mt-3">
          <small>
            Don't have account?{" "}
            <a href="/register" className="fw-semibold text-decoration-none">
              Register
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;