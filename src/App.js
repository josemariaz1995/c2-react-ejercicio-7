import { useRef, useState } from "react";
import { personajesDatos } from "./data/personajes";
import { Tarjeta } from "./components/Tarjeta";
import { Crear } from "./components/Crear";
const App = () => {
  const [personajes, setPersonajes] = useState(personajesDatos);

  const [ultimaID, setUltimaID] = useState(0);
  const ids = useRef(null);
  ids.current = personajes[personajes.length - 1].id + 1;
  const [mostrar, setMostrar] = useState(false);
  const [crear, setCrear] = useState({
    id: ids.current,
    name: "",
    location: {
      name: "",
    },
    species: "",
  });
  const actualizar = (e, nombre, localizacion, especie, imagen) => {
    e.preventDefault();
    setCrear((crear) => {
      return {
        ...crear,
        id: ids.current,
        name: nombre,
        location: {
          name: localizacion,
        },
        species: especie,
        image: imagen,
      };
    });

    setPersonajes([...personajes, { ...crear }]);
  };
  const eliminarPersonaje = (id) => {
    setPersonajes(personajes.filter((personaje) => personaje.id !== id));
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
          {mostrar && (
            <Crear
              actualizar={actualizar}
              setMostrar={setMostrar}
              mostrar={mostrar}
            />
          )}
        </div>
        <h1>Rick y Morty</h1>
      </header>
      <main className="container position-relative container-general mb-5">
        <ul className="row justify-content-between">
          {personajes !== [""] &&
            personajes.map((personaje) => (
              <Tarjeta
                key={personaje.id}
                eliminarPersonaje={eliminarPersonaje}
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
