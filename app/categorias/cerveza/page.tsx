import Link from "next/link";

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

function formatoPrecio(valor: number) {
  return "$ " + valor.toLocaleString("es-CL");
}

function ItemProducto({ producto }: { producto: Producto }) {
  const tieneDescuento = producto.descuento !== undefined && producto.descuento > 0;
  const precioFinal = tieneDescuento
    ? Math.round(producto.precio * (1 - (producto.descuento as number) / 100))
    : producto.precio;

  return (
    <div className="col">
      <div className="card h-100 card-producto">
        <img
          src={producto.imagen}
          className="card-img-top"
          alt={producto.nombre}
          style={{ height: 200, objectFit: "contain" }}
        />
        <div className="card-body">
          <h6 className="card-title">{producto.nombre}</h6>
          {tieneDescuento && (
            <p className="precio-descuento mb-0 text-decoration-line-through">
              {formatoPrecio(producto.precio)}
            </p>
          )}
          <p className="precio-nuevo fw-bold">{formatoPrecio(precioFinal)}</p>
          <p className="card-text small">
            {producto.stock > 0 ? "Stock: " + producto.stock : "Agotado"}
          </p>
        </div>
        <div className="card-footer bg-white border-0">
          <button className="btn btn-dark w-100" disabled={producto.stock === 0}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

function ListaProductos({ productos }: { productos: Producto[] }) {
  return (
    <div className="row row-cols-2 row-cols-md-4 g-3">
      {productos.map((p) => (
        <ItemProducto producto={p} key={p.id} />
      ))}
    </div>
  );
}

export default async function Cerveza() {
  const response = await fetch("http://localhost:3001/productos?categoria=cerveza");
  const productos: Producto[] = await response.json();

  return (
    <main className="text-dark pagina-boti">
      <Navbar activo="/categorias" />
      <div className="container py-4">
        <Link href="/categorias">← Volver a categorías</Link>
        <h1 className="mt-2">Cervezas</h1>
        <ListaProductos productos={productos} />
      </div>
    </main>
  );
}