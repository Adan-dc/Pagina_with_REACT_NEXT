"use client";
import type { FormEvent } from "react";

export default function Dashboard_Productos_Editar() {
    return (
          <div className="Dashboard">
            <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
              <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="/dashboard">
                Botilleria J&C
              </a>
            </header>
    
    
      
            <div className="container-fluid">
              <div className="row">
                <aside className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                      <div className="offcanvas-md offcanvas-start bg-body-tertiary" tabIndex={-1} id="sidebarMenu"
                          aria-labelledby="sidebarMenuLabel">
                          <div className="offcanvas-header">
                              <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                  data-bs-target="#sidebarMenu" aria-label="Close"></button>
                          </div>
                          <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                              <ul className="nav flex-column">
                                  <li className="nav-item mx-2">
                                      <a href="/dashboard" className="nav-link nav-menu d-flex gap-2">
                                          <i className="bi bi-house-fill"></i>
                                          Dashboard
                                      </a>
                                  </li>
                                  <li className="nav-item mx-2">
                                      <a className="nav-link nav-menu d-flex gap-2" href="/dashboard_productos">
                                          <i className="bi bi-file-earmark"></i>
                                          Ordenes
                                      </a>
                                  </li>
                                  <li className="nav-item mx-2">
                                      <a className="nav-link nav-menu d-flex gap-2 nav-active" href="/dashboard_productos">
                                          <i className="bi bi-cart"></i>
                                          Productos
                                      </a>
                                  </li>
                                  <li className="nav-item mx-2">
                                      <a className="nav-link nav-menu d-flex gap-2" href="/dashboard_categoria">
                                          <i className="bi bi-list-ul"></i>
                                          Categorías
                                      </a>
                                  </li>
                                  <li className="nav-item mx-2">
                                      <a className="nav-link nav-menu d-flex gap-2" href="/dashboard_usuarios">
                                          <i className="bi bi-people"></i>
                                          Usuarios
                                      </a>
                                  </li>
                                  <li className="nav-item mx-2">
                                      <a className="nav-link nav-menu d-flex gap-2" href="/admin/reportes">
                                          <i className="bi bi-graph-up"></i>
                                          Reportes
                                      </a>
                                  </li>
                              </ul>
      
                              <hr className="my-3"/>
      
                              <ul className="nav flex-column mb-auto">
                                  <li className="nav-item mx-2">
                                      <a className="nav-link nav-menu d-flex gap-2" href="/admin/perfil">
                                          <i className="bi bi-person-circle"></i>
                                          Perfil
                                      </a>
                                  </li>
                              </ul>
      
                              <hr className="my-3"/>
      
      
                              <ul className="nav flex-column mb-auto">
                                  <li className="nav-item mt-2 mx-2">
                                      <a className="mx-4 text-center d-flex gap-2 btn btn-dark" href="/">
                                          <i className="bi bi-shop"></i>
                                          <strong>Tienda</strong>
                                      </a>
                                  </li>
                                  <li className="nav-item mt-2 mx-2">
                                      <a className="mx-4 text-center d-flex gap-2 btn btn-danger" href="/inicioSesion">
                                          <i className="bi bi-door-closed"></i>
                                          Cerrar Sesión
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                </aside>
      
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mb-3">
                    <div className="mt-4">
                        <div className="col-sm-12">
                            <h4>
                                <a href="/dashboard_productos" className="text-secondary me-2 decoration-none">
                                    <i className="bi bi-arrow-left-circle-fill"></i>
                                </a>
                                Editar producto
                            </h4>
                        </div>
                        <div className="card text-start">
                            <div className="card-body">
                                <form onSubmit={handleGuardar}>
                                    <div className="mb-3 col-6 col-md-4">
                                            <label htmlFor="productCategory" className="form-label">Producto<small className="text-danger">*</small></label>
                                            <select className="form-select" id="productCategory" defaultValue="" required>
                                                <option value="" disabled>Selecciona un producto</option>
                                                <option value="Blue_Label">Blue Label</option>
                                                <option value="Lemon_Stone">Lemon Stone</option>
                                                <option value="Vodka">Vodka</option>
                                                <option value="Coca-Cola">Coca-Cola</option>
                                                <option value="Vino">Vino Casillero del diablo</option>
                                                <option value="Pisco">Pisco</option>
                                                <option value="Licores">Jarabe de Menta</option>
                                                <option value="Whisky">Whisky</option>
                                            </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="productName" className="form-label">Nombre del Producto<small className="text-danger">*</small></label>
                                        <input type="text" className="form-control" id="productName" placeholder="Ingrese el nombre del producto" required/>
                                    </div>
    
                                    <div className="mb-3">
                                        <label htmlFor="productDescription" className="form-label">Descripción<small className="text-danger">*</small></label>
                                        <textarea className="form-control" id="productDescription" rows={3} placeholder="Ingrese una descripción del producto" required></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="mb-3 col-6 col-md-4">
                                            <label htmlFor="productPrice" className="form-label">Precio<small className="text-danger">*</small></label>
                                            <input type="number" className="form-control" id="productPrice" placeholder="Ingrese el precio del producto" required/>
                                        </div>
    
                                        <div className="mb-3 col-6 col-md-4">
                                            <label htmlFor="productPrice" className="form-label">Stock<small className="text-danger">*</small></label>
                                            <input type="number" className="form-control" id="productPrice" placeholder="Cantidad de productos" required/>
                                        </div>
                                        <div className="mb-3 col-6 col-md-4">
                                            <label htmlFor="productPrice" className="form-label">Stock crítico<small className="text-danger">*</small></label>
                                            <input type="number" className="form-control" id="productPrice" placeholder="Cantidad de productos alerta" required/>
                                        </div>
                                        <div className="mb-3 col-6 col-md-4">
                                            <label htmlFor="productCategory" className="form-label">Categoría<small className="text-danger">*</small></label>
                                            <select className="form-select" id="productCategory" defaultValue="" required>
                                                <option value="" disabled>Seleccione una categoría</option>
                                                <option value="Cervezas">Cervezas</option>
                                                <option value="Ron">Ron</option>
                                                <option value="Vodka">Vodka</option>
                                                <option value="Bebidas">Bebidas</option>
                                                <option value="Vinos">Vinos</option>
                                                <option value="Pisco">Pisco</option>
                                                <option value="Licores">Licores</option>
                                                <option value="Whisky">Whisky</option>
                                            </select>
                                        </div>
                                        <div className="mb-3 col-6 col-md-4">
                                            <label htmlFor="productAvailability" className="form-label">Disponibilidad<small className="text-danger">*</small></label>
                                            <select className="form-select" id="productAvailability" required>
                                                <option value="Disponible">Disponible</option>
                                                <option value="Agotado">Agotado</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="productImage" className="form-label">Imagen del Producto</label>
                                        <input type="file" className="form-control" id="productImage" accept="image/*"/>
                                    </div>
    
                                    <div className="text-end">
                                        <button type="submit" className="btn btn-primary">Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
              </div>
            </div>
          </div>
        )
      }
    
      function handleGuardar(evento: FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        alert("Se ha creado editado el producto");
      }
      