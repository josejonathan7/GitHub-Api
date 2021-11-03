import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 8px;

    input {
        border: 1px solid #CCC;
        border-radius: 8px;
        width: 50%;
        padding: 8px;

        &::placeholder {
            color: #CCC;
        }
    }

    button {
        padding: 10px;
        border-radius: 8px;
        color: #CCC;
        border: 1px solid #CCC;
        display: flex;
        flex-direction: row;
        gap: 15px;
        align-items: center;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;