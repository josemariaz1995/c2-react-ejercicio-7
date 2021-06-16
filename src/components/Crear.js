import { useState } from "react";

export const Crear = (props) => {
  const { actualizar } = props;
  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [especie, setEspecie] = useState("");
  const [imagen, setImagen] = useState("");
  return (
    <form className="text-dark form-group position-absolute crear bg-white p-5 shadow-lg rounded d-flex align-item-center justify-content-center w-25">
      <div className="row ">
        <label htmlFor="name" className="col-4 m-auto">
          Nombre:
        </label>
        <div className="col-8 mt-2">
          <input
            type="text"
            id="name"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <label htmlFor="location" className="col-4 m-auto">
          Localización:
        </label>
        <div className="col-8 mt-2">
          <input
            type="text"
            id="location"
            className="form-control"
            onChange={(e) => setUbicacion(e.target.value)}
          />
        </div>
        <label htmlFor="species" className="col-4 m-auto">
          Especie:
        </label>
        <div className="col-8 mt-2">
          <input
            type="text"
            id="species"
            className="form-control"
            onChange={(e) => setEspecie(e.target.value)}
          />
        </div>
        <label htmlFor="image" className="col-4 m-auto">
          Imagen:
        </label>
        <div className="col-8 mt-2">
          <input
            type="url"
            id="image"
            placeholder="URL de la imagen"
            className="form-control"
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>
        <button
          className="btn btn-info"
          onClick={() => actualizar(nombre, ubicacion, especie, imagen)}
        >
          Crear
        </button>
      </div>
    </form>
  );
};
