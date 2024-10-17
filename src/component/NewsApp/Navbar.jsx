import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a
            className="navbar-brand badge  bg-danger"
            href="#"
            style={{ height: "20px", fontSize: "20px" }}
          >
            Navbar
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
            <ul className="navbar-nav">
              <li className="nav-item " style={{ cursor: "pointer" }}>
                <a
                  className="nav-link cursor-pointer"
                  aria-current="page"
                  onClick={() => setCategory("Technology")}
                >
                  Technology
                </a>
              </li>
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <a
                  className="nav-link "
                  aria-current="page"
                  onClick={() => setCategory("Business")}
                >
                  Business
                </a>
              </li>
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <a
                  className="nav-link "
                  aria-current="page"
                  onClick={() => setCategory("Health")}
                >
                  Health
                </a>
              </li>
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <a
                  className="nav-link "
                  aria-current="page"
                  onClick={() => setCategory("Sports")}
                >
                  Sports
                </a>
              </li>
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <a
                  className="nav-link "
                  aria-current="page"
                  onClick={() => setCategory("Entertainment")}
                >
                  Entertainment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
