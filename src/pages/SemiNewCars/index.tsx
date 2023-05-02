import { useEffect, useState } from 'react';
import { CardCarSemiNew } from './components/CardCarSemiNew'
import { SemiNewCarsContainer, SemiNewCarsFilters } from './styles'
import axios from 'axios';

export interface Carro {
  valor: number;
  marca: string;
  modelo: string;
  anoModelo: number;
  combustivel: string;
  codigoFipe: string;
  mesReferencia: string;
  tipoVeiculo: number;
  siglaCombustivel: string;
  dataConsulta: Date;
}

export function SemiNewCarsPage() {
  const [carroInfo, setCarroInfo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/carros')
    .then(response => {
      setCarroInfo(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

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
        {carroInfo.map((carro: Carro, index: number) => (
          <CardCarSemiNew key={index} carro={carro}/>
        ))}
      </div>
    </SemiNewCarsContainer>
  )
}
