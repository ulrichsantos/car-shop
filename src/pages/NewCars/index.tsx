import { NewCarContainer, NewCarsWrapper } from './styles'
import bannerTop from '../../assets/ZeroKM/banner-top.jpg'
import { CardCar } from './components/CardCar'

export function NewCarsPage() {
  return (
    <NewCarContainer>
      <img src={bannerTop} alt="" />

      <NewCarsWrapper>
        <div>
          <h1>LINHA JEEP</h1>
          <p>Clique e saiba sobre os modelos</p>
        </div>

        <div className='container'>
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
        </div>
      </NewCarsWrapper>
    </NewCarContainer>
  )
}
