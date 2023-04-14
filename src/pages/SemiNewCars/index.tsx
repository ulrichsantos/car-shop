import { SemiNewCarsContainer, SemiNewCarsFilters } from './styles'
import { Car } from 'phosphor-react'

export function SemiNewCarsPage() {
  return (
    <SemiNewCarsContainer>
      <SemiNewCarsFilters>
        <div>
          <h3>{<Car />} Encontre seu veículo</h3>
          <input type="text" value="O que está procurando?" />
          <input type="submit" value="Buscar" />
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
            <input type="number" placeholder="de R$" />
            <input type="number" placeholder="até R$" />
            <input type="submit" value="Encontrar Veículo"/>
          </div>
        </form>
      </SemiNewCarsFilters>
    </SemiNewCarsContainer>
  )
}
