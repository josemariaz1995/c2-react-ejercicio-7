import { useContext, useState } from "react";
import { PersonajeContext } from "../context/PersonajeContext";

export const Tarjeta = (props) => {
  const { personajes } = useContext(PersonajeContext);
  console.log(personajes);
  const {
    personaje: {
      image,
      id,
      name,
      location: { name: localizacion },
      species,
    },
    modificarPersonaje,
    eliminarPersonaje,
  } = props;
  const [nombre, setNombre] = useState(name);
  const [ubicacion, setUbicacion] = useState(localizacion);
  const [especie, setEspecie] = useState(species);
  return (
    <>
      <li className="col-12 col-lg-4 info">
        <img src={image} className="p-0" alt={name} />
        <div className="row align-items-center tarjeta  bg-dark shadow  position-relative ">
          <span
            onClick={() => eliminarPersonaje(id)}
            className="position-absolute eliminar"
          >
            x
          </span>

          <div className="col-sm-12 form-group">
            <div className="row align-items-center">
              <label className="col-4">Nombre:</label>
              <div className="col-8 ">
                <input
                  type="text"
                  className="form-control editar"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <label className="col-4">Localización:</label>
              <div className="col-8 ">
                <input
                  type="text"
                  className="form-control editar"
                  value={ubicacion}
                  onChange={(e) => setUbicacion(e.target.value)}
                />
              </div>

              <label className="col-4">Especie:</label>
              <div className="col-8 ">
                <input
                  type="text"
                  className="form-control editar"
                  value={especie}
                  onChange={(e) => setEspecie(e.target.value)}
                />
              </div>
            </div>
            <button
              className="btn btn-info col-12 mt-3"
              onClick={() => modificarPersonaje(id, nombre, especie, ubicacion)}
            >
              Guardar
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
