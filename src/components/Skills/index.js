import './index.css'

const Skills = props => {
  const {skillDetails} = props
  const {technology, techUrl} = skillDetails

  return (
    <li className="skill-item">
      <img src={techUrl} className="tech-icon" alt="icon" />
      <p className="tech-name">{technology}</p>
    </li>
  )
}

export default Skills
