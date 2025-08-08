const Navbar = () => {
  const sections = ['Intro', 'Contact', 'Experience', 'Education', 'Skills', 'Portfolio'];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white py-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Web CV</span>
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
          <ul className="navbar-nav ms-auto">
            {sections.map(section => (
              <li className="nav-item" key={section}>
                <a href={`#${section.toLowerCase()}`} className="nav-link text-white mx-2 hover:text-success">
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
