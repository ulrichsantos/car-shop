import { CardCarSemiNew } from './components/CardCarSemiNew'
import { SemiNewCarsContainer, SemiNewCarsFilters } from './styles'

export function SemiNewCarsPage() {
  return (
    <SemiNewCarsContainer>
      <SemiNewCarsFilters>
        <div>
          <h3>Encontre seu veículo</h3>
          <input type="text" placeholder="O que está procurando?" />
          <button>Buscar</button>
        </div>
        <form>
          <div>
            <h3>Marcas</h3>
            <select>
              <option value="Selecione">Selecione</option>
              <option value="Ford">Ford</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
            </select>
          </div>
          <div>
            <h3>Valor</h3>
            <input className="value" type="number" placeholder="de R$" />
            <input className="value" type="number" placeholder="até R$" />
            <button>Encontrar veículo</button>
          </div>
        </form>
      </SemiNewCarsFilters>

      <div className="container">
        <CardCarSemiNew />
        <CardCarSemiNew />
        <CardCarSemiNew />
        <CardCarSemiNew />
        <CardCarSemiNew />
        <CardCarSemiNew />
      </div>
    </SemiNewCarsContainer>
  )
}
