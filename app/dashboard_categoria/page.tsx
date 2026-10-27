export default function Dashboard_Categoria() {
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
                                  <a className="nav-link nav-menu d-flex gap-2" href="dashboard_productos">
                                      <i className="bi bi-cart"></i>
                                      Productos
                                  </a>
                              </li>
                              <li className="nav-item mx-2">
                                  <a className="nav-link nav-menu d-flex gap-2 nav-active" href="/dashboard_categoria">
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
  
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="mt-4">
                    <h4 className="card-title">Categorias</h4>
                    <p className="card-text">Listado de categorias</p>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link nav-menu active" aria-current="page" href="/dashboard_categoria">Listado de categorias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-menu" href="/dashboard_categoria/nueva">Nueva Categoria</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-menu" aria-current="page" href="/dashboard_categoria/editar">Editar Categoria</a>
                        </li>
                    </ul>
                    <div className="card text-start">
                        <div className="card-body">
                            <div className="table-responsive small">
                                <table className="table table-striped table-sm table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Cantidad de productos</th>
                                            <th scope="col">Disponible</th>
                                            <th scope="col">Descripcion</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Cerveza</td>
                                            <td>30</td>
                                            <td>true</td>
                                            <td>23/10/26</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Cerveza</td>
                                            <td>30</td>
                                            <td>true</td>
                                            <td>23/10/26</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Cerveza</td>
                                            <td>30</td>
                                            <td>true</td>
                                            <td>23/10/26</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Cerveza</td>
                                            <td>30</td>
                                            <td>true</td>
                                            <td>23/10/26</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Cerveza</td>
                                            <td>30</td>
                                            <td>true</td>
                                            <td>23/10/26</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Cerveza</td>
                                            <td>30</td>
                                            <td>true</td>
                                            <td>23/10/26</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>Cerveza</td>
                                            <td>30</td>
                                            <td>true</td>
                                            <td>23/10/26</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>Cerveza</td>
                                            <td>30</td>
                                            <td>true</td>
                                            <td>23/10/26</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td>Cerveza</td>
                                            <td>30</td>
                                            <td>true</td>
                                            <td>23/10/26</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">10</th>
                                            <td>Cerveza</td>
                                            <td>30</td>
                                            <td>true</td>
                                            <td>23/10/26</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">11</th>
                                            <td>Cerveza</td>
                                            <td>30</td>
                                            <td>true</td>
                                            <td>23/10/26</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">12</th>
                                            <td>Cerveza</td>
                                            <td>30</td>
                                            <td>true</td>
                                            <td>23/10/26</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">13</th>
                                            <td>Cerveza</td>
                                            <td>30</td>
                                            <td>true</td>
                                            <td>23/10/26</td>
                                        </tr>
                                    </tbody>
                                </table>
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
  