import React from "react";
import { Menu } from "../menu/Menu";
import { IconListHeader } from "../../../../components/iconListHeader/IconListHeader";
import { S } from "../HeaderMenu_Styles";



export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <span></span>
            <Menu />
            <IconListHeader />
        </S.DesktopMenu>
    )
}