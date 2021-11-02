import * as S from './styled';
import { RepositorieItem } from '../';
import { Key, useContext, useEffect, useState } from 'react';
import { GithubContext } from '../../context/github';

type RepositoriesStarred ={
    id: string;
    name: string;
    full_name: string;
    html_url: string;
}

export const Repositories = () => {
    const { repositories: ContextRepositories, githubState, starred: ContextStarred } = useContext(GithubContext);
    const [ repositories, setRepositories ] = useState<RepositoriesStarred[]>([]);
    const [ starred, setStarred ] = useState<RepositoriesStarred[]>([]);

    useEffect(() => {
        if(!!githubState.user.login){
            console.log(ContextStarred)
            console.log(ContextRepositories)
            setRepositories(ContextRepositories);
            setStarred(ContextStarred);
        }
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
                repositories.length > 0 ?                     
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
                           
                            { repositories.map(renderRepos)}

                        </S.WrapperTabPanel>
                        
                        <S.WrapperTabPanel>
                            
                            { starred.map(renderStarred)}

                        </S.WrapperTabPanel>

                    </S.WrapperTabs>
                ) : ''
            }
        </>
    );
}
