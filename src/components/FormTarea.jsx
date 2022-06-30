import React, { Fragment, useState, useEffect } from "react";
import { Lista } from "./Lista";

export const FormTarea = () => {
  // aqui va nuestra logica
  let tareasLocalStorage = JSON.parse(localStorage.getItem("tareasKey")) || [];

  //crear un state
  const [tareas, setTareas] = useState(tareasLocalStorage);
  const [tarea, setTarea] = useState("");

  //aqui creo las funciones

  useEffect(() => {
    //aqui va el codigo que quiero ejecutar cuando ocurre componentDidMount y comoponentDidUpdate
    //console.log("Hola mundo");
    if (tareasLocalStorage) {
      //console.log("tareasKey ya existe");
      localStorage.setItem("tareasKey", JSON.stringify(tareas));
    } else {
      //console.log("el LS no existe");
      localStorage.setItem("tareasKey", JSON.stringify([]));
    }
  }, [tareas, tarea]);

  const handleSubmit = (e) => {
    e.preventDefault(); // para que no recargue
    //console.log("en la fucion");
    let arregloTareas = tareas;
    arregloTareas.push(tarea);
    setTareas(arregloTareas);
    setTarea("");
  };

  const borrarTarea = (nombre) => {
    console.log("Tarea para borrar" + nombre);
    //filtrar el arreglo quitando el elemnto que quiero borrar
    let arregloTareas = tareas.filter((item) => item !== nombre);
    //actualizar el state
    setTareas(arregloTareas);
  };

  //maquetado del componente
  return (
    <Fragment>
      <div className="container d-flex justify-content-center">
        <form className="w-75" onSubmit={handleSubmit}>
          <div className="form-group d-flex">
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setTarea(e.target.value);
              }}
              value={tarea}
            />
            <button className="btn btn-outline-light" type="submit">
              Agregar
            </button>
          </div>
        </form>
      </div>
      <section className="container w-75 my-5">
        <Lista listaTareas={tareas} borrarTarea={borrarTarea}></Lista>
      </section>
    </Fragment>
  );
};
