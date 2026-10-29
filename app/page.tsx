
"use client";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "./components/Footer";
type Producto = {
    id: string;
    nombre: string;
    categoria: string;
    precio: number;
    imagen: string;
    stock: number;
};

export default function Home() {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [error, setError] = useState("");
    const [busqueda, setBusqueda] = useState("");
    useEffect(() => {
        const parametros = new URLSearchParams(window.location.search);
        setBusqueda(parametros.get("buscar") || "");
        fetch("http://localhost:3001/productos")
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("Error al cargar productos");
                }
                return respuesta.json();
            })
            .then((datos) => setProductos(datos))
            .catch(() => setError("No se pudieron cargar los productos"));
    }, []);

    const categorias = [
        ...new Set(productos.map((producto) => producto.categoria))
    ];
    const productosFiltrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    return (
        <main className="TiendaInicio">
            <Navbar activo="/" />
            <section className="container-fluid bg-dark text-white text-center py-5">
                <div className="container">
                    <h1>Botillería J&C</h1>
                    <p className="lead">
                        Bienvenidos a nuestra tienda
                    </p>

                    <a href="#productos" className="btn btn-light">
                        Ver productos
                    </a>
                </div>
            </section>
            <section id="productos" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">
                        Productos
                    </h2>

                    {error && (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    )}

                    {!error && productos.length === 0 && (
                        <p className="text-center">
                            Cargando productos...
                        </p>
                    )}

                    {[...new Set(productosFiltrados.map((producto) => producto.categoria))].map((categoria) => (
                        <div
                            id={categoria}
                            className="mb-5"
                            key={categoria}
                        >
                            <h3 className="text-capitalize mb-3">
                                {categoria}
                            </h3>

                            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                                {productosFiltrados
                                        .filter((producto) => producto.categoria === categoria)
                                    .map((producto) => (
                                        <div className="col" key={producto.id}>
                                            <div className="card card-producto h-100">
                                                <Link href={`/detalleProducto?id=${producto.id}`}>
                                                        <img
                                                            src={producto.imagen}
                                                            className="card-img-top imagen-catalogo"
                                                            alt={producto.nombre}
                                                        />
                                                    </Link>

                                                <div className="card-body d-flex flex-column">
                                                    <p className="text-muted small">
                                                        BOTILLERÍA J&C
                                                    </p>

                                                    <Link
                                                        href={`/detalleProducto?id=${producto.id}`}
                                                        className="text-decoration-none"
                                                    >
                                                        <h5 className="card-title text-capitalize">
                                                            {producto.nombre}
                                                        </h5>
                                                    </Link>

                                                    <p className="precio-nuevo fw-bold mt-auto">
                                                        ${producto.precio.toLocaleString("es-CL")}
                                                    </p>

                                                    <p className="small">
                                                        Stock: {producto.stock}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
