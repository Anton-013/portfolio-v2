import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionProgress } from "../../../components/sectionProgress/SectionProgress";
import { Icon } from "../../../components/icon/Icon";
import { S } from "./Technologies_Styles";


export const Technologies: React.FC = () => {
    return (
        <S.Technologies>
            <Container>
                <SectionTitle>Technologies</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>                    
                    <SectionProgress />
                    <S.Text>Additional technologies and skills</S.Text>
                    <S.IconListTech>
                        <Icon iconId={"skillGit"} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                        <Icon iconId={"slillGitHub"} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                        <Icon iconId={"skillFigma"} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                    </S.IconListTech>
                </FlexWrapper>
            </Container>
        </S.Technologies>
    )
}

