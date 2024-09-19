import {
  CardContainer,
  ContentArea,
  ContentText,
  ContentTitle,
  InfoArea,
  LanguagesArea,
} from "./Styles";

// eslint-disable-next-line react/prop-types
export const Card = ({ children, date, title, text, img }) => {
  return (
    <CardContainer>
      <InfoArea>
        <p>{date}</p>
        {img && <img src={img} alt="Image" />}
      </InfoArea>
      <ContentArea>
        <ContentTitle>{title}</ContentTitle>
        <ContentText>{text}</ContentText>
        <LanguagesArea>{children}</LanguagesArea>
      </ContentArea>
    </CardContainer>
  );
};
