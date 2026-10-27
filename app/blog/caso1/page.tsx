import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const articulos = [
  {
    titulo: "El añejamiento de destilados: mitos y verdades",
    parrafos: [
      "El mundo de los destilados está lleno de rituales y creencias, pero pocos elementos generan tanta curiosidad como la madera. Al momento de elegir un whisky, un ron o un pisco de guarda, solemos asociar el tiempo en barrica con calidad indiscutible. Sin embargo, el paso de los años en madera encierra realidades que van más allá del simple número impreso en la etiqueta.",
    ],
    imagen: "/img/barrica.png",
    volver: false,
  },
  {
    titulo: "Cócteles clásicos con destilados que puedes preparar en casa sin equipo profesional",
    parrafos: [
      "Preparar un buen combinado en casa no requiere ser un bartender certificado ni invertir en cristalería sofisticada. Con una botella base de calidad y un par de ingredientes frescos, cualquiera puede elevar la previa del fin de semana.",
      "El secreto radica en la proporción y el hielo. Tragos como el Pisco Sour clásico se pueden lograr usando simplemente una licuadora común, cuidando la medida de limón recién exprimido y goma. Para quienes prefieren destilados oscuros, un Old Fashioned casero solo pide un terrón de azúcar, unas gotas de bitter y whisky sobre abundante hielo de roca.",
    ],
    imagen: "/img/cocteles.png",
    volver: false,
  },
  {
    titulo: "¿El licor se echa a perder? Errores comunes al guardar tus botellas abiertas",
    parrafos: [
      "Muchas personas asumen que los destilados duran para siempre en cualquier rincón de la casa debido a su alta graduación alcohólica. Si bien no se descomponen como los alimentos perecibles, la exposición al oxígeno, la luz solar directa y las altas temperaturas puede arruinar un licor premium en cuestión de meses.",
    ],
    imagen: "/img/licores.png",
    volver: true,
  },
];

export default function Caso1() {
  return (
    <main className="text-dark pagina-boti">
      <Navbar activo="/blog" />

      <div className="container my-4" style={{ maxWidth: 1100 }}>
        {articulos.map((a, i) => (
          <article className="card mb-3" key={i}>
            <div className="card-body">
              <div className="row align-items-start g-4">
                <div className="col-md-8">
                  <h1 className="h3 mb-3">{a.titulo}</h1>
                  {a.parrafos.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {a.volver && (
                    <Link href="/blog" className="btn btn-outline-dark">
                      ← Volver a noticias
                    </Link>
                  )}
                </div>
                <div className="col-md-4">
                  <img src={a.imagen} alt="" className="img-fluid rounded" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Footer />
    </main>
  );
}