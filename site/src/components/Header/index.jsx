import React from "react";
import LogoImg from "../../assets/logo.png";
import { Container, Logo, Menu} from "./styles";



const Header = () => {
    return (
        <Container>
            <Logo>
                <img src={LogoImg} alt="EcoTask" />
            </Logo>
            <Menu>
                <ul>
                    <li><span>sign up</span></li>
                    <li><span>sign in</span></li>
                </ul>
            </Menu>
        </Container>
    )
}

export default Header;