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
    <div className="container-fluid py-3 text-dark">
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
              <div style={{maxWidth: 320, margin: "0 auto"}}>
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
  );
}