import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Nosotros() {
  return (
    <main className="text-dark pagina-boti">
      <Navbar activo="/nosotros" />

      <div className="container my-4" style={{ maxWidth: 800 }}>
        <h1 className="text-center fw-bold mb-4">Sobre nosotros</h1>

        <div className="card mb-3">
          <div className="card-body">
            <h2 className="h4">¡Bienvenidos a botillería J&amp;C!</h2>
            <p className="text-secondary">
              Nacimos en 2019 con una idea clara, ser más que una simple parada, queríamos ser el
              punto de confianza del barrio para todas tus celebraciones y previas.
            </p>
            <p className="text-secondary mb-0">
              Nuestro objetivo es ofrecerte la mayor variedad de licores y destilados, con la
              atención cercana que nos caracteriza.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h2 className="h4">Sobre nuestros precios</h2>
            <p className="text-secondary">
              Creemos que celebrar o compartir un buen trago no debería costar de más. Por eso,
              trabajamos para mantener siempre precios justos y competitivos en todo nuestro
              catálogo de licores y destilados, ofreciendo promociones convenientes para el fin de
              semana y la calidad que el barrio merece.
            </p>

            <div className="bg-light border-start border-4 border-dark rounded-end p-3">
              <h3 className="h5">¡Dónde encontrarnos!</h3>
              <p>Te esperamos en 24 de diciembre, 2764</p>
              <iframe
                className="rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.6261440017324!2d-70.72810282430774!3d-33.48508297337584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c35b8120d575%3A0xb43658fac573b0b1!2s24%20de%20Diciembre%202764%2C%208320292%20Cerrillos%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1788582294362!5m2!1ses-419!2scl"
                width="100%"
                height={300}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
              <a
                href="https://maps.google.com/?q=24+de+diciembre+2764"
                target="_blank"
                rel="noreferrer"
                className="fw-semibold text-dark text-decoration-none"
              >
                Ver en Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}