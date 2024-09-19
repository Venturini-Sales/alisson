import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  //flex: 1;
  width: 50%;
  position: sticky;
  top: 0;
  max-height: 100vh;
  padding-top: 6rem;
  padding-bottom: 6rem;
`;

export const HeaderContent = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

export const StyledTitle = styled.h1`
  font-size: 3rem;
`;

export const StyledSubTitle = styled.h2`
  font-size: 1.25rem;
  margin-top: 20px;
`;

export const StyledInfo = styled.p`
  color: #7E7E7E;
  width: 400px;
  margin-top: 20px;
`;

export const NavList = styled.nav`

`;
export const SectionsList = styled.ul`
  list-style: none;
  margin-top: 4rem;
`;

export const List = styled.li`
  margin-bottom:20px;
  cursor: pointer;
  .active {
    color: #F7F7F7; /* Cor do item ativo */
    font-weight: bold;
  }
`;

export const LinkArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

