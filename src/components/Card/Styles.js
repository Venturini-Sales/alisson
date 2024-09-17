import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: #191919;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding: 20px;
    border-radius: 5px;
    transition: 0.3s;
    &:hover{
        cursor: pointer;
        background-color: #1B1B1B;
        transform: scale(1.05);
        box-shadow: 0px 0px 7px rgba(0,0,0,0.5);
    }
`;

export const InfoArea = styled.div`
    flex: 1;

    p{  
        text-transform: uppercase;
        color: #808da2;
        font-size: 13px;
        font-weight: 500;
    }

`

export const ContentArea = styled.div`
    flex: 2;
`

export const ContentTitle = styled.h2`
    font-size: 18px;
`

export const ContentText = styled.p`
    margin-top: 10px;
    font-size: 14px;
`

export const LanguagesArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`
