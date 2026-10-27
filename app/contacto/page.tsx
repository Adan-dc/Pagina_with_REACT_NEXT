import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contacto() {
  return (
    <main className="text-dark pagina-boti">
      <Navbar activo="/contacto" />

      <div className="row justify-content-center my-3">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="container">
                <h2 className="text-center mb-4">Contacto</h2>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Tu correo electrónico" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="mensaje" rows={3} placeholder="Tu mensaje"></textarea>
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}