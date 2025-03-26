import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { Timeline } from "../../../components/timeline/Timeline";

export const Experience = () => {
    return (
        <StyledExperience>
            <Container>
                <SectionTitle>Experience</SectionTitle>
                <Timeline />
            </Container>
        </StyledExperience>
    )
}

const StyledExperience = styled.section`
    
`