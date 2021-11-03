import * as S from './styled';
import { RepositorieItem } from '../';
import { useContext, useEffect, useState } from 'react';
import { GithubContext } from '../../context/github';
import { RiGitRepositoryFill, AiFillStar } from 'react-icons/all';

type RepositoriesStarred ={
    id: string;
    name: string;
    full_name: string;
    html_url: string;
}

export const Repositories = () => {
    const { githubState, getUserRepos, getUserStarred } = useContext(GithubContext);
    const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
          getUserRepos(githubState.user.login);
          getUserStarred(githubState.user.login);
        }
        setHasUserForSearchrepos(!!githubState.repositories);
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [githubState.user.login]);

    const renderRepos = (item: RepositoriesStarred) => {
        return (
            <RepositorieItem 
                fullName={item.full_name}
                name={item.name}
                linkToRepo={item.html_url}
                key={item.id}
            />
        )
    }

    const renderStarred = (item: RepositoriesStarred) => {
        return (
            <RepositorieItem 
                fullName={item.full_name}
                name={item.name}
                linkToRepo={item.html_url}
                key={item.id}
            />
        );
    }

    return (
        <>
            {
                hasUserForSearchrepos ?                     
                (
                    <S.WrapperTabs
                        selectedTabClassName="is-selected"
                        selectedTabPanelClassName="is-selected"
                    >
                        <S.WrapperTabList>
                            <S.WrapperTab>
                                <RiGitRepositoryFill size="24" /> Repositories
                            </S.WrapperTab>
                            <S.WrapperTab>
                                <AiFillStar size="24" /> Starred
                            </S.WrapperTab>
                        </S.WrapperTabList>
                        <S.WrapperTabPanel>
                           
                            { githubState.repositories.map(renderRepos)}

                        </S.WrapperTabPanel>
                        
                        <S.WrapperTabPanel>
                            
                            { githubState.starred.map(renderStarred)}

                        </S.WrapperTabPanel>

                    </S.WrapperTabs>
                ) : ''
            }
        </>
    );
}
