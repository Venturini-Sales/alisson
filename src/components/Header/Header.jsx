import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HeaderContent,
  LinkArea,
  SectionsList,
  StyledHeader,
  StyledInfo,
  StyledSubTitle,
  StyledTitle,
} from "../Header/Styles";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <HeaderContent>
          <StyledTitle>Alisson Portela</StyledTitle>
          <StyledSubTitle>Lorem Ipsum</StyledSubTitle>
          <StyledInfo>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus maximus
            leo, suscipit porttitor natoque.
          </StyledInfo>
          <nav>
            <SectionsList>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </SectionsList>
          </nav>
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
    </>
  );
};
