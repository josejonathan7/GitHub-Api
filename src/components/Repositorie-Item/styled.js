import styled from 'styled-components';

export const Wrapper = styled.div`
    border: 1px solid #CCC;
    padding: 10px;
    width: 22%;
    border-radius: 8px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    h4 {
        font-size: 18px;
    }
`;

export const WrapperTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
`;

export const WrapperLink = styled.a`
    word-wrap: break-word;
    color: blue;
`;