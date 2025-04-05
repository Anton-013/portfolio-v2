import React, { useState } from "react";
import { S } from "../HeaderMenu_Styles";
import { IconList } from "../../../../components/iconList/IconList";

export const MobileMenu: React.FC = () => {

    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => { setmenuIsOpen( !menuIsOpen ) }

    return (
        <S.MobileMenu>

            <S.BurgerButton isOpen={menuIsOpen} onClick={ onBurgerBtnClick }>
                <span></span>
            </S.BurgerButton>

            <S.Popup isOpen={menuIsOpen} onClick={ () => { setmenuIsOpen(false) } }>
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

