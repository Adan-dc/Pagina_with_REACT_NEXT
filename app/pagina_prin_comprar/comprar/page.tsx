"use client";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { calcularTotal, obtenerRutaPago } from "@/utils/funcionesTienda";
import {
  useEffect,
  useState,
  type FormEvent
} from "react";

interface ProductoCarrito {
    id: string;
    nombre: string;
    categoria: string;
    precio: number;
    stock: number;
    imagen: string;
    cantidad: number;
  }
  
  function formatearPrecio(precio: number) {
    return precio.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP"
    });
  }

export default function Comprar() {
    const router = useRouter();

    const [carrito, setCarrito] = useState<ProductoCarrito[]>([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const carritoGuardado = localStorage.getItem("carrito");

        if (carritoGuardado) {
        try {
            const productosGuardados: ProductoCarrito[] =
            JSON.parse(carritoGuardado);

            setCarrito(productosGuardados);
        } catch (error) {
            console.error("No se pudo leer el carrito", error);
            localStorage.removeItem("carrito");
        }
        }

        setCargando(false);
    }, []);

    const totalCompra = calcularTotal(carrito);

    function handlePagar(
        evento: FormEvent<HTMLFormElement>
    ) {
        evento.preventDefault();

        const rutaPago = obtenerRutaPago(totalCompra);

        if (totalCompra > 0) {
        const compraRealizada = {
            productos: carrito,
            total: totalCompra,
            fecha: new Date().toISOString(),
        };

        localStorage.setItem(
            "ultimaCompra",
            JSON.stringify(compraRealizada)
        );
        }

        router.push(rutaPago);
    }

    return (
      <main>
        <div className="text-center">
       
            <button className="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasMobileMenu" aria-controls="offcanvasMobileMenu">
                <span className="navbar-toggler-icon"></span> Menú
            </button>
        </div>

        <Navbar />
        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasMobileMenu"
            aria-labelledby="offcanvasMobileMenuLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasMobileMenuLabel">Menú</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">

                <div className="card">
                    <div className="row g-0">
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <img src="https://via.placeholder.com/80" alt="Avatar" className="avatar rounded-pill"/>
                            <img src="https://avatars.githubusercontent.com/u/138630362" alt="Avatar"
                                className="avatar rounded-pill"/>

                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title">Nombre del Usuario</h5>
                                <p className="card-text">correo@ejemplo.com</p>
                                <div className="d-flex justify-content-between">
                                    <a href="/#" className="btn btn-primary btn-sm">Ver Perfil</a>
                                    <a href="/#" className="btn btn-danger btn-sm">Cerrar Sesión</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex my-3">
                    <a href="/iniciar-sesion.html" className="btn btn-outline-primary ms-2">Iniciar Sesión</a>
                    <a href="/crear-sesion.html" className="btn btn-primary ms-2">Crear Cuenta</a>
                </div>


                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Categorías
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse show"
                                    data-bs-parent="#accordionFlushExample">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Cras justo odio
                                            <span className="badge bg-primary rounded-pill">14</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Cras justo odio
                                            <span className="badge bg-primary rounded-pill">14</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Cras justo odio
                                            <span className="badge bg-primary rounded-pill">14</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item"><a href="/#" className="link-none">Ofertas</a></li>
                    <li className="list-group-item"><a href="/#" className="link-none">Historial</a></li>
                </ul>
            </div>
        </div>

        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    
                    <div className="card">
                        <form className="card-body" onSubmit={handlePagar}>
                            <section id="productos-comprados" className="py-3">
                                <div className="container">
                                    <div className="d-flex justify-content-between">
                                        <div className="">
                                            <h4 className="card-title">Carrito de compra</h4>
                                            <p className="card-text">Completa la siguiente información</p>
                                        </div>
                                        <div className="btn btn-primary py-3">Total a pagar:{" "}<strong>{formatearPrecio(totalCompra)}</strong></div>
                                    </div>
                                    <div className="table-responsive mt-3">
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
                                            <tbody id="comprados-list">
                                                {cargando ? (
                                                    <tr>
                                                    <td colSpan={5} className="text-center py-4">
                                                        Cargando compra...
                                                    </td>
                                                    </tr>
                                                ) : carrito.length === 0 ? (
                                                    <tr>
                                                    <td
                                                        colSpan={5}
                                                        className="text-center text-secondary py-4"
                                                    >
                                                        No hay productos en el carrito
                                                    </td>
                                                    </tr>
                                                ) : (
                                                    carrito.map((producto) => {
                                                    const subtotal =
                                                        producto.precio * producto.cantidad;

                                                    return (
                                                        <tr key={producto.id}>
                                                        <td>
                                                            <img
                                                            src={producto.imagen}
                                                            alt={producto.nombre}
                                                            width="60"
                                                            height="45"
                                                            style={{ objectFit: "cover" }}
                                                            />
                                                        </td>

                                                        <td>{producto.nombre}</td>

                                                        <td>
                                                            {formatearPrecio(producto.precio)}
                                                        </td>

                                                        <td>{producto.cantidad}</td>

                                                        <td>
                                                            {formatearPrecio(subtotal)}
                                                        </td>
                                                        </tr>
                                                    );
                                                    })
                                                )}

                                                {!cargando && carrito.length > 0 && (
                                                    <tr>
                                                    <th colSpan={4} className="text-end">
                                                        Total:
                                                    </th>

                                                    <th>
                                                        {formatearPrecio(totalCompra)}
                                                    </th>
                                                    </tr>
                                                )}
                                                </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>
                            <div className="row">
                                <h4 className="card-title">Información del cliente</h4>
                                <p className="card-text">Completa la siguiente información</p>
                                <div className="col-6 mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre<small
                                            className="text-danger">*</small></label>
                                    <input type="text" className="form-control" id="nombre" name="nombre" required/>
                                </div>
                                <div className="col-6 mb-3">
                                    <label htmlFor="apellidos" className="form-label">Apellidos<small
                                            className="text-danger">*</small></label>
                                    <input type="text" className="form-control" id="apellidos" name="apellidos"
                                        required/>
                                </div>
        
                                <div className="mb-3 col-6">
                                    <label htmlFor="correo" className="form-label">Correo<small
                                            className="text-danger">*</small></label>
                                    <input type="email" className="form-control" id="correo" name="correo" required/>
                                </div>

                                <h4 className="card-title">Dirección de entrega de los productos</h4>
                                <p className="card-text">Ingrese direccion de forma detallada</p>
                                <div className="row">
                                    
                                    <div className="mb-3 col-12 col-md-6">
                                        <label htmlFor="fechaNacimiento" className="form-label">Calle<small
                                                className="text-danger">*</small></label>
                                        <input type="text" className="form-control" id="fechaNacimiento" name="fechaNacimiento" required/>
                                    </div>
                                    <div className="mb-3 col-12 col-md-6">
                                        <label htmlFor="fechaNacimiento" className="form-label">Departamento (opcional)</label>
                                        <input type="text" className="form-control" id="fechaNacimiento" name="fechaNacimiento" placeholder="Ej: 603"/>
                                    </div>

                                    <div className="mb-3 col-6 col-md-6">
                                        <label htmlFor="regionSelect" className="form-label">Región<small className="text-danger">*</small></label>
                                        <select className="form-select" id="regionSelect" required>
                                        <option value="" disabled>
                                            Seleccione una región
                                        </option>

                                        <option value="metropolitana">
                                            Región Metropolitana
                                        </option>

                                        <option value="valparaiso">
                                            Región de Valparaíso
                                        </option>

                                        <option value="ohiggins">
                                            Región de O’Higgins
                                        </option>
                                        </select>
                                    </div>
                                    <div className="mb-3 col-6 col-md-6">
                                        <label htmlFor="comunaSelect" className="form-label">Comuna<small className="text-danger">*</small></label>
                                        <select className="form-select" id="comunaSelect" required>
                                        <option value="" disabled>
                                            Seleccione una comuna
                                        </option>

                                        <option value="santiago">
                                            Santiago
                                        </option>

                                        <option value="providencia">
                                            Providencia
                                        </option>

                                        <option value="maipu">
                                            Maipú
                                        </option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Indicaciones para la entrega (opcional)</label>
                                        <textarea className="form-control" name="" id="" rows={3}
                                            placeholder="Ej.: Entre calles, color del edificio, no tiene timbre."></textarea>
                                    </div>

                                    <div className="text-end">
                                    <button className="btn btn-success btn-lg" type="submit" disabled={cargando} 
                                                    formNoValidate={totalCompra <= 0}> Pagar ahora{" "} 
                                                    <strong>{formatearPrecio(totalCompra)}</strong></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </main>
    )
  }