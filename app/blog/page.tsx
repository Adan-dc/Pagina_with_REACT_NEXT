import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const noticias = [
  {
    titulo: "El secreto de la madera: mitos y verdades del añejamiento en barricas de roble",
    texto:
      "Descubre los mitos y verdades sobre el añejamiento de destilados en barricas de roble y cómo cambia el sabor con el paso de los años.",
    href: "/blog/caso1",
    imagen: "/img/barrica.png",
    alt: "Barrica de roble",
  },
  {
    titulo: "El auge del pisco artesanal y los destilados premium en el barrio",
    texto:
      "Descubre por qué los destilados nacionales y los tragos preparados están ganando terreno en las celebraciones de fin de semana.",
    href: "/blog/caso2",
    imagen: "/img/pisco.png",
    alt: "Pisco y destilados",
  },
];

const ofertas = [
  { titulo: "Pack Chileno: 3x Pisco Alto del Carmen 35° 1 L + 3x Pisco Bauza Blanco 35° 1 L — $32.990", antes: "$56.940", marca: "BOTILLERIA J&C.", detalle: "Seis botellas combinando dos marcas favoritas del barrio, ideal para compartir en grupo con 42% de descuento.", imagen: "altodelcarmen-bauzapisco.png" },
  { titulo: "Pisco Alto del Carmen 35° 1 Lt. X6 — $34.990", antes: "$53.940", marca: "ALTO DEL CARMEN.", detalle: "Pack de 6 botellas a $5.832 c/u, perfecto para tener stock de un clásico chileno a buen precio.", imagen: "altodelcarmen.png" },
  { titulo: "Aperol Licor Aperitivo 750cc — $9.999", antes: "$12.490", marca: "APEROL.", detalle: "El infaltable para spritz y aperitivos de fin de semana, con su característico color y sabor cítrico.", imagen: "aperol.png" },
  { titulo: "Pack Chileno: 3x Pisco Alto del Carmen 35° 1L + 3x Pisco Bauza 35° 1L — $32.990", antes: "$56.940", marca: "BOTILLERIA J&C.", detalle: "La versión en caja del pack chileno, lista para regalar o guardar para la próxima celebración.", imagen: "alto_del_carmen_bauza_pisco_caja.png" },
  { titulo: "Licor Aperitivo Ramazzotti Rosato 700cc — $9.790", antes: "$13.690", marca: "RAMAZZOTTI.", detalle: "Un aperitivo italiano suave y afrutado, ideal para previas ligeras.", imagen: "ramazzotti.png" },
  { titulo: "Espumante Finca Flichman Extra Brut 750cc x6 — $25.140", antes: "$59.940", marca: "FINCA FLICHMAN.", detalle: "El mayor descuento de la semana: seis espumantes para celebrar sin gastar de más.", imagen: "fincaflichman_1.png" },
  { titulo: "Pisco Alto Del Carmen Transparente 40° 750cc x6 — $34.990", antes: "$56.940", marca: "ALTO DEL CARMEN.", detalle: "Pack de 6 unidades a $5.832 c/u, el favorito para preparar piscolas todo el mes.", imagen: "cajapiscoaltodelcarmen_3.png" },
  { titulo: "Tanqueray 0.0° Sin Alcohol 700ml — $15.990", antes: "$24.990", marca: "TANQUERAY.", detalle: "La opción sin alcohol para quienes igual quieren disfrutar de un buen trago en la previa.", imagen: "ginsinalcohol.png" },
  { titulo: "Pisco Alto del Carmen 35° 1L — $6.290", antes: "$8.990", marca: "ALTO DEL CARMEN.", detalle: "La botella individual más pedida, ahora a mejor precio por tiempo limitado.", imagen: "pisco-solo.png" },
  { titulo: "Pisco Tres Erres 3R 35° 1L X6 — $31.140", antes: "$47.940", marca: "TRES ERRES.", detalle: "Pack de 6 botellas a $5.190 c/u, una alternativa económica sin sacrificar calidad.", imagen: "PISCO_3R.png" },
];

export default function Blog() {
  return (
    <main className="text-dark pagina-boti">
      <Navbar activo="/blog" />

      <div className="container my-4" style={{ maxWidth: 900 }}>
        <h1 className="text-center mb-4">Noticias importantes</h1>

        {noticias.map((n) => (
          <div className="card mb-3" key={n.href}>
            <div className="card-body">
              <div className="row align-items-center g-3">
                <div className="col-md-8">
                  <h2 className="h4">{n.titulo}</h2>
                  <p className="text-secondary">{n.texto}</p>
                  <Link href={n.href} className="btn btn-outline-dark btn-sm">
                    Ver Caso
                  </Link>
                </div>
                <div className="col-md-4">
                  <img
                    src={n.imagen}
                    alt={n.alt}
                    className="img-fluid rounded border"
                    style={{ height: 150, width: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <section className="mt-5 mx-auto" style={{ maxWidth: 650 }}>
          <h2 className="text-center mb-4">Ofertas destacadas de la semana</h2>
          {ofertas.map((o, i) => (
            <div className="mb-4" key={i}>
              <div className="text-center mb-2">
                <img src={"/img/" + o.imagen} alt={o.titulo} className="img-fluid rounded" style={{ maxWidth: 320 }} />
              </div>
              <div className="bg-light border-start border-4 border-dark rounded-end p-3">
                <h3 className="h5">{o.titulo}</h3>
                <p className="text-secondary text-decoration-line-through small mb-2">Antes: {o.antes}</p>
                <p className="mb-0">
                  <strong>{o.marca}</strong> {o.detalle}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </main>
  );
}