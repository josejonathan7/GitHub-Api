import React from 'react';
import * as S from './styled';

export const RepositorieItem = ({name, fullName, linkToRepo}) => {


    return (
        <S.Wrapper>
                <S.WrapperTitle>
                    {name}
                </S.WrapperTitle>
                <h4>Full name:</h4>
                <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
                    {fullName}
                </S.WrapperLink>
        </S.Wrapper>
    );
}