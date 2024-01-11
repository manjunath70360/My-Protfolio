import Navigation from '../Navigation'
import Projects from '../Projects'
import Contact from '../Contact'
import Skills from '../Skills'

import './index.css'

const projectsList = [
  {
    projectTitle: 'Jobby App',
    imgUrl:
      'https://assets.ccbp.in/frontend/content/react-js/jobby-app-jobs-success-lg-output-v0.png',
    description:
      'Crafted Jobby App with React: fashioned Login, Home, Jobs, Job details pages using JWT tokens for secure user data via REST API & local storage.',
    technologiesUsed:
      'React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authentication',
    projectLink: 'http://jobbyappmanju70.ccbp.tech/',
  },
  {
    projectTitle: 'NXT Trendz',
    imgUrl:
      'https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-login-output.png',
    description:
      'Designed e-commerce site inspired by Amazon/Flipkart using React, featuring Login, Products, and Product details pages with React Router, components, and forms.',
    technologiesUsed:
      ' React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authentication',
    projectLink: 'http://nxttrendzm23.ccbp.tech/',
  },
  {
    projectTitle: 'Food Munch',
    imgUrl: 'https://screenshots.codesandbox.io/z7gbo/7.png',
    description:
      'Built a responsive food-focused website featuring a diverse array of items. Designed with HTML structure elements and Bootstrap for seamless user experience.',
    technologiesUsed: ' HTML, CSS, Bootstrap',
    projectLink: 'http://foodmunch019.ccbp.tech/',
  },
  {
    projectTitle: 'Wikipedia',
    imgUrl:
      'https://buyutec.org/wp-content/uploads/2021/10/wikipedia-logo.jpeg.webp',
    description:
      'Built a dynamic Wikipedia-inspired platform employing HTML, CSS, and JavaScript integrated with APIs for content enrichment and seamless browsing.',
    technologiesUsed: ' HTML, CSS,JS,API, Bootstrap',
    projectLink: 'http://wikipediamanju.ccbp.tech/',
  },
]

const skillList = [
  {
    technology: 'Python',
    techUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/python-img.png',
  },
  {
    technology: 'JavaScript',
    techUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/javascript-img.png',
  },
  {
    technology: 'HTML 5',
    techUrl: 'https://assets.ccbp.in/frontend/react-js/jobby-app/html-img.png',
  },
  {
    technology: 'CSS 3',
    techUrl: 'https://assets.ccbp.in/frontend/react-js/jobby-app/css-img.png',
  },
  {
    technology: 'SQL Lite',
    techUrl: 'https://logospng.org/download/sqlite/sqlite-256.png',
  },
  {
    technology: 'Node Js',
    techUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/nodejs-img.png',
  },
  {
    technology: 'React JS',
    techUrl:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/reactjs-img.png',
  },
  {
    technology: 'Express JS',
    techUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBh0qSJK4umstwuqRaH_iA4Sb7gZz7puf7XE2Pm5ufw&s',
  },
  {
    technology: 'Java',
    techUrl:
      'https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png',
  },
  {
    technology: 'BootStrap',
    techUrl:
      'https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png',
  },
]

const About = () => {
  const scrollToSection = id => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <div className="app-container">
      <Navigation />

      <div className="content" id="about">
        <div className="text-side">
          <h1 className="role">FULL STACK DEVELOPER / SOFTWARE ENGINEER</h1>
          <h1 className="name">
            Hello, my name is <br /> Manjunath Matapathi
          </h1>
          <p className="about-text">
            I&apos;m a recent graduate excited about software development. Eager
            to apply my skills and learn from experienced professionals in the
            software industry.
          </p>

          <div className="btn-container">
            <button
              onClick={() => scrollToSection('projects')}
              type="button"
              className="project-btn"
            >
              Projects
            </button>
            <a
              href="https://www.linkedin.com/in/manjunath-matapathi"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="linkedin-btn">
                Linkedin
              </button>
            </a>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dwwunc51b/image/upload/v1704811668/IMG_20220108_162048-removebg-preview-removebg-preview_xrfpce.png"
            alt="protfolio"
            className="portfolio-image"
          />
        </div>
      </div>

      <div className="projectsList-container">
        <h1 id="projects" className="title-project">
          Projects
        </h1>
        {projectsList.map(each => (
          <Projects details={each} />
        ))}

        <h1 id="projects" className="title-project">
          Skills
        </h1>
        <ul className="skill-container">
          {skillList.map(eachSkill => (
            <Skills skillDetails={eachSkill} />
          ))}
        </ul>
        <h1 id="projects" className="title-project">
          Contact
        </h1>
        <Contact />
      </div>
    </div>
  )
}

export default About

/*      
      <img src='https://creative-palmier-2cfa5f.netlify.app/image/profile.png' alt='protfolio' className='portfolio-image' />
      */
