
"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

type Producto = {
    id: string;
    nombre: string;
    categoria: string;
    precio: number;
    imagen: string;
    stock: number;
    descuento?: number;
};

type ProductoCarrito = Producto & {
    cantidad: number;
};

const OFERTAS: Record<string, number> = {
    "1": 15,
    "3": 20,
    "10": 10,
    "19": 25,
    "30": 15,
    "45": 10,
};

function formatoPrecio(precio: number) {
    return "$ " + precio.toLocaleString("es-CL");
}

function ItemOferta({ producto }: { producto: Producto }) {
    const descuento = producto.descuento ?? 0;
    const precioFinal = Math.round(
        producto.precio * (1 - descuento / 100)
    );

    const disponible =
        producto.stock > 0;

    const [mensaje, setMensaje] = useState("");

    function agregarOferta() {
        if (!disponible) return;

        let carrito: ProductoCarrito[] = [];

        try {
            carrito = JSON.parse(
                localStorage.getItem("carrito") || "[]"
            );
        } catch {
            carrito = [];
        }

        const existente = carrito.find(
            (item) => item.id === producto.id
        );

        const cantidadActual = existente?.cantidad ?? 0;

        if (cantidadActual >= producto.stock) {
            setMensaje("Ya alcanzaste el stock disponible.");
            return;
        }

        const nuevoCarrito = existente
            ? carrito.map((item) =>
                  item.id === producto.id
                      ? {
                            ...item,
                            cantidad: item.cantidad + 1,
                        }
                      : item
              )
            : [
                  ...carrito,
                  {
                      ...producto,
                      precio: precioFinal,
                      cantidad: 1,
                  },
              ];

        localStorage.setItem(
            "carrito",
            JSON.stringify(nuevoCarrito)
        );

        window.dispatchEvent(
            new Event("carritoActualizado")
        );

        setMensaje("Producto agregado al carrito.");
    }

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
                    style={{
                        height: 200,
                        objectFit: "contain",
                    }}
                />

                <div className="card-body d-flex flex-column">
                    <p className="card-title text-capitalize">
                        {producto.nombre}
                    </p>

                    <div className="d-flex flex-column mb-3">
                        <span className="precio-descuento text-decoration-line-through">
                            {formatoPrecio(producto.precio)}
                        </span>

                        <span className="precio-nuevo fw-bolder">
                            {formatoPrecio(precioFinal)}
                        </span>
                    </div>

                    <p className="small">
                        {producto.stock === 0
                            ? "Agotado"
                            : `Stock: ${producto.stock}`}
                    </p>

                    <div className="d-grid mt-auto">
                        <button
                            className="btn btn-dark"
                            type="button"
                            onClick={agregarOferta}
                            disabled={!disponible}
                        >
                            Añadir
                        </button>
                    </div>

                    {mensaje && (
                        <p className="small text-success mt-2 mb-0">
                            {mensaje}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Ofertas() {
    const [ofertas, setOfertas] = useState<Producto[]>([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/productos")
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("Error al cargar productos");
                }

                return respuesta.json();
            })
            .then((todos: Producto[]) => {
                const productosEnOferta = todos
                    .filter(
                        (producto) =>
                            OFERTAS[producto.id] !== undefined
                    )
                    .map((producto) => ({
                        ...producto,
                        descuento: OFERTAS[producto.id],
                    }));

                setOfertas(productosEnOferta);
            })
            .catch(() => {
                setError("No se pudieron cargar las ofertas.");
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    return (
        <main className="text-dark pagina-boti">
            <Navbar activo="/ofertas" />

            <div className="container py-4">
                <h1>Ofertas</h1>

                {cargando && (
                    <p>Cargando ofertas...</p>
                )}

                {error && (
                    <p className="text-danger">
                        {error}
                    </p>
                )}

                {!cargando &&
                    !error &&
                    ofertas.length === 0 && (
                        <p>
                            Por ahora no hay ofertas disponibles.
                        </p>
                    )}

                {!cargando && !error && (
                    <div className="row row-cols-2 row-cols-md-4 g-3">
                        {ofertas.map((producto) => (
                            <ItemOferta
                                key={producto.id}
                                producto={producto}
                            />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
