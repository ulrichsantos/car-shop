import { NavLink } from 'react-router-dom'
import { Contact, HeaderContainer, HeaderIcons } from './styles'
import { Jeep } from 'phosphor-react'
import { WhatsappLogo } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <Jeep size={40} />
      </NavLink>

      <HeaderIcons>
        <NavLink to="/zeroKm">
          <p>NOVOS</p>
        </NavLink>
        <NavLink to="/semiNovos">
          <p>SEMINOVOS</p>
        </NavLink>
        <NavLink to="/financiamento">
          <p>FINANCIAMENTO</p>
        </NavLink>
        <NavLink to="/servicos">
          <p>SERVIÇOS</p>
        </NavLink>
        <NavLink to="/contato">
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
