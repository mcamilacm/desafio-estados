
import { useState } from 'react';



const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setconfirmarContraseña] = useState("");
  const [error, setError] = useState(false);
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();
    //Validación;
    if (
      nombre === "" ||
      apellido === "" ||
      contraseña === "" ||
      confirmarContraseña === ""
    ) {
      setError(true);
      setRegistroExitoso(false);
      return;
    }
    setError(false);
    setRegistroExitoso(true);
    setNombre("");
    setApellido("");
    setContraseña("");
    setconfirmarContraseña("");
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {error ? <p className="wrong">Los campos están vacios</p> : null}
        {registroExitoso && <p className="exito">Registro exitoso</p>}

        <div className="form-group">
          <label className="title_button">Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>

        <div className="form-group">
          <label className="title_button">Apellido</label>
          <input
            type="text"
            name="apellido"
            className="form-control"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
        </div>

        <div className="form-group">
          <label className="title_button">Contraseña</label>
          <input
            type="password"
            name="contraseña"
            className="form-control"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
        </div>

        <div className="form-group">
          <label className="title_button">Repetir Contraseña</label>
          <input
            type="password"
            name="confirmar Contraseña"
            className="form-control"
            onChange={(e) => setconfirmarContraseña(e.target.value)}
            value={confirmarContraseña}
          />
        </div>

        <button type="submit" className="main_button">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Formulario;
