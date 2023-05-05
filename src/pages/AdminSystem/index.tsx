import { useState } from 'react';
import { AdminSystemContainer } from "./style";

interface Carro {
  valor: number;
  marca: string;
  modelo: string;
  anoModelo: number;
  combustivel: string;
  codigoFipe: number;
  kilometragem: number;
  imagens: FileList | null;
}

export function AdminSystemPage() {
  const [formValues, setFormValues] = useState<Carro>({
    valor: 0,
    marca: '',
    modelo: '',
    anoModelo: 0,
    combustivel: '',
    codigoFipe: 0,
    kilometragem: 0,
    imagens: null
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    setFormValues({
      ...formValues,
      [name]: files
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
  };

  return (
    <AdminSystemContainer>
      <h1>Adicione um veículo ao seu estoque</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="marca">Marca:</label>
        <input type="text" id="marca" name="marca" placeholder='Jeep' value={formValues.marca} onChange={handleInputChange} />

        <label htmlFor="modelo">Modelo:</label>
        <input type="text" id="modelo" name="modelo" placeholder='Compass' value={formValues.modelo} onChange={handleInputChange} />

        <label htmlFor="ano">Ano:</label>
        <input type="number" id="ano" name="ano" placeholder='2020/2021' value={formValues.anoModelo} onChange={handleInputChange} />

        <label htmlFor="combustivel">Combustível:</label>
        <select id="combustivel" name="combustivel" value={formValues.combustivel} onChange={handleInputChange}>
          <option value="flex">Flex</option>
          <option value="gasolina">Gasolina</option>
          <option value="etanol">Etanol</option>
          <option value="diesel">Diesel</option>
          <option value="hibrido">Híbrido</option>
          <option value="eletrico">Elétrico</option>
        </select>

        <label htmlFor="codigoFipe">Código FIPE:</label>
        <input type="number" id="codigoFipe" name="codigoFipe" value={formValues.codigoFipe} onChange={handleInputChange} />

        <label htmlFor="quilometragem">Quilometragem:</label>
        <input type="number" id="quilometragem" name="quilometragem" value={formValues.kilometragem} onChange={handleInputChange} />

        <label htmlFor="valor">Valor R$: </label>
        <input type="number" id="valor" name="valor" value={formValues.valor} onChange={handleInputChange} />

        <label htmlFor="imagens">Imagens:</label>
        <input type="file" id="imagens" name="imagens" onChange={handleFileInputChange} multiple />

        <button type="submit">Adicionar Veículo</button>
      </form>
    </AdminSystemContainer>
  )
}
