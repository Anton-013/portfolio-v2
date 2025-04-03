import React from "react";
import { S } from "./Timeline_Styles";
import { timelineData } from "../../layout/sections/experience/Experience";



export const TimelineVertical: React.FC = () => {
    return (
        <S.TimelineVertical>

            {timelineData.map((t, index) => {
                return (
                    <S.ContainerHorizon key={index}>
                        <S.ContentHorizon>
                            <S.ContentTitleHorizon>{t.Title}</S.ContentTitleHorizon>
                            <S.TextHorizon>{t.text}</S.TextHorizon>
                        </S.ContentHorizon>
                    </S.ContainerHorizon>
                )
            })}


        </S.TimelineVertical>
    )
}

