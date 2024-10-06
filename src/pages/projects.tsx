import ProjectCard from '../components/ProjectCard';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  { title: 'Project 1', description: 'My first project', link: 'https://github.com/user/project1' },
  { title: 'Project 2', description: 'Another project', link: 'https://github.com/user/project2' },
];

const Projects: React.FC = () => {
  return (
    <div>
      <h1>My Programming Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;