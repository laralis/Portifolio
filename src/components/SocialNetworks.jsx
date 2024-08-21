import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <LinkedinLogo size={32} color="#ffffff" />,
    link: "https://www.linkedin.com/in/larissamlisboa/",
  },
  {
    name: "github",
    icon: <GithubLogo size={32} color="#ffffff" />,
    link: "https://github.com/laralis",
  },
];
export default function SocialNetworks() {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.link}
          target="__blank"
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
}
