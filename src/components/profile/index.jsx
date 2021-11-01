import { useGithub } from '../../hooks/githubHooks';
import * as S from './styled.js';

export const Profile = () => {
    const { githubState } = useGithub();

    return(
        <S.Wrapper>    
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/71531287?v=4" alt="Avatar of user" />
            <S.WrapperInfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUserName>
                        <h3>userName: </h3>
                        <a href={githubState.user.html_url} target='_blank' rel='noreferrer'>
                            {githubState.user.login}
                        </a>
                    </S.WrapperUserName>
                </div>
            
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}