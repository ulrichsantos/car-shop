import { ContactContainer } from "./styles";
import contact from '../../assets/Contact/fundo-contato.jpg'

export function ContactPage() {
  return (
    <ContactContainer>
      <h1>Contato</h1>

      <img src={contact} />
    </ContactContainer>
  )
}