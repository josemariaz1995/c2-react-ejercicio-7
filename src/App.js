import { useCallback, useEffect, useRef, useState } from "react";
import { Tarjeta } from "./components/Tarjeta";
import { Crear } from "./components/Crear";
import { Slider } from "./components/Slider";
import { PersonajeContext } from "./context/PersonajeContext";
import { GrPrevious, GrNext } from "react-icons/gr";

const App = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [personajes, setPersonajes] = useState([]);
  const [paginas, setPaginas] = useState(0);
  const [numero, setNumero] = useState(0);
  const urlApi = `https://rickandmortyapi.com/api/character?page=${paginas}`;
  const ids = useRef(null);
  const [mostrar, setMostrar] = useState(false);
  const siguiente = () => {
    if (array[array.length - 1] === numero) {
      return;
    } else {
      setArray(array.map((numero) => numero + 1));
    }
  };
  const atras = () => {
    if (array[0] === 1) {
      return;
    } else {
      setArray(array.map((numero) => numero - 1));
    }
  };

  const llamadaApi = useCallback(async (urlApi) => {
    const response = await fetch(urlApi);
    const personajesApi = await response.json();
    setPersonajes(personajesApi.results);
    setNumero(personajesApi.info.pages);
  }, []);
  useEffect(() => {
    llamadaApi(urlApi);
  }, [llamadaApi, urlApi]);

  const actualizar = (e, nombre, localizacion, especie, imagen) => {
    e.preventDefault();
    ids.current =
      personajes !== [] ? personajes[personajes.length - 1].id + 1 : 0;
    setPersonajes([
      ...personajes,
      {
        id: ids.current,
        name: nombre,
        location: {
          name: localizacion,
        },
        species: especie,
        image: imagen,
      },
    ]);
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
      <header className="cabecera vw-100 bg-dark p-3 p-lg-5 text-white border-bottom shadow-lg ">
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
        <h1 className="text-right">Rick y Morty</h1>
      </header>

      <PersonajeContext.Provider value={{ personajes }}>
        <main className="container-fluid position-relative container-general mb-2">
          <ul className="row tarjetas">
            {personajes !== [] &&
              personajes.map((personaje) => (
                <Tarjeta
                  key={personaje.id}
                  eliminarPersonaje={eliminarPersonaje}
                  personaje={personaje}
                  modificarPersonaje={modificarPersonaje}
                />
              ))}
          </ul>
          <div className="justify-content-center align-items-center d-flex mt-4">
            <ul className="row d-flex slider text-center ">
              <li className="col btn-info" onClick={atras}>
                <GrPrevious />
              </li>
              {array.map((numero, i) => (
                <Slider key={i} setPaginas={setPaginas} numero={numero} />
              ))}
              <li className="col btn-info" onClick={siguiente}>
                <GrNext />
              </li>
            </ul>
          </div>
        </main>
      </PersonajeContext.Provider>
    </>
  );
};

export default App;
