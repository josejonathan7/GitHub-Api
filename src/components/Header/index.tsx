import { useContext, useState } from 'react';
import { GithubContext } from '../../context/github';
import * as S from './styled';
import { BiSearchAlt, BsGithub } from 'react-icons/all';

export const Header = () => {
    const { getUser } = useContext(GithubContext)
    const [ userNameForSearch, setUserNameForSearch] = useState('');

    const submitGetUser = () => {
        if(!userNameForSearch) return;
        return getUser(userNameForSearch);
    }

    return(
        <S.Wrapper>
            <input 
                type="text" 
                placeholder={`Digite o username para pesquisa!`}
                onChange={e => setUserNameForSearch(e.target.value)}
            />
            <button onClick={submitGetUser}><BiSearchAlt size="32" /> buscar</button>
        </S.Wrapper>
    );
}