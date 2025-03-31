import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { TimelineHorizon } from "../../../components/timeline/TimelineHorizon";
import { TimelineVertical } from "../../../components/timeline/TimelineVertical";

export const Experience = () => {
    return (
        <StyledExperience>
            <Container>
                <SectionTitle>Experience</SectionTitle>
                <TimelineHorizon />
                <TimelineVertical />
            </Container>
        </StyledExperience>
    )
}

const StyledExperience = styled.section`
    
`