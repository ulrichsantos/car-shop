import { CardCarSemiNewContainer, CardCarSemiNewInfos } from './style'
import l200 from '../../../../assets/SemiNew/l200.jpg'

export function CardCarSemiNew() {
  return (
    <CardCarSemiNewContainer>
      <img src={l200} />

      <div className='wrapper'>
        <h3>MITSUBISHI</h3>
        <span>L200 Triton Sport HPE</span>

        <CardCarSemiNewInfos>
          <p>2017/2018</p>
          <p>265.227 km</p>
        </CardCarSemiNewInfos>

        <h2>por R$ 149.990,00</h2>
      </div>
    </CardCarSemiNewContainer>
  )
}
