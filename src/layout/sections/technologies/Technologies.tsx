import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionProgress } from "../../../components/sectionProgress/SectionProgress";
import { Icon } from "../../../components/icon/Icon";
import { S } from "./Technologies_Styles";
import { Fade } from "react-awesome-reveal";


export const Technologies: React.FC = () => {
    return (
        <S.Technologies id={"technologies"}>
            <Container>
                <SectionTitle>Technologies</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionProgress />
                    <S.Text>Additional technologies and skills</S.Text>
                    <S.IconListTech>
                        <Fade cascade>
                            <Icon iconId={"skillGit"} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                            <Icon iconId={"slillGitHub"} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                            <Icon iconId={"skillFigma"} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                        </Fade>
                    </S.IconListTech>
                </FlexWrapper>
            </Container>
        </S.Technologies>
    )
}

