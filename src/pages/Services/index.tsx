import {
  ServicesContainer,
  ServicesInfoPiece,
  ServicesInfos,
  ServicesSchedule
} from './styles'
import banner from '../../assets/Services/banner.jpg'
import services1 from '../../assets/Services/services.jpg'
import services2 from '../../assets/Services/services-2.jpg'
import calendar from '../../assets/Services/calendar.jpg'

export function ServicesPage() {
  return (
    <ServicesContainer>
      <img src={banner} alt="" />

      <ServicesInfos>
        <h1>
          Aproveite os serviços de reparo e manutenção disponíveis na Shop Car
        </h1>
        <p>
          A concessionária Shop Car têm tudo que você precisa para garantir que
          você dirija por aí satisfeito, tranquilo e seguro com o seu veículo.
          Contamos com uma ampla oferta de serviços de manutenção e reparação
          para deixar seu carro sempre novo.
        </p>
        <p>
          Agende um horário para realizar a manutenção no seu veículo e fazer a
          revisão completa. Na revendedora Shop Car você acompanha todos os
          processos pessoalmente.
        </p>
        <p>
          Consulte-nos para descobrir como economizar sem abrir mão da
          qualidade. Conheça de perto os nossos serviços!
        </p>
      </ServicesInfos>

      <div className="wrapper">
        <ServicesInfoPiece>
          <img src={services2} alt="" />

          <h2>Clínica de Serviços</h2>
          <hr />

          <p>
            A Clínica de Serviços Shop Car é um evento que ocorre nas
            concessionárias e oficinas autorizadas, em que se oferecem
            benefícios diversificados aos clientes.
          </p>
          <p>
            Durante o evento, os veículos recebem um check-up de 60 itens e
            brindes. A clínica oferece ainda opções de entretenimento, tornando
            o ambiente da concessionária extremamente familiar, festivo e
            informal.
          </p>
          <p>
            A Clínica de Serviços Shop Car é um sucesso em todo o país,
            recebendo a impressionante média de 30 mil visitas por ano.
          </p>
        </ServicesInfoPiece>

        <ServicesInfoPiece>
          <img src={services1} alt="" />

          <h2>Revisão Shop Car</h2>
          <hr />

          <p>
            Atenção às necessidades do seu veículo, para mante-lo sempre novo.
          </p>
          <p>
            Para valorizar seu automóvel, manter a garantia de fábrica e o
            desempenho perfeito, é essencial fazer as revisões recomendadas pela
            montadora nos prazos indicados.
          </p>
          <p>
            A concessionária Shop Car tem o plano de manutenção adequado ao seu
            veículo, conforme manual do proprietário, acompanhando todas as
            recomendações dentro de checagem/substituições nos intervalos de
            10mil km ou 12 meses.
          </p>
        </ServicesInfoPiece>
      </div>

      <ServicesSchedule>
        <img src={calendar} alt="" />

        <div>
          <h2>Aproveite nossas condições e mantenha-se <br/> seguro no trânsito por mais tempo.</h2>
          <button>Agendar online</button>
        </div>
      </ServicesSchedule>
    </ServicesContainer>
  )
}
