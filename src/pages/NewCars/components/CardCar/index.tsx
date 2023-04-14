import { CardCarContainer } from "./styles";
import jeepCar from '../../../../assets/ZeroKM/profile.png'

export function CardCar() {
  return (
    <CardCarContainer>
      <img src={jeepCar} />
      
      <h1>COMPASS</h1>
      <span>A partir de</span>
      <p>R$: 179.990,99</p>
    </CardCarContainer>
  )
}