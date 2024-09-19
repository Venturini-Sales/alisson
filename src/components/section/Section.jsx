import { SectionContainer, SectionText } from "./styles";

// eslint-disable-next-line react/prop-types
const Section = ({ id, children }) => {
  return (
    <SectionContainer id={id}>
      <SectionText>{children}</SectionText>
    </SectionContainer>
  );
};

export default Section;
