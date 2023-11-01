const Navbar2 = () => {
  return (
    <nav className="navbar  navbar-dark bg-dark fixed-top z-2">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h1>LEJHRO</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav fw-semibold justify-content-around">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Innovations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Business Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Financial Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Bootcamp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
