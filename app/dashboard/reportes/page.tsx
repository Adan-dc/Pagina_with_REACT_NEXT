"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type Producto = {
  id: string;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  stock: number;
  descuento?: number;
};

const colores = [
  "rgba(255, 99, 132, 0.5)",
  "rgba(54, 162, 235, 0.5)",
  "rgba(255, 206, 86, 0.5)",
  "rgba(75, 192, 192, 0.5)",
  "rgba(153, 102, 255, 0.5)",
  "rgba(255, 159, 64, 0.5)",
  "rgba(201, 203, 207, 0.5)",
  "rgba(40, 167, 69, 0.5)",
];

export default function Reportes() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [listo, setListo] = useState(false);
  const donutRef = useRef<HTMLCanvasElement>(null);
  const barRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    fetch("http://localhost:3001/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  useEffect(() => {
    if (!listo || productos.length === 0 || !donutRef.current || !barRef.current) return;

    const categorias = Array.from(new Set(productos.map((p) => p.categoria)));
    const cantidades = categorias.map(
      (c) => productos.filter((p) => p.categoria === c).length
    );
    const promedios = categorias.map((c) => {
      const lista = productos.filter((p) => p.categoria === c);
      const suma = lista.reduce((total, p) => total + p.precio, 0);
      return Math.round(suma / lista.length);
    });

    const Chart = (window as any).Chart;
    Chart.defaults.color = "#f7f7f7";

    const donut = new Chart(donutRef.current, {
      type: "doughnut",
      data: {
        labels: categorias,
        datasets: [{ data: cantidades, backgroundColor: colores }],
      },
    });

    const barras = new Chart(barRef.current, {
      type: "bar",
      data: {
        labels: categorias,
        datasets: [
          {
            label: "Precio promedio ($)",
            data: promedios,
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: { scales: { y: { beginAtZero: true } } },
    });

    return () => {
      donut.destroy();
      barras.destroy();
    };
  }, [listo, productos]);

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
            <div className="ReporteProductos">
  <Script
    src="https://cdn.jsdelivr.net/npm/chart.js"
    onReady={() => setListo(true)}
  />

  <h4 className="card-title">Reportes</h4>
  <p className="card-text">
    Explora los reportes del inventario de la botillería: cómo se distribuyen
    los productos y cuánto cuestan en promedio por categoría.
  </p>

  <div className="row">
    <div className="col-md-6 mb-3">
      <div className="card">
        <div className="card-body">
          <h4>1. Gráfico de Donut: Productos por categoría</h4>
          <small>
            Muestra cuántos productos tiene cada categoría. Permite ver cuáles
            concentran más el inventario.
          </small>
          <div style={{ maxWidth: 320, margin: "0 auto" }}>
            <canvas ref={donutRef}></canvas>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-6 mb-3">
      <div className="card">
        <div className="card-body">
          <h4>2. Gráfico de Barras: Precio promedio por categoría</h4>
          <small>
            Compara el precio promedio de los productos de cada categoría.
          </small>
          <canvas ref={barRef}></canvas>
        </div>
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
