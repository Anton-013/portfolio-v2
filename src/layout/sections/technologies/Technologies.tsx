import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionProgress } from "../../../components/sectionProgress/SectionProgress";
import { Icon } from "../../../components/icon/Icon";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";


export const Technologies = () => {
    return (
        <StyledTechnologies>
            <Container>
                <SectionTitle>Technologies</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>                    
                    <SectionProgress />
                    <Text>Additional technologies and skills</Text>
                    <IconListTech>
                        <Icon iconId={"skillGit"} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                        <Icon iconId={"slillGitHub"} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                        <Icon iconId={"skillFigma"} width={"100"} height={"100"} viewBox={"0 0 100 100"} />
                    </IconListTech>
                </FlexWrapper>
            </Container>
        </StyledTechnologies>
    )
}

const StyledTechnologies = styled.section`

`


const Text = styled.h3`
    ${font({weight: 600, Fmax: 44, Fmin: 27})}
    line-height: 100%;
    letter-spacing: 0%;

    margin-top: 120px;
    margin-bottom: 70px;

    @media ${theme.media.tablet} {
        margin-top: 85px;
        margin-bottom: 40px;
    }
`

const IconListTech = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    width: 100%;

    @media ${theme.media.mobile} {
        scale: 0.6;
    }
`