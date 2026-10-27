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
  <div className="Dashboard">
    <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="/dashboard">
        Botillería J&C
      </a>
    </header>

    <div className="container-fluid">
      <div className="row">
        <aside className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
          <div className="offcanvas-md offcanvas-start bg-body-tertiary" tabIndex={-1} id="sidebarMenu">
            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
              <ul className="nav flex-column">
                <li className="nav-item mx-2">
                  <a href="/dashboard" className="nav-link nav-menu d-flex gap-2">
                    <i className="bi bi-house-fill"></i>
                    Dashboard
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link nav-menu d-flex gap-2" href="/admin/ordenes">
                    <i className="bi bi-file-earmark"></i>
                    Ordenes
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link nav-menu d-flex gap-2" href="/admin/productos-criticos">
                    <i className="bi bi-cart"></i>
                    Productos
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link nav-menu d-flex gap-2" href="/admin/categoria/index.html">
                    <i className="bi bi-list-ul"></i>
                    Categorías
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link nav-menu d-flex gap-2" href="/admin/usuarios/historial">
                    <i className="bi bi-people"></i>
                    Usuarios
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link nav-menu d-flex gap-2" href="/dashboard/reportes">
                    <i className="bi bi-graph-up"></i>
                    Reportes
                  </a>
                </li>
              </ul>

              <hr className="my-3" />

              <ul className="nav flex-column mb-auto">
                <li className="nav-item mx-2">
                  <a className="nav-link nav-menu d-flex gap-2" href="/dashboard/perfil">
                    <i className="bi bi-person-circle"></i>
                    Perfil
                  </a>
                </li>
              </ul>

              <hr className="my-3" />

              <ul className="nav flex-column mb-auto">
                <li className="nav-item mt-2 mx-2">
                  <a className="mx-4 text-center d-flex gap-2 btn btn-dark" href="/">
                    <i className="bi bi-shop"></i>
                    <strong>Tienda</strong>
                  </a>
                </li>
                <li className="nav-item mt-2 mx-2">
                  <a className="mx-4 text-center d-flex gap-2 btn btn-danger" href="/inicioSesion">
                    <i className="bi bi-door-closed"></i>
                    Cerrar Sesión
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mb-3">
            <div className="mt-4">
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
          </main>
        </div>
      </div>
    </div>
  );
}