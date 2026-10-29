"use client";

import { useEffect, useState } from "react";
import { filtrarProductosPorCategoria } from "@/utils/funcionesTienda";
import Link from "next/link";
interface Producto {
    id: string;
    nombre: string;
    categoria: string;
    descripcion?: string;
    precio: number;
    stock: number;
    imagen?: string;
  }
  
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";
  
  function formatearPrecio(precio: number) {
    if (precio === 0) {
      return "Gratis";
    }
  
    return precio.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP"
    });
  }

export default function Dashboard_Productos() {
        const [productos, setProductos] = useState<Producto[]>([]);
        const [cargando, setCargando] = useState(true);
        const [error, setError] = useState("");
        const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("TODAS");
      
        useEffect(() => {
          async function cargarProductos() {
            try {
              const respuesta = await fetch(
                `${API_URL}/productos`
              );
      
              if (!respuesta.ok) {
                throw new Error(
                  "No se pudieron obtener los productos"
                );
              }
      
              const datos: Producto[] = await respuesta.json();
      
              setProductos(datos);
            } catch (error) {
              console.error(error);
              setError("No fue posible conectarse con la API");
            } finally {
              setCargando(false);
            }
          }
      
          cargarProductos();
        }, []);

        const categoriasDisponibles = Array.from(
            new Set(
              productos.map((producto) => producto.categoria)
            )
          ).sort();

        const productosFiltrados =
            filtrarProductosPorCategoria(
                productos,
                categoriaSeleccionada
            );

    return (
      <div className="Dashboard">
        <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
          <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="/dashboard">
            Botilleria J&C
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
                                  <a className="nav-link nav-menu d-flex gap-2 nav-active" href="/dashboard_productos">
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
                                  <a className="nav-link nav-menu d-flex gap-2" href="/dashboard_usuarios">
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
                    <h4 className="card-title">Productos</h4>
                    <p className="card-text">Listado de productos</p>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link nav-menu active" aria-current="page" href="/dashboard_productos">Listado de productos</a>
                        </li>
                        <li className="nav-item">
                        <Link
                            href="/admin/productos-criticos"
                            className="nav-link"
                        >
                            Productos Críticos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href="/admin/productos-reporte"
                            className="nav-link"
                        >
                            Reportes de Productos
                        </Link>
                    </li>
                        <li className="nav-item">
                            <a className="nav-link nav-menu" href="/dashboard_productos/nuevo">Nuevo producto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-menu" aria-current="page" href="/dashboard_productos/editar">Editar Producto</a>
                        </li>
                    </ul>
                    <div className="row mt-3 mb-3">
                        <div className="col-md-4">
                            <label
                            htmlFor="filtroCategoria"
                            className="form-label"
                            >
                            Filtrar productos por categoría
                            </label>

                            <select
                            id="filtroCategoria"
                            className="form-select"
                            value={categoriaSeleccionada}
                            onChange={(evento) =>
                                setCategoriaSeleccionada(evento.target.value)
                            }
                            >
                            <option value="TODAS">
                                Todas las categorías
                            </option>

                            {categoriasDisponibles.map((categoria) => (
                                <option key={categoria} value={categoria}>
                                {categoria.charAt(0).toUpperCase() +
                                    categoria.slice(1)}
                                </option>
                            ))}
                            </select>
                        </div>
                    </div>
                    <div className="card text-start">
                        <div className="card-body">
                            <div className="table-responsive small">
                                <table className="table table-striped table-sm table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Imagen</th>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Categoría</th>
                                            <th scope="col">Descripción</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Disponibilidad</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cargando ? (
                                            <tr>
                                            <td colSpan={7} className="text-center py-4">
                                                Cargando productos...
                                            </td>
                                            </tr>
                                        ) : error ? (
                                            <tr>
                                            <td
                                                colSpan={7}
                                                className="text-center text-danger py-4"
                                            >
                                                {error}
                                            </td>
                                            </tr>
                                        ) : productosFiltrados.length === 0 ? (
                                            <tr>
                                            <td
                                                colSpan={7}
                                                className="text-center text-secondary py-4"
                                            >
                                                No existen productos para la categoría seleccionada
                                            </td>
                                            </tr>
                                        ) : (
                                            productosFiltrados.map((producto, posicion) => (
                                            <tr key={producto.id}>
                                                <th scope="row">
                                                {posicion + 1}
                                                </th>

                                                <td>
                                                {producto.imagen ? (
                                                    <img
                                                    src={producto.imagen}
                                                    alt={producto.nombre}
                                                    className="product-img"
                                                    width="50"
                                                    height="50"
                                                    style={{ objectFit: "cover" }}
                                                    />
                                                ) : (
                                                    <span className="text-secondary">
                                                    Sin imagen
                                                    </span>
                                                )}
                                                </td>

                                                <td>{producto.nombre}</td>

                                                <td>{producto.categoria}</td>

                                                <td>
                                                {producto.descripcion ??
                                                    "Sin descripción"}
                                                </td>

                                                <td>
                                                {formatearPrecio(producto.precio)}
                                                </td>

                                                <td>
                                                {producto.stock > 0 ? (
                                                    <span className="badge bg-success">
                                                    {producto.stock} disponibles
                                                    </span>
                                                ) : (
                                                    <span className="badge bg-danger">
                                                    Agotado
                                                    </span>
                                                )}
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
  