import React, { useContext } from 'react';
import * as S from './styled';
import { Header, NoSearch } from '../';
import { GithubContext } from '../../context/github';

export const Layout = ({ children }) => {
    const { githubState, hasUser } = useContext(GithubContext);

    return (
        <S.WrapperLayout>
            <Header />
            {
                hasUser ? <>{ githubState.loading ? <p>Is Loading</p> : <>{ children }</>}</> :
                <NoSearch />
            }
        </S.WrapperLayout>
    )
}