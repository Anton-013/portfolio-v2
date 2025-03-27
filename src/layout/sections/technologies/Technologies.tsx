import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "../../../components/skill/Skill";
import { SectionProgress } from "../../../components/sectionProgress/SectionProgress";


export const Technologies = () => {
    return (
        <StyledTechnologies>
            <Container>
                <SectionTitle>Technologies</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>                    
                    <SectionProgress />
                    <Text>Additional technologies and skills</Text>
                    <FlexWrapper columnGap={"50px"}>
                        <Icon iconId={"skillGit"} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                        <Icon iconId={"slillGitHub"} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                        <Icon iconId={"skillFigma"} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledTechnologies>
    )
}

const StyledTechnologies = styled.section`
    background-color: grey;
`



const Image = styled.img`
    width: 900px;
    height: 300px;
`

const Text = styled.h3`
    font-weight: 600;
    font-size: 44px;
    line-height: 100%;
    letter-spacing: 0%;

    margin-top: 140px;
    margin-bottom: 70px;
`