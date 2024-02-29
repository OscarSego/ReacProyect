import React, { useState, useEffect } from 'react';

const Body = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(); // Llamada a la función para obtener los datos de la API al cargar el componente
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.disneyapi.dev/character');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const jsonData = await response.json();
      setData(jsonData.data);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div className="container mx-auto text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tabla de Datos</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Películas</th>
            <th className="px-4 py-2">Imagen</th>
          </tr>
        </thead>
        <tbody>
          {data.map((character) => (
            <tr key={character.id}>
              <td className="border px-4 py-2">{character.name}</td>
              <td className="border px-4 py-2">{character.films.join(', ')}</td>
              <td className="border px-4 py-2">
                <img src={character.imageUrl} alt={character.name} className="w-24 h-24" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Body;
