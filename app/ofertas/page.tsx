import type { ReactElement } from "react";

import Navbar from "../components/Navbar";

export const instant = false;

type Producto = {
  id: string;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  stock: number;
  descuento?: number;
};


const OFERTAS: Record<string, number> = {
  "1": 15,
  "3": 20,
  "10": 10,
  "19": 25,
  "30": 15,
  "45": 10,
};

function formatoPrecio(n: number) {
  return "$ " + n.toLocaleString("es-CL");
}

function ItemOferta({ producto }: { producto: Producto }) {
  const descuento = producto.descuento ?? 0;
  const precioFinal = Math.round(producto.precio * (1 - descuento / 100));

  return (
    <div className="col">
      <div className="card card-producto h-100">
        <span className="badge bg-danger position-absolute top-0 start-0 m-2">
          -{descuento}%
        </span>
        <img
          src={producto.imagen}
          className="card-img-top"
          alt={producto.nombre}
          style={{ height: 200, objectFit: "contain" }}
        />
        <div className="card-body">
          <p className="card-title text-capitalize">{producto.nombre}</p>
          <div className="d-flex flex-column mb-3">
            <span className="precio-descuento text-decoration-line-through">
              {formatoPrecio(producto.precio)}
            </span>
            <span className="precio-nuevo fw-bolder">{formatoPrecio(precioFinal)}</span>
          </div>
          <p className="small">
            {producto.stock === 0 ? "Agotado" : "Stock: " + producto.stock}
          </p>
          <div className="d-grid">
            <button className="btn btn-dark" type="button" disabled={producto.stock === 0}>
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListaOfertas({ productos }: { productos: Producto[] }) {
  const lista: ReactElement[] = [];
  productos.forEach((producto) => {
    lista.push(<ItemOferta producto={producto} key={producto.id} />);
  });
  return <div className="row row-cols-2 row-cols-md-4 g-3">{lista}</div>;
}

export default async function Ofertas() {
  const response = await fetch("http://localhost:3001/productos");
  const todos: Producto[] = await response.json();
  const ofertas = todos
    .filter((p) => OFERTAS[p.id] !== undefined)
    .map((p) => ({ ...p, descuento: OFERTAS[p.id] }));

    return (
    <main className="text-dark pagina-boti">
      <Navbar activo="/ofertas" />
      <div className="container py-4">
        <h1>Ofertas</h1>
        {ofertas.length === 0 ? (
          <p>Por ahora no hay ofertas disponibles.</p>) : 
          (<ListaOfertas productos={ofertas} />
        )}
      </div>
    </main>
  );
}