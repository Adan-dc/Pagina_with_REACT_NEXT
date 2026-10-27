
"use client";

import { useEffect, useState, Suspense } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

type ProductoComprado = {
    nombre: string;
    precio: number;
    cantidad: number;
    imagen?: string;
};

type Orden = {
    id: string;
    codigo: string;
    fecha: string;
    monto: number;
    cliente?: string;
    nombre?: string;
    apellidos?: string;
    correo?: string;
    direccion?: string;
    departamento?: string;
    region?: string;
    comuna?: string;
    indicaciones?: string;
    productos?: ProductoComprado[];
};
type Usuario = {
    id: string;
    nombreCompleto: string;
    correo: string;
    telefono: string;
    tipo: string;
};
function DetalleBoleta() {
    const params = useParams();
    const id = params.id;

    const [orden, setOrden] = useState<Orden | null>(null);
    const [error, setError] = useState("");
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    useEffect(() => {
    if (!id) return;

    fetch("http://localhost:3001/usuarios/11")
        .then((respuesta) => respuesta.json())
        .then((datos) => setUsuario(datos))
        .catch(() => console.log("No se pudo cargar el usuario"));

    fetch(`http://localhost:3001/ordenes/${id}`)
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error("No se encontró la orden");
            }
            return respuesta.json();
        })
        .then((datos) => setOrden(datos))
        .catch(() => setError("No se pudo cargar la boleta"));
    }, [id]);

    return (
        <div className="Dashboard">
            <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link href="/dashboard" className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white">
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
                                            <a href="/dashboard_productos" className="nav-link nav-menu d-flex gap-2">
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
                                            <a href="/dashboard_usuarios" className="nav-link nav-menu d-flex gap-2">
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
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 MostrarBoleta">
                        <div className="mt-4">
                            <h4>
                                <Link
                                    href="/admin/ordenes"
                                    className="text-secondary me-2 text-decoration-none"
                                >
                                    <i className="bi bi-arrow-left-circle-fill"></i>
                                </Link>
                                Orden de compra #{id}
                            </h4>

                            {error && <p className="text-danger">{error}</p>}

                            {!orden && !error && <p>Cargando boleta...</p>}

                            {orden && (
                                <>
                                    <p className="card-text">
                                        Boleta emitida {orden.fecha || "Sin fecha"}
                                    </p>

                                    <div className="card text-start mb-5">
                                        <div className="card-body">
                                            <section className="py-3">
                                                <div className="container">
                                                    <h5 className="card-title">
                                                        Orden de compra. nro #{orden.id}
                                                    </h5>

                                                    <div>
                                                        <em>
                                                            <small>
                                                                Código de orden: {orden.codigo}
                                                            </small>
                                                        </em>
                                                    </div>

                                                    <div className="row my-3">

                                                        {/* DATOS DEL CLIENTE */}
                                                        <div className="card mb-3">
                                                            <div className="card-body">
                                                                <h5 className="card-title">Datos del cliente</h5>

                                                                <p className="text-muted small">
                                                                    Cliente de ejemplo de la API
                                                                </p>

                                                                <div className="row">
                                                                    <div className="col-12 col-md-4 mb-3">
                                                                        <label className="form-label">Nombre</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={usuario?.nombreCompleto.split(" ")[0] || ""}
                                                                            disabled
                                                                            readOnly
                                                                        />
                                                                    </div>

                                                                    <div className="col-12 col-md-4 mb-3">
                                                                        <label className="form-label">Apellidos</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={usuario?.nombreCompleto.split(" ").slice(1).join(" ") || ""}
                                                                            disabled
                                                                            readOnly
                                                                        />
                                                                    </div>

                                                                    <div className="col-12 col-md-4 mb-3">
                                                                        <label className="form-label">Correo</label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            value={usuario?.correo || ""}
                                                                            disabled
                                                                            readOnly
                                                                        />
                                                                    </div>

                                                                    <div className="col-12 col-md-4 mb-3">
                                                                        <label className="form-label">Teléfono</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={usuario?.telefono || ""}
                                                                            disabled
                                                                            readOnly
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        {/* DIRECCIÓN DE ENTREGA */}
                                                        <div className="card mb-3">
                                                            <div className="card-body">
                                                                <h5 className="card-title">
                                                                    Dirección de entrega de los productos
                                                                </h5>

                                                                <div className="row">
                                                                    <div className="mb-3 col-12 col-md-6">
                                                                        <label className="form-label">Calle</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={orden.direccion || ""}
                                                                            disabled
                                                                            readOnly
                                                                        />
                                                                    </div>

                                                                    <div className="mb-3 col-12 col-md-6">
                                                                        <label className="form-label">
                                                                            Departamento (opcional)
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={orden.departamento || ""}
                                                                            disabled
                                                                            readOnly
                                                                        />
                                                                    </div>

                                                                    <div className="mb-3 col-6 col-md-6">
                                                                        <label className="form-label">Región</label>
                                                                        <select className="form-select" disabled defaultValue={orden.region || ""}>
                                                                            <option value={orden.region || ""}>
                                                                                {orden.region || "Sin región"}
                                                                            </option>
                                                                        </select>
                                                                    </div>

                                                                    <div className="mb-3 col-6 col-md-6">
                                                                        <label className="form-label">Comuna</label>
                                                                        <select className="form-select" disabled defaultValue={orden.comuna || ""}>
                                                                            <option value={orden.comuna || ""}>
                                                                                {orden.comuna || "Sin comuna"}
                                                                            </option>
                                                                        </select>
                                                                    </div>

                                                                    <div className="mb-3">
                                                                        <label className="form-label">
                                                                            Indicaciones para la entrega (opcional)
                                                                        </label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            rows={3}
                                                                            value={orden.indicaciones || ""}
                                                                            disabled
                                                                            readOnly
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* PRODUCTOS COMPRADOS */}
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h5 className="card-title">
                                                                    Detalle de la compra
                                                                </h5>

                                                                <div className="table-responsive">
                                                                    <table className="table table-hover table-sm">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Imagen</th>
                                                                                <th>Nombre</th>
                                                                                <th>Precio</th>
                                                                                <th>Cantidad</th>
                                                                                <th>Subtotal</th>
                                                                            </tr>
                                                                        </thead>

                                                                        <tbody>
                                                                            {(orden.productos || []).map((producto, indice) => (
                                                                                <tr key={indice}>
                                                                                    <td>
                                                                                        {producto.imagen ? (
                                                                                            <img
                                                                                                src={producto.imagen}
                                                                                                alt={producto.nombre}
                                                                                                width={50}
                                                                                            />
                                                                                        ) : (
                                                                                            <i className="bi bi-image"></i>
                                                                                        )}
                                                                                    </td>
                                                                                    <td>{producto.nombre}</td>
                                                                                    <td>
                                                                                        ${Number(producto.precio || 0).toLocaleString("es-CL")}
                                                                                    </td>
                                                                                    <td>{producto.cantidad}</td>
                                                                                    <td>
                                                                                        ${(
                                                                                            Number(producto.precio || 0) *
                                                                                            Number(producto.cantidad || 0)
                                                                                        ).toLocaleString("es-CL")}
                                                                                    </td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* TOTAL PAGADO */}
                                                    <div className="text-center mb-3">
                                                        <div className="card bg-white">
                                                            <div className="card-body">
                                                                <h4>
                                                                    Total pagado: ${Number(
                                                                        orden.monto ??
                                                                        (orden.productos || []).reduce(
                                                                            (suma, producto) =>
                                                                                suma + producto.precio * producto.cantidad,
                                                                            0
                                                                        )
                                                                    ).toLocaleString("es-CL")}
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
export default function MostrarBoleta() {
    return (
        <Suspense fallback={<p>Cargando boleta...</p>}>
            <DetalleBoleta />
        </Suspense>
    );
}
