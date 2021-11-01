import { useContext } from "react"
import { GithubContext } from "../context/github.provider"


export const useGithub = () => {

    const {githubState, getUser } = useContext(GithubContext);
    console.log(githubState)
    
    return { githubState, getUser };
}