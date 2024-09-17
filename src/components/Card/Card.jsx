import {
  CardContainer,
  ContentArea,
  ContentText,
  ContentTitle,
  InfoArea,
  LanguagesArea,
} from "./Styles";

// eslint-disable-next-line react/prop-types
export const Card = ({ children }) => {
  return (
    <CardContainer>
      <InfoArea>
        <p>July — Dec 2000</p>
      </InfoArea>
      <ContentArea>
        <ContentTitle>Lorem ipsum dolor sit amet elit sed</ContentTitle>
        <ContentText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </ContentText>
        <LanguagesArea>{children}</LanguagesArea>
      </ContentArea>
    </CardContainer>
  );
};
