"use client";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { calcularTotal, ItemCarrito } from "@/utils/funcionesTienda";
import { useEffect, useState } from "react";

function formatearPrecio(precio: number) {
    return precio.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    });
  }

export default function Pago_Error() {
    const [totalCompra, setTotalCompra] = useState(0);

    useEffect(() => {
      const carritoGuardado = localStorage.getItem("carrito");
  
      if (!carritoGuardado) {
        setTotalCompra(0);
        return;
      }
  
      try {
        const carrito = JSON.parse(carritoGuardado) as ItemCarrito[];
        const totalCalculado = calcularTotal(carrito);
  
        setTotalCompra(totalCalculado);
      } catch (error) {
        console.error("No se pudo obtener el carrito:", error);
        setTotalCompra(0);
      }
    }, []);

    return (
      <main>
        <Navbar />
        <div className="text-center">
       
            <button className="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasMobileMenu" aria-controls="offcanvasMobileMenu">
                <span className="navbar-toggler-icon"></span> Menú
            </button>
        </div>


       
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
                                        <i className="bi bi-x-circle text-danger"></i>
                                        No se pudo realizar el pago. nro #20240705
                                    </h3>
                                    <div className="row">
                                        <p className="card-text">Detalle de comprar</p>

                                        <div className="text-center mb-3">
                                            <Link className="btn btn-success btn-lg" href="/pagina_prin_comprar/comprar" >VOLVER A REALIZAR EL PAGO</Link>
                                        </div>


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
                                                <label htmlFor="" className="form-label">Indicaciones para la entrega (opcional)</label>
                                                <textarea
                                                    className="form-control"
                                                    id="indicaciones"
                                                    name="indicaciones"
                                                    rows={3}
                                                    placeholder="Ej.: Entre calles, color del edificio, no tiene timbre."
                                                    defaultValue="El martes no estaremos en el depto, pero puede dejárselo con el conserje."
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
                                                <h4>Total pagado:{" "}<strong>{formatearPrecio(totalCompra)}</strong></h4>
                                            </div>
                                        </div>
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