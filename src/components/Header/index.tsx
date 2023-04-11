import { NavLink } from 'react-router-dom'
import { Contact, HeaderContainer, HeaderIcons } from './styles'
import { Jeep } from 'phosphor-react'
import { WhatsappLogo } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
        <Jeep size={40} />

      <HeaderIcons>
        <NavLink to="/#">
          <p>NOVOS</p>
        </NavLink>
        <NavLink to="/#">
          <p>SEMINOVOS</p>
        </NavLink>
        <NavLink to="/#">
          <p>FINANCIAMENTO</p>
        </NavLink>
        <NavLink to="/#">
          <p>SERVIÇOS</p>
        </NavLink>
        <NavLink to="/#">
          <p>CONTATO</p>
        </NavLink>
      </HeaderIcons>

      <Contact>
        <button>
          <WhatsappLogo size={40} />
        </button>
      </Contact>
    </HeaderContainer>
  )
}
