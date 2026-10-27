export default function Home() {
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
                <a href="/inicioSesion" className="btn btn-outline-primary ms-2">Iniciar Sesión</a>
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
                        <a className="nav-link active" href="/"><strong>Home</strong></a>
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
                        <a className="btn btn-success ms-5" href="/pagina_prin_comprar"><strong><i className="bi bi-cart4"></i> Carrito <span className=""></span>
                        </strong></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="">
        <div className="d-md-none">
            <div id="carouselMobile" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselMobile" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselMobile" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselMobile" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://via.placeholder.com/900x500" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Nuevos Lanzamientos</h5>
                            <p>Descubre los últimos juegos disponibles en nuestra tienda.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/900x500" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Ofertas Especiales</h5>
                            <p>Aprovecha nuestros descuentos exclusivos.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/900x500" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Juegos Más Vendidos</h5>
                            <p>Explora los títulos más populares entre nuestros clientes.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselMobile"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselMobile"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </div>

        <div className="d-none d-md-block">
            <div id="carouselWeb" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselWeb" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselWeb" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselWeb" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://via.placeholder.com/1200x300" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Nuevos Lanzamientos</h5>
                            <p>Descubre los últimos juegos disponibles en nuestra tienda.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1200x300" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Ofertas Especiales</h5>
                            <p>Aprovecha nuestros descuentos exclusivos.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1200x300" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Juegos Más Vendidos</h5>
                            <p>Explora los títulos más populares entre nuestros clientes.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselWeb" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselWeb" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </div>
    </div>
    <div className="container">
            <h2 className="text-center mb-4">Categorías</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Acción"/>
                        <div className="card-body">
                            <h5 className="card-title">Acción</h5>
                            <p className="card-text">Juegos llenos de adrenalina y emoción.</p>
                            <a href="/categorias.html" className="btn btn-primary">Explorar</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Aventura"/>
                        <div className="card-body">
                            <h5 className="card-title">Aventura</h5>
                            <p className="card-text">Explora mundos fascinantes y vive historias épicas.</p>
                            <a href="/categorias.html" className="btn btn-primary">Explorar</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Estrategia"/>
                        <div className="card-body">
                            <h5 className="card-title">Estrategia</h5>
                            <p className="card-text">Desafía tu mente con estos juegos estratégicos.</p>
                            <a href="/categorias.html" className="btn btn-primary">Explorar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container">
            <h2 className="text-center mb-4">Productos</h2>
            <div className="row row-cols-2 row-cols-md-6 g-3 mb-3">
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/productos/producto1.html" className="link-none">
                                <p className="card-title">Producto 1</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through"></span>
                                <span className="precio-nuevo fw-bolder">$ 13.450</span>
                            </div>
                            <div className="d-grid">
                                <a className="btn btn-dark" href="/productos/producto1.html">Ver</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/productos/producto1.html" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <a className="btn btn-dark" href="/productos/producto1.html">Ver</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/productos/producto1.html" className="link-none">
                                <p className="card-title">Producto 20</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 7.500</span>
                                <span className="precio-nuevo fw-bolder">$ 6.000</span>
                            </div>
                            <div className="d-grid">
                                <a className="btn btn-dark" href="/productos/producto1.html">Ver</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/productos/producto1.html" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <a className="btn btn-dark" href="/productos/producto1.html">Ver</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/productos/producto1.html" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <a className="btn btn-dark" href="/productos/producto1.html">Ver</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/productos/producto1.html" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <a className="btn btn-dark" href="/productos/producto1.html">Ver</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row row-cols-2 row-cols-md-6 g-3 mb-3">
                
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary" type="button">Ver</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary" type="button">Ver</button>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary" type="button">Ver</button>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary" type="button">Ver</button>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary" type="button">Ver</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary" type="button">Ver</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-center mb-4">Los más vistos</h2>
            
            <div className="row row-cols-2 row-cols-md-4 g-4">
                
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary" type="button">Ver</button>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary" type="button">Ver</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary" type="button">Ver</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary" type="button">Ver</button>
                            </div> 
                        </div>
                    </div>
                </div>
        
          
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-dark" type="button">Ver</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-dark" type="button">Ver</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-dark" type="button">Ver</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-producto">
                        <img src="https://via.placeholder.com/400x300" className="card-img-top" alt="Producto 3"/>
                        <div className="card-body">
                            <a href="/" className="link-none">
                                <p className="card-title">Producto 3</p>
                            </a>
                            <div className="d-flex flex-column mb-3">
                                <span className="precio-descuento text-decoration-line-through">$ 10.000</span>
                                <span className="precio-nuevo fw-bolder">$ 7.999</span>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-dark" type="button">Ver</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container">
            <h2 className="text-center mb-4">Contacto</h2>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Tu nombre"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Tu correo electrónico"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <textarea className="form-control" id="mensaje" rows={3} placeholder="Tu mensaje"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>

        <footer className="bg-dark text-light text-center py-3">
        {/* Mapa responsivo */}
        <div className="container-fluid">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d795.8652023171296!2d-70.6151711566251!3d-33.4328796238235!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c586497835ad%3A0xa929ba68e1ac6051!2sDuoc%20UC%20Casa%20Central!5e1!3m2!1ses!2scl!4v1722850059541!5m2!1ses!2scl"
            width="100%"
            height={300}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p>&copy; 2030 Tienda de Videojuegos</p>
      </footer>
    </main>
  )
}