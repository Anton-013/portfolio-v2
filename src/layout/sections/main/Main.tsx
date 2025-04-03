import React from "react";
import photo from "../../../assets/imeges/photo.jpeg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
    return (
        <S.Main>

            <Container>
                <FlexWrapper justify={"space-around"} align={"center"} columnGap={"40px"} rowGap={"50px"} wrap={"wrap-reverse"}>

                    <S.BlockText>
                        <S.MainTitle>Lorem ipsum dolor amet</S.MainTitle>
                        <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </S.Text>
                        <Button>Let’s Begin</Button>
                    </S.BlockText>

                    <S.PhotoBorder>
                        <S.Photo src={photo} alt="Photo" />
                    </S.PhotoBorder>

                </FlexWrapper>
            </Container>
            
        </S.Main>
    )
}
