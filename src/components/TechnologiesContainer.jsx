import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiBootstrap,
} from "react-icons/di";
import {SiSqlite} from 'react-icons/si'
import "../styles/components/technologiescontainer.sass";
const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> ,description:"Tive contato com essa tecnologia através do meu estágio na i9Sistemas e cursos online."},
  { id: "css", name: "CSS3", icon: <DiCss3 />, description:"Tive contato com essa tecnologia através do meu estágio na i9Sistemas e cursos online." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />,description:"Tive contato com essa tecnologia através do meu estágio na i9Sistemas e cursos online."},
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />,description:"Tive contato com essa tecnologia atraves do curso online da plataforma Rocketseat." },
  { id: "sqlite", name: "SQLite", icon: <SiSqlite />, description:"Tive contato com essa tecnologia atraves do curso online da plataforma Rocketseat." },
  { id: "react", name: "React", icon: <DiReact />, description:"Tive contato com essa tecnologia atraves do curso online da plataforma Rocketseat." },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />, description:"Tive contato com essa tecnologia através do meu estágio na i9Sistemas." },
];
const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TechnologiesContainer;
