import * as S from './styled';
import { RepositorieItem } from '../';
import { useContext, useEffect, useState } from 'react';
import { GithubContext } from '../../context/github';

export const Repositories = () => {
    const { getUserRepos, githubState } = useContext(GithubContext);
    const [ hasUserForSearchRepo, setHasUserForSearchRepo ] = useState(false);

    /*useEffect(() => {
        if(!!githubState.user.login){
            getUserRepos();
        }

        setHasUserForSearchRepo(!!githubState.repositories)
    }, [githubState.user])*/

    //console.log(!!githubState.user.login);

    return (
        <>
            {
                hasUserForSearchRepo ?                     
                (
                    <S.WrapperTabs
                        selectedTabClassName="is-selected"
                        selectedTabPanelClassName="is-selected"
                    >
                        <S.WrapperTabList>
                            <S.WrapperTab>Repositories</S.WrapperTab>
                            <S.WrapperTab>Starred</S.WrapperTab>
                        </S.WrapperTabList>
                        
                        <S.WrapperTabPanel>
                            <RepositorieItem
                                linkToRepo="https://github.com/josejonathan7/Agenda-Atividade-Etec"
                                name="Agenda-Atividade-Etec"
                                fullName="josejonathan7/Agenda-Atividade-Etec"
                            />
                        </S.WrapperTabPanel>

                    </S.WrapperTabs>
                ) : ''
            }
        </>
    );
}
/*<S.WrapperTabPanel>
{githubState.repositories.map(item => {
    <RepositorieItem
       linkToRepo="https://github.com/josejonathan7/-semana-javascript-expert05"
       name={item.name}
       fullName="josejonathan7/-semana-javascript-expert05"
   />
})}

</S.WrapperTabPanel>*/