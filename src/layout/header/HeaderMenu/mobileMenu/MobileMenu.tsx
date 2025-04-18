import React, { useState } from "react";
import { S } from "../HeaderMenu_Styles";
import { IconList } from "../../../../components/iconList/IconList";
import { Menu } from "../menu/Menu";

export const MobileMenu: React.FC = () => {

    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => { setmenuIsOpen( !menuIsOpen ) }

    return (
        <S.MobileMenu>

            <S.BurgerButton isOpen={menuIsOpen} onClick={ onBurgerBtnClick }>
                <span></span>
            </S.BurgerButton>

            <S.Popup isOpen={menuIsOpen} onClick={ () => { setmenuIsOpen(false) } }>
                <Menu />
                <IconList />
            </S.Popup>
        </S.MobileMenu>
    )
}

