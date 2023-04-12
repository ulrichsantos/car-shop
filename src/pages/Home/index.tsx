import { ButtonTest, HomeContainer, HomeInfo, SemiNew, SemiNewContainer, ZeroCar, ZeroCarContainer } from './styles'
import BannerIMG from '../../assets/Home/banner-jeep.jpg'
import zeroCar from '../../assets/Home/compass-4xe.jpg'
import semiNew from '../../assets/Home/seminovo-jeep.jpg'
import { NavLink } from 'react-router-dom'


export function HomePage() {
  return (
    <HomeContainer>
      <img src={BannerIMG} alt="" />

      <HomeInfo>
        <p>Performance</p>
        <p>Tecnologia</p>
        <p>Design</p>
        <p>Conforto</p>
        <p>Segurança</p>
      </HomeInfo>

      <ZeroCarContainer>
        <ZeroCar>
          <h2>Conheça todos os nossos modelos</h2>
          <p>Os modelos Jeep contam com o badge Trail Rated devido a sua emblemática capacidade off-road, que atende a cinco importantes exigências Jeep: tração, distância do solo, articulação, manobrabilidade e capacidade de submersão.</p>
          <NavLink to="/zeroKm">
            <ButtonTest>
              Ir para veículos zero KM
            </ButtonTest>
          </NavLink>
          
        </ZeroCar>

        <img src={zeroCar} alt="" />
      </ZeroCarContainer>

      <SemiNewContainer>
        <img src={semiNew} alt="" />

        <SemiNew>
          <h2>Linha de Seminovos Premium</h2>
          <p>Adquirir um carro seminovo pode ser a escolha certa para quem busca um veículo em bom estado, porém com um valor mais acessível. Confira nossa seleção de seminovos de qualidade e faça o negócio dos seus sonhos.</p>

          <NavLink to="/semiNovos">
            <ButtonTest>
              Ir para veículos Seminovos
            </ButtonTest>
          </NavLink>
        </SemiNew>
      </SemiNewContainer>
    </HomeContainer>
  )
}
