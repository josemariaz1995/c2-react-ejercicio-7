import { useState } from "react";

export const Tarjeta = (props) => {
  const {
    personaje: {
      image,
      id,
      name,
      location: { name: localizacion },
      species,
    },
    modificarPersonaje,
  } = props;
  const [nombre, setNombre] = useState(name);
  const [ubicacion, setUbicacion] = useState(localizacion);
  const [especie, setEspecie] = useState(species);
  return (
    <>
      <li className="col-sm-3 mt-5 py-5 bg-dark tarjeta text-white shadow">
        <div className="row align-items-center ">
          <div className="col-sm-5">
            <img src={image} className="rounded mx-auto img-fluid" alt={name} />
          </div>
          <div className="col-sm-7 form-group">
            <div className="row align-items-center">
              <label className="col-4 m-auto">Nombre:</label>
              <div className="col-8 mt-2">
                <input
                  type="text"
                  className="form-control editar"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <label className="col-4 m-auto">Localización:</label>
              <div className="col-8 mt-2">
                <input
                  type="text"
                  className="form-control editar"
                  value={ubicacion}
                  onChange={(e) => setUbicacion(e.target.value)}
                />
              </div>

              <label className="col-4 m-auto">Especie:</label>
              <div className="col-8 mt-2">
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
