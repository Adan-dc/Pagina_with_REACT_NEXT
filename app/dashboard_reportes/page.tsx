export default function Dashboard_Reporte() {
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
                                  <a className="nav-link nav-menu d-flex gap-2" href="/dashboard">
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
                                  <a className="nav-link nav-menu d-flex gap-2" href="/dashboard_productos">
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
                                  <a className="nav-link nav-menu d-flex gap-2 nav-active" href="/dashboard_usuarios">
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
                    <h4 className="card-title">Reportes</h4>
                    <p className="card-text">Explora nuestros reportes detallados que ofrecen una visión integral del rendimiento empresarial, tendencias de mercado y segmentación de clientes.</p>
        
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4>1. Gráfico de Barras: Ventas Mensuales</h4>
                                    <small>Este gráfico muestra las ventas mensuales para el primer semestre del año. Proporciona una visión clara de las fluctuaciones en las ventas, identificando los meses con mejor y peor rendimiento.</small>
                                    <canvas id="barChart"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4>2. Gráfico de Líneas: Crecimiento de Usuarios</h4>
                                    <small>Este gráfico de líneas representa el crecimiento de usuarios a lo largo de seis meses. Muestra tendencias en la adquisición de nuevos usuarios y permite analizar el impacto de campañas de marketing.</small>
                                    <canvas id="lineChart"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4>3. Gráfico Circular: Distribución de Productos</h4>
                                    <small>El gráfico circular muestra la distribución de ventas entre diferentes categorías de productos. Permite identificar qué categoría es la más popular entre los consumidores.</small>
                                    <canvas id="pieChart"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4>4. Gráfico de Radar: Evaluación de Proyectos</h4>
                                    <small>Este gráfico de radar evalúa el desempeño de un proyecto en varias etapas: planificación, ejecución, entrega y evaluación. Ayuda a visualizar áreas de fortaleza y mejora.</small>
                                    <canvas id="radarChart"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4>5. Gráfico de Donut: Segmentación de Clientes</h4>
                                    <small>El gráfico de donut representa la segmentación de clientes en categorías como nuevos, recurrentes y perdidos. Ofrece insights sobre la lealtad del cliente y efectividad de retención.</small>
                                    <canvas id="doughnutChart"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4>6. Gráfico de Polar Area: Popularidad de Marcas</h4>
                                    <small>Este gráfico de área polar compara la popularidad de diferentes marcas dentro de un mercado. Muestra cómo los consumidores perciben cada marca en términos de reconocimiento.</small>
                                    <canvas id="polarAreaChart"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4>7. Gráfico de Dispersión: Análisis de Mercado</h4>
                                    <small>El gráfico de dispersión analiza el mercado en términos de correlación entre dos variables, como precio y demanda, para identificar patrones o relaciones.</small>
                                    <canvas id="scatterChart"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4>8. Gráfico de Burbujas: Evaluación de Riesgos</h4>
                                    <small>Este gráfico de burbujas evalúa diferentes riesgos potenciales en proyectos. El tamaño de cada burbuja representa la magnitud del riesgo, mientras que la posición indica probabilidad e impacto.</small>
                                    <canvas id="bubbleChart"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4>9. Gráfico de Barras Apiladas: Producción Anual</h4>
                                    <small>El gráfico de barras apiladas presenta la producción anual de diferentes productos. Ayuda a identificar tendencias de producción y contribuciones relativas de cada producto.</small>
                                    <canvas id="stackedBarChart"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4>10. Gráfico de Línea Apilada: Ingresos vs Gastos</h4>
                                    <small>Este gráfico de línea apilada compara ingresos y gastos anuales, visualizando cómo se relacionan estas métricas para ayudar a evaluar la salud financiera.</small>
                                    <canvas id="stackedLineChart"></canvas>
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
  