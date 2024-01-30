import React from "react";
import SocialNetworks from '../components/SocialNetworks';
import InformationContainer from '../components/InformationContainer'
import Avatar from '../img/Foto1.jpeg'
import resume from '../../public/Currículo.pdf'
import "../styles/components/sidebar.sass"
const Sidebar = () => {
  return(
    <aside id='sidebar'>
      <img src={Avatar} alt="Larissa Moreira" />
      <p className='title'>Desenvolvedora front-end</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href={resume} className='btn' download="Currículo">Download currículo</a>
    </aside>
  );
};
export default Sidebar;
