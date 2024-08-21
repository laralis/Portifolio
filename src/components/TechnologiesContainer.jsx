import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiBootstrap,
} from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSqlite,
  SiStyledcomponents,
  SiSass,
  SiMongodb,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import "../styles/components/technologiescontainer.sass";
const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    description: (
      <>
        Prática em cursos:
        <li>Rocketseat</li>
        <li>Alura</li>
        Experiência profissional:
        <li>Estágio na i9Sistemas</li>{" "}
      </>
    ),
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    description: (
      <>
        Prática em cursos:
        <li>Rocketseat</li>
        <li>Alura</li>
        Experiência profissional:
        <li>Estágio na i9Sistemas</li>{" "}
      </>
    ),
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    description: (
      <>
        Prática em cursos:
        <li>Rocketseat</li>
        <li>Alura</li>
        Experiência profissional:
        <li>Estágio na i9Sistemas</li>{" "}
      </>
    ),
  },
  {
    id: "ts",
    name: "TypeScript",
    icon: <SiTypescript />,
    description: (
      <>
        Prática em cursos:
        <li>Rocketseat</li>
        <li>Alura</li>
        Experiência profissional:
        <li>Time site Youcom</li>{" "}
      </>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: <SiTailwindcss />,
    description: (
      <>
        Prática em cursos:
        <li>Rocketseat</li>
        <li>Alura</li>
        Experiência profissional:
        <li>Time site Youcom</li>{" "}
      </>
    ),
  },
  {
    id: "next",
    name: "Next.js",
    icon: <SiNextdotjs />,
    description: (
      <>
        Prática em cursos:
        <li>Rocketseat</li>
        <li>Youtube</li>
        Experiência profissional:
        <li>Time site Youcom</li>{" "}
      </>
    ),
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    description: (
      <>
        Prática em cursos:
        <li>Rocketseat</li>
        <li>Alura</li>
      </>
    ),
  },
  {
    id: "sqlite",
    name: "SQLite",
    icon: <SiSqlite />,
    description: (
      <>
        Prática em cursos:
        <li>Rocketseat</li>
      </>
    ),
  },
  {
    id: "mongo",
    name: "MongoDB",
    icon: <SiMongodb />,
    description: (
      <>
        Prática em cursos:
        <li>Alura</li>
      </>
    ),
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    description: (
      <>
        Prática em cursos:
        <li>Rocketseat</li>
      </>
    ),
  },
  //Git
  {
    id: "git",
    name: "Git",
    icon: <FaGitAlt />,
    description: (
      <>
        Prática em cursos:
        <li>Rocketseat</li> <li>Youtube</li> Experiência profissional:
        <li>Time site Youcom</li>{" "}
      </>
    ),
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: <DiBootstrap />,
    description: (
      <>
        Prática em cursos:
        <li> YouTube</li> Experiência profissional:
        <li>Estágio i9Sistemas</li>{" "}
      </>
    ),
  },
  {
    id: "styled",
    name: "Styled components",
    icon: <SiStyledcomponents />,
    description: (
      <>
        Prática em cursos:
        <li> Rocketseat</li>{" "}
      </>
    ),
  },
  {
    id: "sass",
    name: "Sass",
    icon: <SiSass />,
    description: (
      <>
        Prática em cursos:
        <li> Youtube</li>{" "}
      </>
    ),
  },
];
export default function TechnologiesContainer() {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            <div id="title">
              {tech.icon}
              <h3>{tech.name}</h3>
            </div>
            <div className="technology-info">
              <p>{tech.description} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
