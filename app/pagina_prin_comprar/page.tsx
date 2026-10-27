"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { calcularTotal } from "@/utils/funcionesTienda";

interface Producto {
    id: string;
    nombre: string;
    categoria: string;
    precioAnterior?: number;
    precio: number;
    stock: number;
    imagen: string;
  }
  
  interface ProductoCarrito extends Producto {
    cantidad: number;
  }
  
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";
  
  function formatearPrecio(precio: number) {
    if (precio === 0) {
      return "FREE";
    }
  
    return precio.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP"
    });
}

export default function Carrito() {
        const [productos, setProductos] = useState<Producto[]>([]);
        const [carrito, setCarrito] = useState<ProductoCarrito[]>([]);
        const [cargando, setCargando] = useState(true);
        const [error, setError] = useState("");
      
        useEffect(() => {
          async function obtenerProductos() {
            try {
              const respuesta = await fetch(`${API_URL}/productos`);
      
              if (!respuesta.ok) {
                throw new Error("No se pudieron obtener los productos");
              }
      
              const datos: Producto[] = await respuesta.json();
              setProductos(datos);
            } catch (error) {
              console.error(error);
              setError("No fue posible conectarse con la API");
            } finally {
              setCargando(false);
            }
          }
      
          obtenerProductos();
      
          const carritoGuardado = localStorage.getItem("carrito");
      
          if (carritoGuardado) {
            try {
              const datosCarrito: ProductoCarrito[] =
                JSON.parse(carritoGuardado);
      
              setCarrito(datosCarrito);
            } catch (error) {
              console.error("El carrito guardado no es válido", error);
              localStorage.removeItem("carrito");
            }
          }
        }, []);
      
        function guardarCarrito(nuevoCarrito: ProductoCarrito[]) {
          setCarrito(nuevoCarrito);
          localStorage.setItem(
            "carrito",
            JSON.stringify(nuevoCarrito)
          );
        }
      
        function agregarAlCarrito(producto: Producto) {
          const productoExistente = carrito.find(
            (item) => item.id === producto.id
          );
      
          if (productoExistente) {
            if (productoExistente.cantidad >= producto.stock) {
              alert("No hay más unidades disponibles");
              return;
            }
      
            const nuevoCarrito = carrito.map((item) =>
              item.id === producto.id
                ? {
                    ...item,
                    cantidad: item.cantidad + 1
                  }
                : item
            );
      
            guardarCarrito(nuevoCarrito);
          } else {
            const nuevoProducto: ProductoCarrito = {
              ...producto,
              cantidad: 1
            };
      
            guardarCarrito([...carrito, nuevoProducto]);
          }
        }
      
        function aumentarCantidad(id: string) {
          const nuevoCarrito = carrito.map((producto) => {
            if (
              producto.id === id &&
              producto.cantidad < producto.stock
            ) {
              return {
                ...producto,
                cantidad: producto.cantidad + 1
              };
            }
      
            return producto;
          });
      
          guardarCarrito(nuevoCarrito);
        }
      
        function disminuirCantidad(id: string) {
          const nuevoCarrito = carrito.map((producto) =>
            producto.id === id
              ? {
                  ...producto,
                  cantidad: Math.max(1, producto.cantidad - 1)
                }
              : producto
          );
      
          guardarCarrito(nuevoCarrito);
        }
      
        function eliminarProducto(id: string) {
          const nuevoCarrito = carrito.filter(
            (producto) => producto.id !== id
          );
      
          guardarCarrito(nuevoCarrito);
        }
      
        function limpiarCarrito() {
          guardarCarrito([]);
        }
      
        const totalCarrito = calcularTotal(carrito);
      
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
                    <button className="btn btn-primary d-lg-none ms-2" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasMobileMenu" aria-controls="offcanvasMobileMenu">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                </div>
            </div>
        </nav>

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

                        <li className="nav-item">
                            <a className="btn btn-success ms-5" href="/carrito.html"><strong><i className="bi bi-cart4"></i> Carrito
                                    <strong><span>{formatearPrecio(totalCarrito)}</span></strong>
                                </strong></a>
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

        <section id="productos" className="py-5">
            <div className="container">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="text-start mb-4">Lista de productos</h2>
                            <div className="row g-3" id="product-list">
                            {cargando && (
                                <p className="text-secondary">
                                Cargando productos...
                                </p>
                            )}

                            {error && (
                                <p className="text-danger">
                                {error}
                                </p>
                            )}

                            {!cargando &&
                                !error &&
                                productos.map((producto) => (
                                <div
                                    className="col-6 col-xl-3"
                                    key={producto.id}
                                >
                                    <div className="card card-producto h-100">
                                    <img
                                        src={producto.imagen}
                                        className="card-img-top"
                                        alt={producto.nombre}
                                    />

                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">
                                        {producto.nombre}
                                        </h5>

                                        <p className="text-secondary mb-1">
                                        {producto.categoria}
                                        </p>

                                        {producto.precioAnterior !== undefined && (
                                        <p className="precio-descuento text-decoration-line-through mb-0">
                                            {formatearPrecio(producto.precioAnterior)}
                                        </p>
                                        )}

                                        <p className="precio-nuevo fw-bold">
                                        {formatearPrecio(producto.precio)}
                                        </p>

                                        <p className="mb-0">Stock</p>

                                        <p>
                                        Disponible: {producto.stock}
                                        </p>

                                        <button
                                        type="button"
                                        className="btn btn-dark mt-auto"
                                        onClick={() => agregarAlCarrito(producto)}
                                        disabled={producto.stock === 0}
                                        >
                                        {producto.stock > 0 ? "Añadir" : "Agotado"}
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className="col">
                            <h2>Carrito de Compras</h2>
                            <div className="table-responsive">
                                <table className="table table-striped" id="cart-table">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>Subtotal</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody id="cart-list">
                                    {carrito.length === 0 ? (
                                        <tr>
                                        <td
                                            colSpan={6}
                                            className="text-center text-secondary py-4"
                                        >
                                            El carrito está vacío
                                        </td>
                                        </tr>
                                    ) : (
                                        <>
                                        {carrito.map((producto) => {
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

                                                <td>
                                                <div className="d-flex align-items-center">
                                                    <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm"
                                                    onClick={() =>
                                                        disminuirCantidad(producto.id)
                                                    }
                                                    >
                                                    −
                                                    </button>

                                                    <span className="mx-2">
                                                    {producto.cantidad}
                                                    </span>

                                                    <button
                                                    type="button"
                                                    className="btn btn-outline-secondary btn-sm"
                                                    onClick={() =>
                                                        aumentarCantidad(producto.id)
                                                    }
                                                    disabled={
                                                        producto.cantidad >= producto.stock
                                                    }
                                                    >
                                                    +
                                                    </button>
                                                </div>
                                                </td>

                                                <td>
                                                {formatearPrecio(subtotal)}
                                                </td>

                                                <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() =>
                                                    eliminarProducto(producto.id)
                                                    }
                                                >
                                                    Eliminar
                                                </button>
                                                </td>
                                            </tr>
                                            );
                                        })}

                                        <tr>
                                            <th colSpan={4} className="text-end">
                                            Total
                                            </th>

                                            <th colSpan={2}>
                                            {formatearPrecio(totalCarrito)}
                                            </th>
                                        </tr>
                                        </>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-end">
                                <button id="purchase-button" className="btn btn-secondary btn-lg" type="button"
                                                onClick={limpiarCarrito} disabled={carrito.length === 0}>Limpiar</button>
                                <Link className="btn btn-success btn-lg" href="/pagina_prin_comprar/comprar">Comprar ahora</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                </div>
            </div>
        </section>


        <div className="modal fade" id="deleteModal" tabIndex={-1} aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLabel">Confirmar Eliminación</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ¿Estás seguro de que deseas eliminar este producto del carrito?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-danger" id="confirm-delete">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
      </main>
    )
  }