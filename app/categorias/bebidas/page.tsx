import Link from "next/link";
import type { ReactElement } from "react";

import Navbar from "../../components/Navbar";



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

function formatoPrecio(n: number) {
  return "$ " + n.toLocaleString("es-CL");
}

function ItemProducto({ producto }: { producto: Producto }) {
  const descuento = producto.descuento ?? 0;
  const enOferta = descuento > 0;
  const precioFinal = Math.round(producto.precio * (1 - descuento / 100));

  return (
    <div className="col">
      <div className="card card-producto h-100">
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
              {enOferta ? formatoPrecio(producto.precio) : ""}
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

function ListaProductos({ productos }: { productos: Producto[] }) {
  const lista: ReactElement[] = [];
  productos.forEach((producto) => {
    lista.push(<ItemProducto producto={producto} key={producto.id} />);
  });
  return <div className="row row-cols-2 row-cols-md-4 g-3">{lista}</div>;
}

export default async function Bebidas() {
  const response = await fetch("http://localhost:3001/productos?categoria=bebidas");
  const productos: Producto[] = await response.json();

  return (
    <main className="text-dark pagina-boti">
      <Navbar activo="/categorias" />
      <div className="container py-4">
        <Link href="/categorias">← Volver a categorías</Link>
        <h1 className="mt-2">Bebidas</h1>
        <ListaProductos productos={productos} />
      </div>
    </main>
  );
}