import { useState } from 'react';
import * as S from './styled';
import { useGithub } from '../../hooks/githubHooks';

export const Header = () => {
    const { getUser } = useGithub();
    const [ userNameForSearch, setUserNameForSearch] = useState();

    const submitGetUser = () => {

        if(!userNameForSearch) return;
        return getUser(userNameForSearch);
    }

    return(
        <S.Wrapper>
            <input type="text" placeholder="Digite o username para pesquisa!" />
            <button>buscar</button>
        </S.Wrapper>
    );
}