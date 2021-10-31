import React from 'react';
import * as S from './styled';

export const Layout = ({ children }) => {


    return (
        <S.WrapperLayout>
            <header>header</header>
            { children }
        </S.WrapperLayout>
    )
}