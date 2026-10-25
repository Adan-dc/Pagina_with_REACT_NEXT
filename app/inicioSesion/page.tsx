export default function IniciarSesion() {
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
        <div className="container mt-5">
            <div className="row">
                <div className="card">
                    <div className="card-body row">

                        <div className="col-md-6 d-none d-md-block">
                            <img src="https://via.placeholder.com/600x400" className="product-img" alt="Producto"/>
                        </div>
                        <div className="col-md-6">
                            <h2 className="mb-4 text-center">Iniciar Sesión</h2>
                            <div id="error" hidden className="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>¡Error!</strong> Usuarios o Contraseña mal ingresados.
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <form id="loginForm">
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Usuario</label>
                                    <input type="text" className="form-control" id="username" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="password" required/>
                                </div>
                                <div className="mb-3">
                                    <a href="/crear-sesion.html">¿No tienes cuenta? Regístrate aquí</a>
                                    <a href="/recuperar-contrasena.html" className="float-end">¿Olvidaste tu contraseña?</a>
                                </div>

                                <button type="submit" className="btn btn-primary w-100"><strong>INICIAR SESIÓN</strong></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-3 text-center bg-info">
                        <div className="card-body">
                            <h5 className="card-title">Acceso directo</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/cliente/index.html" className="btn btn-danger"><strong>ENTRAR COMO CLIENTE</strong></a>
                            <a href="/dashboard" className="btn btn-dark"><strong>ENTRAR COMO ADMINISTRADOR</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    )
  }