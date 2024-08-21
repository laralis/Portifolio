import SocialNetworks from "../components/SocialNetworks";
import InformationContainer from "../components/InformationContainer";
import Avatar from "../img/Foto1.jpeg";
import resume from "../../public/Currículo.pdf";
import "../styles/components/sidebar.sass";
export default function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Larissa Moreira" />
      <p className="title">Desenvolvedora front-end</p>
      <SocialNetworks />
      <InformationContainer />
      <a href={resume} className="btn" download="Currículo">
        Download currículo
      </a>
    </aside>
  );
}
