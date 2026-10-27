"use client"; 

import {useState} from "react";
import type {FormEvent} from "react";


export default function Perfil(){
    const [password, setPassword] = useState("");
    const [repetir, setRepetir] = useState("");
    const [aviso, setAviso] = useState<{tipo: String; texto: string} | null>(null);

    function guardarDatos(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setAviso({tipo: "success", texto: "Datos guardados correctamente."});
    }


    function cambiarPassword(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(password !== repetir){
            setAviso({tipo: "danger", texto:"Las contraseñas no coinciden."});
            return;
        }
        setAviso({tipo:"success", texto: "Contraseña actualizada correctamente."});
        setPassword("");
        setRepetir("");
    }

    return (
    <div className="container-fluid py-3 text-dark">
      <h4 className="mb-3">Información personal</h4>

      {aviso && (
        <div className={"alert alert-" + aviso.tipo} role="alert">
          {aviso.texto}
        </div>
      )}

      <div className="row g-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-3">Usuario</h5>
              <form onSubmit={guardarDatos}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="nombre" className="form-label">
                      Nombre<span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" id="nombre" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="apellidos" className="form-label">
                      Apellidos<span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" id="apellidos" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">
                    Correo<span className="text-danger">*</span>
                  </label>
                  <input type="email" className="form-control" id="correo" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="nacimiento" className="form-label">
                    Fecha nacimiento<span className="text-danger">*</span>
                  </label>
                  <input type="date" className="form-control" id="nacimiento" required />
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-3">Cambiar contraseña</h5>
              <form onSubmit={cambiarPassword}>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña<span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="repetir" className="form-label">
                    Repetir Contraseña<span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="repetir"
                    value={repetir}
                    onChange={(e) => setRepetir(e.target.value)}
                    required
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}