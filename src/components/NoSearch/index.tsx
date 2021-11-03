import * as S from './styled';
import { MdOutlineSearchOff } from 'react-icons/all';

export const NoSearch = () => {


    return (
        <S.Wrapper>
            <h1><MdOutlineSearchOff /> Nenhum usuário pesquisado ainda!</h1>
        </S.Wrapper>
    );
}