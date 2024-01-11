import './index.css'

const Projects = props => {
  const {details} = props
  const {projectTitle, imgUrl, description, technologiesUsed, projectLink} =
    details
  return (
    <div className="project-container">
      <img src={imgUrl} className="project-img" alt="project" />
      <div className="project-details">
        <h1 className="project-name">{projectTitle}</h1>
        <p className="para">{description}</p>
        <p className="para">
          <span className="side-text">Technologies Used:</span>{' '}
          {technologiesUsed}
        </p>
        <a
          href={projectLink}
          className="btn-cont"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="view-btn">
            View Project
          </button>
        </a>
      </div>
    </div>
  )
}

export default Projects
