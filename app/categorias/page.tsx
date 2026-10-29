import Link from "next/link";
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

function ItemCategoria({ nombre, total }: { nombre: string; total: number }) {
  return (
    <div className="col-6 col-md-3">
      <Link href={"/categorias/" + nombre} className="link-none">
        <div className="card card-producto text-center">
          <div className="card-body">
            <h5 className="card-title text-capitalize">{nombre}</h5>
            <p className="card-text">{total} productos</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

function ListaCategorias({ productos }: { productos: Producto[] }) {
  const nombres = Array.from(new Set(productos.map((p) => p.categoria)));
  const lista: ReactElement[] = [];
  nombres.forEach((nombre) => {
    const total = productos.filter((p) => p.categoria === nombre).length;
    lista.push(<ItemCategoria nombre={nombre} total={total} key={nombre} />);
  });
  return <div className="row g-3">{lista}</div>;
}

export default async function Categorias() {
  const response = await fetch("http://localhost:3001/productos");
  const productos: Producto[] = await response.json();
    return (
    <main className="text-dark pagina-boti">
      <Navbar activo="/categorias" />
      <div className="container py-4">
        <h1>Categorías</h1>
        <ListaCategorias productos={productos} />
      </div>
    </main>
  );
}