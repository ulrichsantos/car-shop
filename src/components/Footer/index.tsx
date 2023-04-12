import { FooterContainer, FooterIcons } from "./styles";
import { InstagramLogo, FacebookLogo, WhatsappLogo } from "phosphor-react";

export function Footer() {
  return (
    <FooterContainer>
      <h1>Shop Car</h1>

      <FooterIcons>
        <InstagramLogo size={33}/>
        <FacebookLogo size={33}/>
        <WhatsappLogo size={33}/>
      </FooterIcons>

      <p>© Copyright 2023 - Shop Car - Todos os direitos reservados. Politica de privacidade.</p>
    </FooterContainer>
  )
}