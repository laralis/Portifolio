import React from "react";
import "../styles/components/projectscontainer.sass";
import project1 from "../img/project1.png";
import project2 from '../img/project2.png'
import project3 from '../img/project3.png'
import project4 from '../img/project4.png'
const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Durante minha trajetória de aprendizado, dediquei-me à execução de
        diversos projetos, visando a consolidação dos conhecimentos adquiridos
        em cada nova tecnologia explorada. Estas iniciativas não apenas
        representam marcos significativos em meu percurso, mas também evidenciam
        meu comprometimento em aplicar de maneira prática os conceitos
        assimilados.
      </p>
      <div className="projects-grid">
        <div className="projects-card">
          <div className="header">
            <h3>RocketNotes</h3>

            <img src={project1} alt="RocketNotes" />
          </div>
          <div className="infos">
            <p>
              Uma aplicação que organiza seus links mais importantes em notas
              com tags.
            </p>
            <a
              href="https://rocketnotes-navy.vercel.app/"
              target="__blank"
              className="btn"
            >
              Ver projeto
            </a>
          </div>
        </div>
        <div className="projects-card">
          <div className="header">
            <h3>GitFav</h3>

            <img src={project2} alt="RocketNotes" />
          </div>
          <div className="infos">
            <p>
              Uma aplicação que lista e guarda seus perfis favoritos do github.
            </p>
            <a
              href="https://git-fav-lime.vercel.app/"
              target="__blank"
              className="btn"
            >
              Ver projeto
            </a>
          </div>
        </div>
        <div className="projects-card">
          <div className="header">
            <h3>DoctorCare</h3>

            <img src={project3} alt="RocketNotes" />
          </div>
          <div className="infos">
            <p>
              Uma landing page para sistema de assistência médica. Possui uma navegação facilitada e animações de rolagem da página.
            </p>
            <a
              href="https://doctor-care-red.vercel.app/#home"
              target="__blank"
              className="btn"
            >
              Ver projeto
            </a>
          </div>
        </div>
        <div className="projects-card">
          <div className="header">
            <h3>FocusTimer</h3>

            <img src={project4} alt="RocketNotes" />
          </div>
          <div className="infos">
            <p>
              Um crônometro para estudos, útil para quem gosta de utilizar o método Pomodoro. Também contra com músicas ambientes para ajudar na concentração.
            </p>
            <a
              href="https://focus-timer-ashy.vercel.app/"
              target="__blank"
              className="btn"
            >
              Ver projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectsContainer;
