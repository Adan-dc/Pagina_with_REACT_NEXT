
"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";
type Producto = {
    id: string;
    nombre: string;
    categoria: string;
    precio: number;
    imagen: string;
    stock: number;
};

export default function DetalleProducto() {
    const [producto, setProducto] = useState<Producto | null>(null);
    const [recomendados, setRecomendados] = useState<Producto[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const parametros = new URLSearchParams(window.location.search);
        const id = parametros.get("id");

        if (!id) {
            setError("No se seleccionó ningún producto.");
            return;
        }

        fetch("http://localhost:3001/productos")
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("Error al cargar productos");
                }
                return respuesta.json();
            })
            .then((datos: Producto[]) => {
                const seleccionado = datos.find(
                    (item) => String(item.id) === id
                );

                if (!seleccionado) {
                    setError("Producto no encontrado.");
                    return;
                }

                setProducto(seleccionado);

                const otros = datos
                    .filter(
                        (item) =>
                            item.id !== seleccionado.id &&
                            item.categoria === seleccionado.categoria
                    )
                    .slice(0, 4);

                setRecomendados(otros);
            })
            .catch(() => setError("No se pudo cargar el producto."));
    }, []);

    return (
        <main className="DetalleProducto">
            <Navbar />
            <div className="container mt-5">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link href="/#categorias">Categorías</Link>
                        </li>
                        <li className="breadcrumb-item active">
                            {producto?.categoria || "Producto"}
                        </li>
                    </ol>
                </nav>

                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}

                {!producto && !error && (
                    <p>Cargando producto...</p>
                )}

                {producto && (
                    <div className="card">
                        <div className="card-body row">
                            <div className="col-md-6">
                                <img
                                    src={producto.imagen}
                                    className="product-img"
                                    alt={producto.nombre}
                                />
                            </div>

                            <div className="col-md-6">
                                <div className="product-detail p-4">
                                    <h1 className="mb-3 text-capitalize">
                                        {producto.nombre}
                                    </h1>

                                    <p className="text-muted">
                                        BOTILLERÍA J&C
                                    </p>

                                    <hr />

                                    <div className="d-flex flex-column mb-3">
                                        <span className="text-secondary">
                                            Precio:
                                        </span>

                                        <span className="precio-nuevo fw-bolder">
                                            ${producto.precio.toLocaleString("es-CL")}
                                        </span>
                                    </div>

                                    <p className="mb-3 text-capitalize">
                                        Categoría: {producto.categoria}
                                    </p>

                                    <p className="mb-4">
                                        Stock disponible: {producto.stock}
                                    </p>

                                    <div className="mb-4">
                                        <label
                                            htmlFor="cantidad"
                                            className="form-label"
                                        >
                                            Cantidad
                                        </label>

                                        <input
                                            id="cantidad"
                                            type="number"
                                            className="form-control"
                                            value={1}
                                            readOnly
                                            disabled
                                            style={{ maxWidth: "100px" }}
                                        />
                                    </div>

                                    <div className="d-grid gap-2">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-lg"
                                            disabled
                                        >
                                            Agregar al carrito
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-outline-primary"
                                            disabled
                                        >
                                            Comprar ahora
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {recomendados.length > 0 && (
                    <section className="mt-5 mb-5">
                        <h2 className="mb-4">
                            También te podría gustar
                        </h2>

                        <div className="row row-cols-2 row-cols-md-4 g-3">
                            {recomendados.map((item) => (
                                <div className="col" key={item.id}>
                                    <div className="card h-100">

                                        <a href={`/detalleProducto?id=${item.id}`}>
                                            <img
                                                src={item.imagen}
                                                className="card-img-top imagen-recomendada"
                                                alt={item.nombre}
                                            />
                                        </a>

                                        <div className="card-body d-flex flex-column">
                                            <p className="small text-muted">
                                                BOTILLERÍA J&C
                                            </p>

                                            <a
                                                href={`/detalleProducto?id=${item.id}`}
                                                className="text-decoration-none"
                                            >
                                                <h5 className="card-title text-capitalize">
                                                    {item.nombre}
                                                </h5>
                                            </a>

                                            <p className="precio-nuevo fw-bold mt-auto">
                                                ${item.precio.toLocaleString("es-CL")}
                                            </p>

                                            <a
                                                href={`/detalleProducto?id=${item.id}`}
                                                className="btn btn-outline-primary"
                                            >
                                                Ver detalle
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}
