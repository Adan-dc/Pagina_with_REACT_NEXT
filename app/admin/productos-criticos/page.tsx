
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Producto = {
    id: string;
    nombre: string;
    categoria: string;
    precio: number;
    imagen: string;
    stock: number;
};

export default function ProductosCriticos() {

    const [productos, setProductos] = useState<Producto[]>([]);
    const [error, setError] = useState("");

    const stockCritico = 5;

    useEffect(() => {
        async function obtenerProductos() {
            try {
                const respuesta = await fetch("http://localhost:3001/productos");

                if (!respuesta.ok) {
                    throw new Error("Error al obtener productos");
                }

                const datos: Producto[] = await respuesta.json();
                setProductos(datos);

            } catch {
                setError("No se pudieron cargar los productos");
            }
        }

        obtenerProductos();
    }, []);

    const productosCriticos = productos.filter(
        (producto) => producto.stock <= stockCritico
    );

    return (
        <div className="Dashboard Dashboard_Productos ProductosCriticos">

            <header className="navbar sticky-top bg-dark p-3">
                <Link href="/dashboard" className="text-white text-decoration-none">
                    Botillería J&C
                </Link>
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
                                                <a href="/admin/ordenes" className="nav-link nav-menu d-flex gap-2">
                                                    <i className="bi bi-file-earmark"></i>
                                                    Órdenes
                                                </a>
                                            </li>

                                            <li className="nav-item mx-2">
                                                <a href="/admin/productos-criticos" className="nav-link nav-menu d-flex gap-2">
                                                    <i className="bi bi-cart"></i>
                                                    Productos
                                                </a>
                                            </li>

                                            <li className="nav-item mx-2">
                                                <a href="/dashboard_categoria" className="nav-link nav-menu d-flex gap-2">
                                                    <i className="bi bi-list-ul"></i>
                                                    Categorías
                                                </a>
                                            </li>

                                            <li className="nav-item mx-2">
                                                <a href="/admin/usuarios/historial" className="nav-link nav-menu d-flex gap-2">
                                                    <i className="bi bi-people"></i>
                                                    Usuarios
                                                </a>
                                            </li>

                                            <li className="nav-item mx-2">
                                                <a href="/admin/productos-reporte" className="nav-link nav-menu d-flex gap-2">
                                                    <i className="bi bi-graph-up"></i>
                                                    Reportes
                                                </a>
                                            </li>
                                        </ul>

                                        <hr className="my-3" />

                                        <ul className="nav flex-column mb-auto">
                                            <li className="nav-item mx-2">
                                                <a href="/admin/perfil" className="nav-link nav-menu d-flex gap-2">
                                                    <i className="bi bi-person-circle"></i>
                                                    Perfil
                                                </a>
                                            </li>
                                        </ul>

                                        <hr className="my-3" />

                                        <ul className="nav flex-column mb-auto">
                                            <li className="nav-item mt-2 mx-2">
                                                <a href="/" className="mx-4 text-center d-flex gap-2 btn btn-dark">
                                                    <i className="bi bi-shop"></i>
                                                    <strong>Tienda</strong>
                                                </a>
                                            </li>
                                            <li className="nav-item mt-2 mx-2">
                                                <a href="/inicioSesion" className="mx-4 text-center d-flex gap-2 btn btn-danger">
                                                    <i className="bi bi-door-closed"></i>
                                                    Cerrar Sesión
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 ProductosCriticos">
                        <div className="mt-4">

                            <h4 className="card-title">Productos</h4>
                            <p className="card-text">Listado de productos</p>

                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <span className="nav-link disabled">
                                        Listado de productos
                                    </span>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        href="/admin/productos-criticos"
                                        className="nav-link active"
                                    >
                                        Listado de productos críticos
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <span className="nav-link disabled">
                                        Formato tarjeta
                                    </span>
                                </li>

                                <li className="nav-item">
                                  <Link
                                      href="/admin/productos-reporte"
                                      className="nav-link"
                                      >
                                      Reportes
                                  </Link>
                                </li>

                                <li className="nav-item">
                                    <span className="nav-link disabled">
                                        Nuevo producto
                                    </span>
                                </li>
                            </ul>

                            <div className="card text-start">
                                <div className="card-body">

                                    {error && (
                                        <div className="alert alert-danger">
                                            {error}
                                        </div>
                                    )}

                                    <div className="table-responsive small">
                                        <table className="table table-sm table-hover">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Imagen</th>
                                                    <th>Producto</th>
                                                    <th>Categoría</th>
                                                    <th className="text-center">Stock</th>
                                                    <th className="text-center">Stock Crítico</th>
                                                    <th className="text-center">Estado</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {productosCriticos.map((producto) => (
                                                    <tr key={producto.id}>
                                                        <th scope="row">{producto.id}</th>

                                                        <td>
                                                            <img
                                                                src={producto.imagen}
                                                                alt={producto.nombre}
                                                                className="product-img"
                                                            />
                                                        </td>

                                                        <td>{producto.nombre}</td>
                                                        <td>{producto.categoria}</td>

                                                        <td className="text-center">
                                                            {producto.stock}
                                                        </td>

                                                        <td className="text-center">
                                                            {stockCritico}
                                                        </td>

                                                        <td className="text-center">
                                                            {producto.stock === 0 ? (
                                                                <span className="badge bg-dark">
                                                                    AGOTADO
                                                                </span>
                                                            ) : producto.stock <= 2 ? (
                                                                <span className="badge bg-danger">
                                                                    DISPONIBLES ({producto.stock})
                                                                </span>
                                                            ) : (
                                                                <span className="badge bg-warning text-dark">
                                                                    SOLICITAR PRODUCTOS
                                                                </span>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}

                                                {!error && productos.length > 0 &&
                                                    productosCriticos.length === 0 && (
                                                    <tr>
                                                        <td colSpan={8} className="text-center">
                                                            No hay productos críticos.
                                                        </td>
                                                    </tr>
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
    );
}
