"use client";

import { useEffect, useState } from "react";
import { calcularTotal, ItemCarrito } from "@/utils/funcionesTienda";

function formatearPrecio(precio: number) {
    return precio.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP"
    });
  }

export default function Pago_Correcto() {
    const [totalPagado, setTotalPagado] = useState(0);

    useEffect(() => {
        const compraGuardada =
        localStorage.getItem("ultimaCompra");

        if (compraGuardada) {
        try {
            const compra = JSON.parse(compraGuardada) as {
                productos?: ItemCarrito[];
              };
              
              const productosComprados = compra.productos ?? [];
              const totalCalculado = calcularTotal(productosComprados);
              
              setTotalPagado(totalCalculado);
        } catch (error) {
            console.error("No fue posible recuperar la compra",error);
            setTotalPagado(0);
        }
        }
    }, []);

    return (
      <main>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="https://via.placeholder.com/40" alt="Logo" className="d-inline-block align-text-top"/>
                </a>
                <div className="collapse navbar-collapse justify-content-center" id="navbarTopContent">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
                <div className="d-flex">
                    <a href="/iniciar-sesion.html" className="btn btn-outline-primary ms-2">Iniciar Sesión</a>
                    <a href="/crear-sesion.html" className="btn btn-primary ms-2">Crear Cuenta</a>
                </div>
            </div>
        </nav>

        <div className="text-center">
       
            <button className="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasMobileMenu" aria-controls="offcanvasMobileMenu">
                <span className="navbar-toggler-icon"></span> Menú
            </button>
        </div>

        <nav className="navbar navbar-expand-lg bg-body-tertiary d-none d-lg-block">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-center" id="navbarBottomContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/categorias.html">Acción</a></li>
                                <li><a className="dropdown-item" href="/categorias.html">Aventura</a></li>
                                <li><a className="dropdown-item" href="/categorias.html">Estrategia</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ofertas.html">Ofertas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/nosotros.html">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog.html">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contacto.html">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

       
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
                        <div className="card-body">
                            <section id="productos-comprados" className="py-3">
                                <div className="container">
                                    <div className="text-end">
                                        <small>Código orden: ORDER12345</small>
                                    </div>
                                    <h3 className="card-title">
                                        <i className="bi bi-check-circle text-success"></i>
                                        Se ha realizado la compra. nro #20240705
                                    </h3>
                                    <div className="row">
                                        <p className="card-text">Completa la siguiente información</p>
                                        <div className="col-6 mb-3 col-md-4">
                                            <label htmlFor="nombre" className="form-label">Nombre<small
                                                    className="text-danger">*</small></label>
                                            <input type="text" className="form-control" id="nombre" value="pedro" disabled readOnly name="nombre" required/>
                                        </div>
                                        <div className="col-6 mb-3 col-md-4">
                                            <label htmlFor="apellidos" className="form-label">Apellidos<small
                                                    className="text-danger">*</small></label>
                                            <input type="text" className="form-control" id="apellidos" value="hacker" disabled readOnly name="apellidos"
                                                required/>
                                        </div>
                
                                        <div className="mb-3 col-6 col-md-4">
                                            <label htmlFor="correo" className="form-label">Correo<small
                                                    className="text-danger">*</small></label>
                                            <input type="email" className="form-control" id="correo" name="correo" disabled value="pedro.hacer20@example.com" required/>
                                        </div>
            
                                        <h5 className="card-title">Dirección de entrega de los productos</h5>
                                        <div className="row">
                                            
                                            <div className="mb-3 col-12 col-md-6">
                                                <label htmlFor="fechaNacimiento" className="form-label">Calle<small
                                                        className="text-danger">*</small></label>
                                                <input type="text" className="form-control" id="fechaNacimiento" value="Los crisantemos, Edificio Norte" disabled name="fechaNacimiento" required/>
                                            </div>
                                            <div className="mb-3 col-12 col-md-6">
                                                <label htmlFor="fechaNacimiento" className="form-label">Departamento (opcional)</label>
                                                <input type="text" className="form-control" id="fechaNacimiento"  name="fechaNacimiento" disabled value="Depto 603" placeholder="Ej: 603"/>
                                            </div>
            
                                            <div className="mb-3 col-6 col-md-6">
                                                <label htmlFor="regionSelect" className="form-label">Región<small className="text-danger">*</small></label>
                                                <select className="form-select" id="regionSelect" disabled required>
                                                </select>
                                            </div>
                                            <div className="mb-3 col-6 col-md-6">
                                                <label htmlFor="comunaSelect" className="form-label">Comuna<small className="text-danger">*</small></label>
                                                <select className="form-select" id="comunaSelect" disabled required>
                                                </select>
                                            </div>
            
                                            <div className="mb-3">
                                                <label htmlFor="indicaciones" className="form-label">Indicaciones para la entrega (opcional)</label>
                                                <textarea
                                                    className="form-control"
                                                    id="indicaciones"
                                                    name="indicaciones"
                                                    rows={3}
                                                    placeholder="Ej.: Entre calles, color del edificio, no tiene timbre."
                                                    defaultValue="El martes..."
                                                    disabled
                                                    />
                                            </div>
            
                                        </div>
            
                                    </div>

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
                                            <tbody id="comprados-list">
                                            
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="text-center mb-3">
                                        <div className="card bg-white">
                                            <div className="card-body">
                                                <h4>Total pagado:{" "}<strong>{formatearPrecio(totalPagado)}</strong></h4>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="text-center">
                                        <button className="btn btn-danger btn-sm" type="button" onClick={() => handleMensaje("Boleta descargada")}>Imprimir boleta en PDF</button>
                                        <button className="btn btn-success btn-sm" onClick={() => handleMensaje("Se ha enviado la boleta por correo")}>Enviar boleta por email</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    )
  }
  function handleMensaje(mensaje: string) {
    alert(mensaje);
  }