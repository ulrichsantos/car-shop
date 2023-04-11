import { HomeContainer, HomeInfo, ZeroCar, ZeroCarContainer } from './styles'
import BannerIMG from '../../assets/Home/banner-jeep.jpg'
import zeroCar from '../../assets/Home/compass-4xe.jpg'

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
          <button>ZERO KMS (COLOCAR UM BOTAO PARA IR ATÉ OS ZERO)</button>
        </ZeroCar>

        <img src={zeroCar} alt="" />
      </ZeroCarContainer>
    </HomeContainer>
  )
}
