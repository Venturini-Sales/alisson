/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HeaderContent,
  LinkArea,
  SectionsList,
  StyledHeader,
  StyledInfo,
  StyledSubTitle,
  StyledTitle,
  List,
  NavList,
} from "./Styles";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <div>
          <StyledTitle>Alisson Portela</StyledTitle>
          <StyledSubTitle>Desenvolvedor Web</StyledSubTitle>
          <StyledInfo>
            Desenvolvedor web com experiência em React.js para aplicações web,
            trazendo soluções do front ao mobile com a mesma agilidade que um
            café expresso traz energia!
          </StyledInfo>
          <NavList>
            <SectionsList>
              <List>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  activeClass="active"
                >
                  Sobre
                </Link>
              </List>
              <List>
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-160}
                  activeClass="active"
                >
                  Experiência
                </Link>
              </List>
              <List>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-160}
                  activeClass="active"
                >
                  Projetos
                </Link>
              </List>
            </SectionsList>
          </NavList>
        </div>
        <LinkArea>
          <a href="">
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              style={{ color: "#808da2" }}
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              style={{ color: "#808da2" }}
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="xl"
              style={{ color: "#808da2" }}
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              style={{ color: "#808da2" }}
            />
          </a>
        </LinkArea>
      </HeaderContent>
    </StyledHeader>
  );
};
