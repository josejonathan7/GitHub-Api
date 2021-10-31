import * as S from './styled';
import { RepositorieItem } from '../';

export const Repositories = () => {


    return (
        <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositorieItem
                    linkToRepo="https://github.com/josejonathan7/-semana-javascript-expert05"
                    name="-semana-javascript-expert05"
                    fullName="josejonathan7/-semana-javascript-expert05"
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositorieItem
                    linkToRepo="https://github.com/josejonathan7/Agenda-Atividade-Etec"
                    name="Agenda-Atividade-Etec"
                    fullName="josejonathan7/Agenda-Atividade-Etec"
                />
            </S.WrapperTabPanel>

        </S.WrapperTabs>
    );
}