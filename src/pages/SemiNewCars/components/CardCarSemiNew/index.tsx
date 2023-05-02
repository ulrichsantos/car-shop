import { CardCarSemiNewContainer, CardCarSemiNewInfos } from './style'
import l200 from '../../../../assets/SemiNew/l200.jpg'
import { Carro } from '../..'

interface CardCarSemiNewProps {
  carro: Carro
}


export function CardCarSemiNew( props : CardCarSemiNewProps) {
  return (
    <CardCarSemiNewContainer>
      <img src={l200} />

      <div className='wrapper'>
        <h3>{props.carro.marca.toUpperCase()}</h3>
        <span>{props.carro.modelo.toUpperCase()}</span>

        <CardCarSemiNewInfos>
          <p>{props.carro.anoModelo}</p>
          <p>265.227 km</p>
        </CardCarSemiNewInfos>

        <h2>por R$ {props.carro.valor}</h2>
      </div>
    </CardCarSemiNewContainer>
  )
}
