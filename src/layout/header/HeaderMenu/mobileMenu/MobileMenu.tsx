import React from "react";
import { S } from "../HeaderMenu_Styles";
import { IconList } from "../../../../components/iconList/IconList";

export const MobileMenu: React.FC = () => {
    return (
        <S.MobileMenu>

            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>

            <S.Popup isOpen={false}>
                <ul>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Technologies</a>
                    </li>
                    <li>
                        <a href="">About me</a>
                    </li>
                </ul>
                <IconList />
            </S.Popup>
        </S.MobileMenu>
    )
}

