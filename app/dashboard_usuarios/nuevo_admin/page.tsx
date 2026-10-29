"use client";
import type { FormEvent } from "react";

export default function Dashboard_Admin_Nuevo() {
    return (
      <div className="Dashboard">
        <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
          <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="/dashboard">
            Company name
          </a>
        </header>


  
        <div className="container-fluid">
          <div className="row">
            <aside className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                  <div className="offcanvas-md offcanvas-start bg-body-tertiary" tabIndex={-1} id="sidebarMenu"
                      aria-labelledby="sidebarMenuLabel">
                      <div className="offcanvas-header">
                          <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                              data-bs-target="#sidebarMenu" aria-label="Close"></button>
                      </div>
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
                                  <a className="nav-link nav-menu d-flex gap-2" href="/dashboard_productos">
                                      <i className="bi bi-cart"></i>
                                      Productos
                                  </a>
                              </li>
                              <li className="nav-item mx-2">
                                  <a className="nav-link nav-menu d-flex gap-2" href="/dashboard_categoria">
                                      <i className="bi bi-list-ul"></i>
                                      Categorías
                                  </a>
                              </li>
                              <li className="nav-item mx-2">
                                  <a className="nav-link nav-menu d-flex gap-2 nav-active" href="/dashboard_usuarios">
                                      <i className="bi bi-people"></i>
                                      Usuarios
                                  </a>
                              </li>
                              <li className="nav-item mx-2">
                                  <a className="nav-link nav-menu d-flex gap-2" href="/admin/reportes">
                                      <i className="bi bi-graph-up"></i>
                                      Reportes
                                  </a>
                              </li>
                          </ul>
  
                          <hr className="my-3"/>
  
                          <ul className="nav flex-column mb-auto">
                              <li className="nav-item mx-2">
                                  <a className="nav-link nav-menu d-flex gap-2" href="/admin/perfil">
                                      <i className="bi bi-person-circle"></i>
                                      Perfil
                                  </a>
                              </li>
                          </ul>
  
                          <hr className="my-3"/>
  
  
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
                    <div className="col-sm-12">
                        <h4>
                            <a href="/dashboard_usuarios" className="text-secondary me-2 decoration-none">
                                <i className="bi bi-arrow-left-circle-fill"></i>
                            </a>
                            Nuevo usuario
                        </h4>
                    </div>
                    <div className="card text-start col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">Registro de nuevo usuario Admin</h4>
                            <p className="card-text">Ingrese información del usuario de forma detallada, añade una dirección
                                de destino</p>
                            <form onSubmit={handleGuardar}>
                                <div className="col-6 mb-3">
                                    <label htmlFor="nombre" className="form-label">Run<small
                                            className="text-danger">*</small></label>
                                    <input type="text" className="form-control" id="nombre" placeholder="ej: 11111111K"
                                        name="nombre" required/>
                                </div>
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <label htmlFor="nombre" className="form-label">Nombre<small
                                                className="text-danger">*</small></label>
                                        <input type="text" className="form-control" id="nombre" name="nombre" required/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <label htmlFor="apellidos" className="form-label">Apellidos<small
                                                className="text-danger">*</small></label>
                                        <input type="text" className="form-control" id="apellidos" name="apellidos"
                                            required/>
                                    </div>

                                    <div className="mb-3 col-6">
                                        <label htmlFor="correo" className="form-label">Correo<small
                                                className="text-danger">*</small></label>
                                        <input type="email" className="form-control" id="correo" name="correo" required/>
                                    </div>

                                    <div className="mb-3 col-6">
                                        <label htmlFor="password" className="form-label">Contraseña<small
                                                className="text-danger">*</small></label>
                                        <input type="password" className="form-control" id="password" name="password"
                                            required/>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="mb-3 col-6 col-md-6">
                                        <label htmlFor="fechaNacimiento" className="form-label">Fecha nacimiento<small
                                                className="text-danger">*</small></label>
                                        <input type="date" className="form-control" id="fechaNacimiento"
                                            name="fechaNacimiento" required/>
                                    </div>

                                    <div className="mb-3 col-6 col-md-6">
                                        <label htmlFor="productAvailability" className="form-label">Tipo Usuario<small
                                                className="text-danger">*</small></label>
                                        <select className="form-select" id="productAvailability" required>
                                            <option value="Trabajador">Vendedor</option>
                                            <option value="Bodegero">Bodegero</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </div>
                                </div>

                                <hr className="w-100"/>
                                <div className="text-end">
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
          </div>
        </div>
      </div>
    )
  }

  function handleGuardar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    alert("Se ha creado correctamente el Usuario ADMIN");
  }
  