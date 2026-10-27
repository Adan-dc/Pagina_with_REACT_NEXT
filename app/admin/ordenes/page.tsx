
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Orden = {
    id: string;
    codigo: string;
    fecha: string;
    monto: number;
    comuna: string;
};

export default function Ordenes() {
    const [ordenes, setOrdenes] = useState<Orden[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/ordenes")
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("Error al cargar órdenes");
                }
                return respuesta.json();
            })
            .then((datos) => setOrdenes(datos))
            .catch(() => setError("No se pudieron cargar las órdenes"));
    }, []);

    return (
        <div className="Dashboard Dashboard_Productos">
            <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link href="/dashboard" className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white">
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
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 Ordenes">
                        <div className="mt-4">
                            <h4 className="card-title">Ordenes de compra</h4>
                            <p className="card-text">Listado de todas las boletas emitidas.</p>

                            <div className="card text-start">
                                <div className="card-body">
                                    {error && <p className="text-danger">{error}</p>}

                                    <div className="table-responsive small">
                                        <table className="table table-striped table-sm table-hover">
                                            <thead>
                                                <tr>
                                                    <th>ID de Orden</th>
                                                    <th>Código</th>
                                                    <th>Fecha y Hora</th>
                                                    <th>Monto Final</th>
                                                    <th>Comuna</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ordenes.map((orden) => (
                                                    <tr key={orden.id}>
                                                        <td>#{orden.id}</td>
                                                        <td>
                                                            <Link href={`/admin/ordenes/${orden.id}`}>
                                                                {orden.codigo}
                                                            </Link>
                                                        </td>
                                                        <td>{orden.fecha}</td>
                                                        <td>${Number(orden.monto || 0).toLocaleString("es-CL")}</td>
                                                        <td>{orden.comuna}</td>
                                                        <td>
                                                            <Link
                                                                href={`/admin/ordenes/${orden.id}`}
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                DETALLES
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))}
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
