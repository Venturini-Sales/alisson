import { SectionContainer, SectionText } from "./styles";

// eslint-disable-next-line react/prop-types
const Section = ({ children }) => {
  return (
    <SectionContainer>
      <SectionText>{children}</SectionText>
    </SectionContainer>
  );
};

export default Section;
