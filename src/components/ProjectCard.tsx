type ProjectCardProps = {
  title: string
  description: string
  link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>View Project</a>
    </div>
  )
}

export default ProjectCard