import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;

`;

export const WrapperInfoUser = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 200px;
    margin-left: 8px;
    justify-content: space-between;
    h1 {
        font-size: 32px;
        font-weight: bold;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
    }

    h4 {
        font-size: 16px;
        font-weight: bold;
    }
`; 

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    div: {
        margin: 8px;
        text-align: center;
    }
`; 

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;

    h3 {
        margin-right: 8px;
    }

    a {
        font-size: 18px;
        color: blue;
        font-weight: bold;
    }
`; 

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`;