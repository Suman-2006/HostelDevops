function Navbar() {

  const logout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  return (
    <nav className="navbar navbar-dark bg-dark p-2">
      <span className="navbar-brand">HostelOps</span>
      <button className="btn btn-danger" onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;