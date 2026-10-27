import Link from "next/link";

const enlaces = [
  { href: "/", texto: "Home" },
  { href: "/categorias", texto: "Categorías" },
  { href: "/ofertas", texto: "Ofertas" },
  { href: "/nosotros", texto: "Nosotros" },
  { href: "/blog", texto: "Blog" },
  { href: "/contacto", texto: "Contacto" },
];

export default function Navbar({ activo }: { activo?: string }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img src="/img/imagen-boti.png" alt="Logo" style={{ height: 40,width: "auto" }}/>
          </Link>
            <form action="/" method="get" className="d-flex gap-2" role="search">
                <input
                    className="form-control"
                    type="search"
                    name="buscar"
                    placeholder="Buscar productos"
                    aria-label="Buscar productos"
                />

                <button className="btn btn-outline-success" type="submit">
                    Buscar
                </button>

                <a href="/" className="btn btn-outline-secondary">
                    Limpiar
                </a>
            </form>
          <div className="d-flex">
            <Link href="/inicioSesion" className="btn btn-outline-primary ms-2">Iniciar Sesión</Link>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <ul className="navbar-nav mx-auto flex-row flex-wrap gap-3 align-items-center">
            {enlaces.map((e) => (
              <li className="nav-item" key={e.href}>
                <Link
                  className={"nav-link" + (activo === e.href ? " active text-danger" : "")}
                  href={e.href}
                >
                  {activo === e.href ? <strong>{e.texto}</strong> : e.texto}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <a className="btn btn-success ms-3" href="/carrito.html">
                <strong><i className="bi bi-cart4"></i> Carrito <span>$5.000</span></strong>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}