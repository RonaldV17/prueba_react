import React, { useState, useEffect } from 'react';

function MiApi() {
  const [medications, setMedications] = useState([]);
  const [filteredMedications, setFilteredMedications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://med-api.com/api/medications')
      .then(response => response.json())
      .then(data => setMedications(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const filtered = medications.filter(medication =>
      medication['nombre-medicamento'].toLowerCase().includes(searchTerm.toLowerCase())
    );
    const sorted = filtered.sort((a, b) => b['valor-unidad-por-caja'] - a['valor-unidad-por-caja']);
    setFilteredMedications(sorted);
  }, [medications, searchTerm]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div>
        <div class="list">
            <h1>Busca tu medicamento</h1>
        </div>
      <div class="search">
        <input type="text" value={searchTerm} onChange={handleSearch} />
        <button onClick={handleClearSearch}>Limpiar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre de medicamento</th>
            <th>Bioequivalente</th>
            <th>Valor unidad por caja</th>
          </tr>
        </thead>
        <tbody>
          {filteredMedications.map(medication => (
            <tr key={medication._id}>
              <td>{medication['nombre-medicamento']}</td>
              <td>{medication.bioequivalencia}</td>
              <td>{medication['valor-unidad-por-caja']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MiApi;
