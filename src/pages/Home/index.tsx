import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore, { Navigation, Pagination } from 'swiper'

import BannerIMG from '../../assets/Home/banner-jeep.jpg'
import BannerIMG2 from '../../assets/Home/banner-jeep2.jpg'
import BannerIMG3 from '../../assets/Home/banner-jeep3.jpg'
import BannerIMG4 from '../../assets/Home/banner-jeep4.jpg'
import BannerIMG5 from '../../assets/Home/banner-jeep5.jpg'

import {
  ButtonTest,
  HomeContainer,
  HomeInfo,
  SemiNew,
  SemiNewContainer,
  ZeroCar,
  ZeroCarContainer
} from './styles'
import zeroCar from '../../assets/Home/compass-4xe.jpg'
import semiNew from '../../assets/Home/seminovo-jeep.jpg'
import styled from 'styled-components'

const HomeSlider = styled(SwiperSlide)`
  .swiper-button-prev,
  .swiper-button-next {
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors['base-blue-dark']};
    color: black;
    padding: 2rem;
    transition: .3s;
    margin-inline: 2rem;

    :hover {
      background: ${({theme}) => theme.colors['base-blue']};
    }
  }

  .swiper-pagination {
    padding-bottom: 1rem;
  }

  .swiper-pagination-bullet {
    background-color: ${({theme}) => theme.colors["base-orange"]};
    padding: 0.5rem;
  }

  img {
    width: 100%;
  }
`

export function HomePage() {
  const slides = [BannerIMG, BannerIMG2, BannerIMG3, BannerIMG4, BannerIMG5]

  return (
    <HomeContainer>
      <HomeSlider>
        <Swiper modules={[Navigation, Pagination]} navigation pagination loop>
          {slides.map(slide => (
            <SwiperSlide>
              <img src={slide} alt={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </HomeSlider>

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
          <p>
            Os modelos Jeep contam com o badge Trail Rated devido a sua
            emblemática capacidade off-road, que atende a cinco importantes
            exigências Jeep: tração, distância do solo, articulação,
            manobrabilidade e capacidade de submersão.
          </p>
          <NavLink to="/zeroKm">
            <ButtonTest>Ir para veículos zero KM</ButtonTest>
          </NavLink>
        </ZeroCar>

        <img src={zeroCar} alt="" />
      </ZeroCarContainer>

      <SemiNewContainer>
        <img src={semiNew} alt="" />

        <SemiNew>
          <h2>Linha de Seminovos Premium</h2>
          <p>
            Adquirir um carro seminovo pode ser a escolha certa para quem busca
            um veículo em bom estado, porém com um valor mais acessível. Confira
            nossa seleção de seminovos de qualidade e faça o negócio dos seus
            sonhos.
          </p>

          <NavLink to="/semiNovos">
            <ButtonTest>Ir para veículos Seminovos</ButtonTest>
          </NavLink>
        </SemiNew>
      </SemiNewContainer>
    </HomeContainer>
  )
}
