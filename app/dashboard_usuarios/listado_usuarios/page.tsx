"use client";

import { useEffect, useState } from "react";

interface Usuario {
    id: string;
    nombreCompleto: string;
    correo: string;
    telefono: string;
    tipo: "TRABAJADOR" | "CLIENTE";
    rol: "ADMINISTRADOR" | "VENDEDOR" | "CLIENTE";
  }
  
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export default function Dashboard_Listado_Usuarios() {
    const [clientes, setClientes] = useState<Usuario[]>([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");
    
    useEffect(() => {
      async function cargarClientes() {
        try {
          const respuesta = await fetch(
            `${API_URL}/usuarios?tipo=CLIENTE`
          );
    
          if (!respuesta.ok) {
            throw new Error(
              "No se pudieron obtener los clientes"
            );
          }
    
          const datos: Usuario[] = await respuesta.json();
    
          setClientes(datos);
        } catch (error) {
          console.error(error);
          setError("No fue posible conectarse con la API");
        } finally {
          setCargando(false);
        }
      }
    
      cargarClientes();
    }, []);

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
                                  <a className="nav-link nav-menu d-flex gap-2" href="/dashboard">
                                      <i className="bi bi-house-fill"></i>
                                      Dashboard
                                  </a>
                              </li>
                              <li className="nav-item mx-2">
                                  <a className="nav-link nav-menu d-flex gap-2" href="/dashboard_productos">
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
                                  <a className="nav-link nav-menu d-flex gap-2" href="/admin/reporte/index.html">
                                      <i className="bi bi-graph-up"></i>
                                      Reportes
                                  </a>
                              </li>
                          </ul>
  
                          <hr className="my-3"/>
  
                          <ul className="nav flex-column mb-auto">
                              <li className="nav-item mx-2">
                                  <a className="nav-link nav-menu d-flex gap-2" href="/admin/perfil/index.html">
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
  
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="mt-4">
                    <h4 className="card-title">Usuarios</h4>
                    <p className="card-text">Listado de usuarios</p>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link nav-menu" aria-current="page" href="/dashboard_usuarios">Listado de trabajadores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-menu active" href="/dashboard_usuarios/listado_usuarios">Listado de usuarios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-menu" href="/dashboard_usuarios/nuevo">Nuevo usuario</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-menu" href="/dashboard_usuarios/nuevo_admin">Nuevo usuario ADMIN</a>
                        </li>
                    </ul>
                    <div className="card text-start">
                        <div className="card-body">
                            <div className="table-responsive small">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre Completo</th>
                                            <th scope="col">Correo Electrónico</th>
                                            <th scope="col">Teléfono</th>
                                            <th scope="col">Tipo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cargando ? (
                                            <tr>
                                            <td colSpan={5} className="text-center py-4">
                                                Cargando clientes...
                                            </td>
                                            </tr>
                                        ) : error ? (
                                            <tr>
                                            <td
                                                colSpan={5}
                                                className="text-center text-danger py-4"
                                            >
                                                {error}
                                            </td>
                                            </tr>
                                        ) : clientes.length === 0 ? (
                                            <tr>
                                            <td
                                                colSpan={5}
                                                className="text-center text-secondary py-4"
                                            >
                                                No existen clientes registrados
                                            </td>
                                            </tr>
                                        ) : (
                                            clientes.map((cliente, posicion) => (
                                            <tr key={cliente.id}>
                                                <th>{posicion + 1}</th>

                                                <td>{cliente.nombreCompleto}</td>

                                                <td>{cliente.correo}</td>

                                                <td>{cliente.telefono}</td>

                                                <td>
                                                <span className="badge bg-warning text-dark">
                                                    {cliente.rol}
                                                </span>
                                                </td>
                                            </tr>
                                            ))
                                        )}
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
          </div>
        </div>
      </div>
    )
  }
  