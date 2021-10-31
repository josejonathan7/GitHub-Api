import { useGithub } from '../../hooks/githubHooks';
import * as S from './styled.js';

export const Profile = () => {
    const { githubState } = useGithub();

    return(
        <S.Wrapper>    
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/71531287?v=4" alt="Avatar of user" />
            <S.WrapperInfoUser>
                <div>
                    <h1>{githubState}</h1>
                    <S.WrapperUserName>
                        <h3>userName: </h3>
                        <a href="https://github.com/josejonathan7" target='_blank' rel='noreferrer'>jose jonathan</a>
                    </S.WrapperUserName>
                </div>
            
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Starreds</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>5</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}