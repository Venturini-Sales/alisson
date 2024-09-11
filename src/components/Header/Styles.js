import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;
    flex: 1;
    height: 100vh;
`

export const HeaderContent = styled.div`
    position: fixed;

`

export const StyledTitle = styled.h1`
    font-size: 3rem;
`

export const StyledSubTitle = styled.h2`
    font-size: 1.25rem;
    margin-top: 20px;
`

export const StyledInfo = styled.p`
    color: #808da2;
    width: 400px;
    margin-top: 20px;

`

export const SectionsList = styled.ul`
    list-style: none;
    margin-top: 100px;
    margin-bottom: 100px;

`

export const LinkArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;

`