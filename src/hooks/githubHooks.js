import { useContext } from "react"
import { GithubContext } from "../context/github.provider"


export const useGithub = () => {

    const {githubState} = useContext(GithubContext);

    return {githubState};
}