
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Chart from "chart.js/auto";

type Producto = {
    id: string;
    nombre: string;
    categoria: string;
    stock: number;
};

export default function ReporteProductos() {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [error, setError] = useState("");

    const graficoBarras = useRef<HTMLCanvasElement>(null);
    const graficoLineas = useRef<HTMLCanvasElement>(null);
    const graficoCircular = useRef<HTMLCanvasElement>(null);
    const graficoRadar = useRef<HTMLCanvasElement>(null);


    useEffect(() => {
        async function obtenerProductos() {
            try {
                const respuesta = await fetch(
                    "http://localhost:3001/productos"
                );

                if (!respuesta.ok) {
                    throw new Error("Error al obtener productos");
                }

                const datos: Producto[] = await respuesta.json();
                setProductos(datos);
            } catch {
                setError("No se pudieron cargar los productos de la API.");
            }
        }

        obtenerProductos();
    }, []);

    useEffect(() => {
        if (productos.length === 0) return;

        const graficos: Chart[] = [];

        const primerosProductos = productos.slice(0, 5);
        const nombres = primerosProductos.map(
            (producto) => producto.nombre
        );

        const categorias = [
            ...new Set(productos.map(
                (producto) => producto.categoria
            ))
        ].slice(0, 5);

        const colores = [
            "rgba(54, 162, 235, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(231, 76, 60, 0.6)",
            "rgba(153, 102, 255, 0.6)"
        ];

        // 1. Gráfico de barras
        if (graficoBarras.current) {
            graficos.push(new Chart(graficoBarras.current, {
                type: "bar",
                data: {
                    labels: nombres,
                    datasets: [{
                        label: "Ventas de ejemplo",
                        data: [150, 200, 180, 300, 120].slice(
                            0, nombres.length
                        ),
                        backgroundColor: colores
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            }));
        }

        if (graficoLineas.current) {
            graficos.push(new Chart(graficoLineas.current, {
                type: "line",
                data: {
                    labels: [
                        "Enero", "Febrero", "Marzo", "Abril",
                        "Mayo", "Junio", "Julio", "Agosto",
                        "Septiembre", "Octubre", "Noviembre",
                        "Diciembre"
                    ],
                    datasets: [{
                        label: "Ventas mensuales de ejemplo",
                        data: [
                            30, 45, 60, 50, 70, 80,
                            90, 100, 95, 110, 130, 140
                        ],
                        borderColor: "rgba(54, 162, 235, 1)",
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            }));
        }

        if (graficoCircular.current) {
            graficos.push(new Chart(graficoCircular.current, {
                type: "pie",
                data: {
                    labels: categorias,
                    datasets: [{
                        label: "Ventas de ejemplo",
                        data: [250, 150, 180, 120, 100].slice(
                            0, categorias.length
                        ),
                        backgroundColor: colores
                    }]
                },
                options: {
                    responsive: true
                }
            }));
        }


        if (graficoRadar.current) {
            graficos.push(new Chart(graficoRadar.current, {
                type: "radar",
                data: {
                    labels: nombres,
                    datasets: [{
                        label: "Popularidad de ejemplo",
                        data: [80, 90, 85, 95, 70].slice(
                            0, nombres.length
                        ),
                        backgroundColor: "rgba(54, 162, 235, 0.2)",
                        borderColor: "rgba(54, 162, 235, 1)"
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        r: {
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    }
                }
            }));
        }

        return () => {
            graficos.forEach((grafico) => grafico.destroy());
        };
    }, [productos]);

    return (
        <div className="Dashboard">
            <header
                className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow"
                data-bs-theme="dark"
            >
                <Link
                    href="/dashboard"
                    className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white"
                >
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
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 ReporteProductos">

                        <div className="mt-4">
                            <h4 className="card-title">
                                Análisis de Ventas de Productos
                            </h4>

                            <p className="card-text">
                                Listado de productos
                            </p>

                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <span className="nav-link disabled">
                                        Listado de productos
                                    </span>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        href="/admin/productos-criticos"
                                        className="nav-link"
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
                                        className="nav-link active"
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
                        </div>

                        {error && (
                            <div className="alert alert-danger mt-3">
                                {error}
                            </div>
                        )}

                        <p className="text-muted small mt-3">
                            Los nombres de productos provienen de la API.
                            Las cifras de ventas son datos de demostración.
                        </p>

                        <div className="container mt-3">
                            <div className="row">

                                <div className="col-md-6 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4>
                                                1. Gráfico de Barras: Ventas de Productos
                                            </h4>
                                            <p>
                                                Este gráfico muestra cuántas veces
                                                se ha vendido cada producto en el catálogo.
                                            </p>
                                            <canvas ref={graficoBarras}></canvas>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4>
                                                2. Gráfico de Líneas: Tendencias de Ventas Mensuales
                                            </h4>
                                            <p>
                                                Este gráfico muestra las tendencias
                                                de ventas mensuales para el último año.
                                            </p>
                                            <canvas ref={graficoLineas}></canvas>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4>
                                                3. Gráfico Circular: Distribución de Categorías
                                            </h4>
                                            <p>
                                                Este gráfico muestra una distribución
                                                de ejemplo por categorías de productos.
                                            </p>
                                            <canvas ref={graficoCircular}></canvas>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4>
                                                4. Gráfico de Radar: Popularidad de Productos
                                            </h4>
                                            <p>
                                                Este gráfico compara la popularidad
                                                de varios productos en términos de ventas.
                                            </p>
                                            <canvas ref={graficoRadar}></canvas>
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
