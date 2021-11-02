import { createContext, useCallback, useState } from 'react';
import { api } from '../services/api';

interface User {
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

interface Repositories {
    id: string;
    name: string;
    full_name: string;
    url: string;
}

interface GitDataType {
    loading: boolean,
    user: User;
    repositories: Repositories[],
    starred: []
}

interface ContextType {
    githubState: GitDataType;
    getUser?: (userName: string) => any; 
    hasUser: boolean;
    getUserRepos?: () => any;
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
        },
        repositories: [
           {
            id: '',
            name: '',
            full_name: '',
            url: ''
           }
        ],
        starred: []
    });
    const [ hasUser, setHasUser ] = useState(false);

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

    
    const getUserRepos = () => {

        /*api.get<Repositories[]>(`users/${githubState.user.login}/repos`).then(({data}) => {
            console.log(data)
            setGithubState(prevState => ({
                ...prevState,
                repositories: data
            }));

        });*/
    }

    return (
        <GithubContext.Provider value={{getUser, githubState, hasUser, getUserRepos}} >{children}</GithubContext.Provider>
    );
}