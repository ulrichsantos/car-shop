import { AdmButton, ContactContainer } from './styles'
import contact from '../../assets/Contact/fundo-contato.jpg'
import { NavLink } from 'react-router-dom'

export function ContactPage() {
  return (
    <ContactContainer>
      <img src={contact} />

      <h1>Informações de contato</h1>
      <strong>
        Administrativo: (19) 3744-4400 <br /> Vendas: (19) 3744-4400 <br />{' '}
        Serviços: (19) 3829-8893
      </strong>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.606293737134!2d-47.07184702349504!3d-22.927888079240283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8cfdcfc4c73%3A0xcb36370d7c3744ef!2sJeep%20Europamotors!5e0!3m2!1spt-BR!2sbr!4v1681930179802!5m2!1spt-BR!2sbr"
        width="1480"
        height="780"
        loading="lazy"
      ></iframe>

      <AdmButton>
        <NavLink to="/admin">Acesso administrativo</NavLink>
      </AdmButton>
    </ContactContainer>
  )
}
