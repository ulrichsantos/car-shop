import { FinancingForm, FinancingSection, FinancingTitle } from './styles'
import FinancingIMG from '../../assets/Financing/financiamento.jpg'

export function FinancingPage() {
  return (
    <FinancingSection className="container">
      <FinancingTitle>
        <img src={FinancingIMG} />
        <h1>
          Financie conosco, o melhor caminho para você chegar mais próximo do
          seu sonho!
        </h1>
      </FinancingTitle>

      <FinancingForm>
        <h1>Preencha seus dados aqui</h1>
        <form>
            <p>Dados da CNH</p>
            <input type="text" placeholder='Nome completo'/>
            <input type="number" placeholder='CPF'/>
            <input type="number" placeholder='Celular com DDD'/>
            <input type="date" placeholder='Data de nascimento'/>
            <input type="text" placeholder='Nome da mãe'/>

            <p>Dados de residência</p>
            <input type="number" placeholder='CEP'/>
            <input type="text" placeholder='Rua'/>
            <input type="number" placeholder='Número'/>
            <input type="text" placeholder='Bairro'/>
            <input type="text" placeholder='Cidade/Estado'/>

            <p>Dados Profissionais</p>
            <input type="text" placeholder='Profissão'/>
            <input type="text" placeholder='Empresa onde trabalha'/>
            <input type="number" placeholder='CEP'/>
            <input type="text" placeholder='Endereço'/>
            <input type="number" placeholder='Renda R$'/>

            <input type="submit" value="Enviar Dados" />
        </form>
      </FinancingForm>
    </FinancingSection>
  )
}
