import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;

`;

export const WrapperInfoUser = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: auto;
    margin-left: 8px;
`; 

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;

`; 

export const WrapperUserName = styled.div`
    display: flex;
    align-items: center;
    h3 {
        margin-right: 8px;
    }
`; 

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 50%;
    margin: 8px;
`;