
import * as S from './styled.js';

export const Profile = () => {

    return(
        <S.Wrapper>
            <S.WrapperInfoUser>
                <S.WrapperImage src="https://avatars.githubusercontent.com/u/71531287?v=4" alt="Avatar of user" />
                <div>
                    <h1>José Jonathan</h1>
                    <S.WrapperUserName>
                    <h3>userName: </h3>
                    <span>josejonathan7</span>
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