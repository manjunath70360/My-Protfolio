import './index.css'

function Navigation() {
  const scrollToSection = id => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <nav className="nav-bar">
      <div className="logo-con">
        <img
          src="https://res.cloudinary.com/dwwunc51b/image/upload/v1704874471/m_logo-removebg-preview_egkkcc.png"
          className="logo"
          alt="logo"
        />
        <p className="name-logo">Manjunath</p>
      </div>
      <div className="nav-btn">
        <button
          className="nav-text about-btn"
          type="button"
          onClick={() => scrollToSection('about')}
        >
          <p className="text">About</p>
        </button>

        <button
          className="nav-text"
          type="button"
          onClick={() => scrollToSection('projects')}
        >
          <p className="text">Projects</p>
        </button>

        <button
          className="nav-text"
          type="button"
          onClick={() => scrollToSection('contact')}
        >
          <p className="text">Contact</p>
        </button>
      </div>
    </nav>
  )
}

export default Navigation
