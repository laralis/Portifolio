import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />,link:"https://www.linkedin.com/in/larissamlisboa/" },
  { name: "github", icon: <FaGithub />,link:"https://github.com/laralis" },
];
const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} target="__blank" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};
export default SocialNetworks;
