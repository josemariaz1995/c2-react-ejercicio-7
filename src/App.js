import { useState } from "react";
import { personajesDatos } from "./data/personajes";
import { Tarjeta } from "./components/Tarjeta";
import { Crear } from "./components/Crear";
const App = () => {
  const [personajes, setPersonajes] = useState(personajesDatos);
  const ultimaID = personajes[personajes.length - 1].id + 1;
  /*  , setUltimaID] = useState(
    personajes[personajes.length - 1].id + 1
  ); */ /* 

  console.log(ultimaID); */
  const [mostrar, setMostrar] = useState(false);
  const [crear, setCrear] = useState({
    id: ultimaID,
    name: "",
    location: {
      name: "",
    },
    species: "",
  });
  const actualizar = (nombre, localizacion, especie, imagen) => {
    setCrear({
      ...crear,
      name: nombre,
      location: {
        name: localizacion,
      },
      species: especie,
      image: imagen,
    });
    setPersonajes({ ...crear });
  };
  const modificarPersonaje = (id, nombre, especie, localizacion) => {
    setPersonajes((personaje) => {
      return personaje.map((datos) => {
        if (id === datos.id) {
          return {
            ...datos,
            id,
            name: nombre,
            location: {
              ...datos.location,
              name: localizacion,
            },
            species: especie,
          };
        } else {
          return datos;
        }
      });
    });
  };
  return (
    <>
      <header className="vw-100 bg-dark p-5 text-white d-flex justify-content-between align-items-center position-fixed border-bottom shadow-lg cabecera">
        <div className="postion-realtive">
          <button className="btn btn-info" onClick={() => setMostrar(!mostrar)}>
            Crear Personaje
          </button>
          {mostrar && <Crear actualizar={actualizar} />}
        </div>
        <h1>Rick y Morty</h1>
      </header>
      <main className="container position-relative container-general mb-5">
        <ul className="row justify-content-between">
          {personajes.map((personaje) => (
            <Tarjeta
              key={personaje.id}
              personaje={personaje}
              modificarPersonaje={modificarPersonaje}
            />
          ))}
        </ul>
      </main>
    </>
  );
};

export default App;
