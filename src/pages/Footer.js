import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" data-scroll="">
      <div className="footerContainer">
        <div className="col left">

          <div className="footerLogoWrapper">
            <span className="footerLogoText" style={{ fontSize: "5rem" }}>
              SUGAR <span className="footerLogoAmp"></span> MEDIA
            </span>
          </div>

          <ul className="footerMenuWrapper">
            <NavItem href="/" title="HOME" />
            <NavItem href="/about" title="ABOUT" />
            <NavItem href="/our-works" title="WORK" />
            <NavItem href="/contact" title="CONTACT" />
          </ul>
        </div>

        <div className="col right">
          <div className="footerTextWrapper">
            <div className="footerText">
              <h3 className="normalTitleSerif upper">
                F<i>O</i>LL<i>O</i>W<br />US <i>O</i>N
              </h3>
            </div>
          </div>

          <div className="footerSocialWrapper">
            <ul className="socials">
              <SocialItem
                href="https://www.instagram.com/sparkandriot/"
                title="Instagram"
                letters={['I', 'n', 's', 't', 'a', 'g', 'r', 'a', 'm']}
              />
              <SocialItem
                href="https://www.linkedin.com/company/sparkandriot/?originalSubdomain=nl"
                title="Linkedin"
                letters={['L', 'i', 'n', 'k', 'e', 'd', 'i', 'n']}
              />
            </ul>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="col left">
          <div className="footerBottomText">
            <p className="footerCopyright smallTitle">
              SUGAR MEDIA
            </p>
          </div>
        </div>
      </div>

      <div
        className="noise"
        style={{
          backgroundImage: "url('/assets/img/noise.png?v=74')",
          backgroundPosition: '44% 1%'
        }}
      ></div>
    </footer>
  );
};

// NavItem Component
const NavItem = ({ href, title }) => (
  <li className="navPrimaryWrapper navigationButton">
    <div className="navItem text navItemOriginal">
      <Link className="navLink navigationButton" to={href} title={title}>
        {title}
      </Link>
    </div>
    <div className="navItem text navItemDuplicate" inert="">
      <Link className="navLink navigationButton" to={href} title={title}>
        {title}
      </Link>
    </div>
  </li>
);

// SocialItem Component
const SocialItem = ({ href, title, letters }) => (
  <li className="socialWrapper">
    <div className="socialItem socialItemOriginal">
      <a
        className="socialLink normalTitleSerif upper active"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        {letters.map((letter, index) => (
          <div
            key={index}
            style={{ position: 'relative', display: 'inline-block' }}
            className="letter"
          >
            {letter}
          </div>
        ))}
      </a>
    </div>
  </li>
);

export default Footer;
