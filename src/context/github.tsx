import { createContext, useCallback, useEffect, useState } from 'react';
import { api } from '../services/api';

type User ={
        login: string,
        name: string,
        html_url: string,
        blog: string,
        company: string,
        location: string,
        followers: number,
        following: number,
        public_gists: number,
        public_repos: number,
        avatar_url: string;
}

type RepositoriesStarred ={
    id: string;
    name: string;
    full_name: string;
    html_url: string;
}

type GitDataType ={
    loading: boolean,
    user: User;
}

type ContextType ={
    githubState: GitDataType;
    getUser?: (userName: string) => any; 
    hasUser: boolean;
    repositories: RepositoriesStarred[];
    starred: RepositoriesStarred[];
}

export const GithubContext = createContext({} as ContextType);

export const GithubProvider = ({children}) => {
    const [ githubState, setGithubState] = useState<GitDataType>({
        loading: false,
        user: {
            login: '',
            name: 'José Jonathan',
            html_url: '',
            blog: '',
            company: '',
            location: '',
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
            avatar_url: ''
        }
    });
    const [ hasUser, setHasUser ] = useState(false);
    const [ repositories, setRepositories ] = useState<RepositoriesStarred[]>([]);
    const [ starred, setStarred ] = useState<RepositoriesStarred[]>([]);

    const getUser = (userName: string) => {
        setGithubState(prevState => ({
            ...prevState,
            loading: !prevState
        }));
        api.get<User>(`users/${userName}`).then(({data}) => {
            setGithubState(prevState => ({
                ...prevState,
                user: {
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    blog: data.blog,
                    company: data.company,
                    location: data.location,
                    followers: data.followers,
                    following: data.following,
                    public_gists: data.public_gists,
                    public_repos: data.public_repos,
                    avatar_url: data.avatar_url
                }
            }));

            setHasUser(true);
        }).finally(() => {
            setGithubState(prevState => ({
                ...prevState,
                loading: !prevState
            }));
        })
    }
   
    const getUserRepos = async (userName: string) => {
        await api.get<RepositoriesStarred[]>(`users/${userName}/repos`).then(({data}) => {
           setRepositories(data);
        });
    }

    const getUserStarred = async (userName: string) => {
        await api.get<RepositoriesStarred[]>(`users/${userName}/starred`).then(({data}) => {
           setStarred(data);
        });
    }

    useEffect(() => {
        async function getData(){
            await getUserRepos(githubState.user.login);
            await getUserStarred(githubState.user.login);
        }

        if(!!githubState.user.login){
           getData();
        }    
    }, [githubState.user.login])


    return (
        <GithubContext.Provider value={{getUser, githubState, hasUser, repositories, starred}} >{children}</GithubContext.Provider>
    );
}