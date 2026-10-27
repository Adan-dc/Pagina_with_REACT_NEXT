export default function Dashboard() {
    return (
      <div className="Dashboard">
        <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
          <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="/dashboard">
            Botillería J&C
          </a>
        </header>
  
        <div className="container-fluid">
          <div className="row">
            <aside className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                  <div className="offcanvas-md offcanvas-start bg-body-tertiary" tabIndex={-1} id="sidebarMenu"
                      aria-labelledby="sidebarMenuLabel">
                      <div className="offcanvas-header">
                          <h5 className="offcanvas-title" id="sidebarMenuLabel">Botillería J&C</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                              data-bs-target="#sidebarMenu" aria-label="Close"></button>
                      </div>
                      <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                          <ul className="nav flex-column">
                              <li className="nav-item mx-2">
                                  <a href="/dashboard" className="nav-link nav-menu d-flex gap-2 nav-active">
                                      <i className="bi bi-house-fill"></i>
                                      Dashboard
                                  </a>
                              </li>
                              <li className="nav-item mx-2">
                                  <a className="nav-link nav-menu d-flex gap-2" href="/admin/ordenes">
                                      <i className="bi bi-file-earmark"></i>
                                      Ordenes
                                  </a>
                              </li>
                              <li className="nav-item mx-2">
                                  <a className="nav-link nav-menu d-flex gap-2" href="/admin/productos-criticos">
                                      <i className="bi bi-cart"></i>
                                      Productos
                                  </a>
                              </li>
                              <li className="nav-item mx-2">
                                  <a className="nav-link nav-menu d-flex gap-2" href="/admin/categoria/index.html">
                                      <i className="bi bi-list-ul"></i>
                                      Categorías
                                  </a>
                              </li>
                              <li className="nav-item mx-2">
                                  <a className="nav-link nav-menu d-flex gap-2" href="/admin/usuarios/historial">
                                      <i className="bi bi-people"></i>
                                      Usuarios
                                  </a>
                              </li>
                              <li className="nav-item mx-2">
                                  <a className="nav-link nav-menu d-flex gap-2" href="/admin/reporte/index.html">
                                      <i className="bi bi-graph-up"></i>
                                      Reportes
                                  </a>
                              </li>
                          </ul>
  
                          <hr className="my-3"/>
  
                          <ul className="nav flex-column mb-auto">
                              <li className="nav-item mx-2">
                                  <a className="nav-link nav-menu d-flex gap-2" href="/admin/perfil/index.html">
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
                      <h4 className="card-title">Dashboard</h4>
                      <p className="card-text">Resumen de las actividades diarias</p>
  
                      <div className="container dashboard-section mb-3">
                          <div className="row g-4">
                              <div className="col-6 col-md-4">
                                  <div className="card text-white dashboard-card card-primary">
                                      <div className="card-body">
                                          <div className="d-flex align-items-center">
                                              <div className="dashboard-icon">
                                                  <i className="bi bi-cart-fill"></i>
                                              </div>
                                              <div className="ms-5">
                                                  <h5 className="card-title">Compras</h5>
                                                  <h3 className="card-text">1,234</h3>
                                              </div>
                                          </div>
                                          <p className="card-text text-center mt-3">Probabilidad de aumento: <strong>20%</strong></p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-6 col-md-4">
                                  <div className="card text-white dashboard-card card-success">
                                      <div className="card-body">
                                          <div className="d-flex align-items-center">
                                              <div className="dashboard-icon">
                                                  <i className="bi bi-box-seam"></i>
                                              </div>
                                              <div className="ms-5">
                                                  <h5 className="card-title">Productos</h5>
                                                  <h3 className="card-text">400</h3>
                                              </div>
                                          </div>
                                          <p className="card-text text-center mt-3">Inventario actual: <strong>500</strong></p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-6 col-md-4">
                                  <div className="card text-white dashboard-card card-warning">
                                      <div className="card-body">
                                          <div className="d-flex align-items-center">
                                              <div className="dashboard-icon">
                                                  <i className="bi bi-people-fill"></i>
                                              </div>
                                              <div className="ms-5">
                                                  <h5 className="card-title">Usuarios</h5>
                                                  <h3 className="card-text">890</h3>
                                              </div>
                                          </div>
                                          <p className="card-text text-center mt-3">Nuevos usuarios este mes: <strong>120</strong></p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
  
                      <div className=" mt-3">
                          <div className="row row-cols-2 row-cols-md-4 g-4">
                          
                              <div className="col">
                                  <div className="card h-100 card-item">
                                      <div className="card-body text-center">
                                          <i className="bi bi-speedometer2 card-icon"></i>
                                          <h5 className="card-title mt-3">Dashboard</h5>
                                          <p className="card-text">Visión general de todas las métricas y estadísticas clave del sistema.</p>
                                      </div>
                                  </div>
                              </div>
                           
                              <div className="col">
                                  <div className="card h-100 card-item">
                                      <div className="card-body text-center">
                                          <i className="bi bi-cart-check card-icon"></i>
                                          <h5 className="card-title mt-3">Órdenes</h5>
                                          <p className="card-text">Gestión y seguimiento de todas las órdenes de compra realizadas.</p>
                                      </div>
                                  </div>
                              </div>
                       
                              <div className="col">
                                  <div className="card h-100 card-item">
                                      <div className="card-body text-center">
                                          <i className="bi bi-box-seam card-icon"></i>
                                          <h5 className="card-title mt-3">Productos</h5>
                                          <p className="card-text">Administrar inventario y detalles de los productos disponibles.</p>
                                      </div>
                                  </div>
                              </div>
                          
                              <div className="col">
                                  <div className="card h-100 card-item">
                                      <div className="card-body text-center">
                                          <i className="bi bi-tags card-icon"></i>
                                          <h5 className="card-title mt-3">Categorías</h5>
                                          <p className="card-text">Organizar productos en categorías para facilitar su navegación.</p>
                                      </div>
                                  </div>
                              </div>
                            
                              <div className="col">
                                  <div className="card h-100 card-item">
                                      <div className="card-body text-center">
                                          <i className="bi bi-people card-icon"></i>
                                          <h5 className="card-title mt-3">Usuarios</h5>
                                          <p className="card-text">Gestión de cuentas de usuario y sus roles dentro del sistema.</p>
                                      </div>
                                  </div>
                              </div>
                           
                              <div className="col">
                                  <div className="card h-100 card-item">
                                      <div className="card-body text-center">
                                          <i className="bi bi-bar-chart-line card-icon"></i>
                                          <h5 className="card-title mt-3">Reportes</h5>
                                          <p className="card-text">Generación de informes detallados sobre las operaciones del sistema.</p>
                                      </div>
                                  </div>
                              </div>
          
                              <div className="col">
                                  <div className="card h-100 card-item">
                                      <div className="card-body text-center">
                                          <i className="bi bi-person card-icon"></i>
                                          <h5 className="card-title mt-3">Perfil</h5>
                                          <p className="card-text">Administración de la información personal y configuraciones de cuenta.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col">
                                  <div className="card h-100 card-item">
                                      <div className="card-body text-center">
                                          <i className="bi bi-shop card-icon"></i>
                                          <h5 className="card-title mt-3">Tienda</h5>
                                          <p className="card-text">Visualiza tu tienda en tiempo real, visualiza los reportes de los usuarios.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
            </main>
          </div>
        </div>
      </div>
    )
  }
  