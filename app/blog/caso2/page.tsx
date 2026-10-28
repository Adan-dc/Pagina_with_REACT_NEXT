import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const articulos = [
  {
    titulo: "El ingrediente olvidado: por qué la calidad del hielo define el sabor de tu trago",
    parrafos: [
      "Solemos gastar tiempo y dinero eligiendo una buena botella de destilado, pero muchas veces arruinamos la experiencia usando hielo hueco, con olor a refrigerador o demasiado picado. En coctelería, el hielo es un ingrediente activo fundamental.",
      "El hielo pequeño o con bolsas de aire se derrite a gran velocidad, aguando el trago en pocos minutos y matando los matices de destilados como el whisky o el gin. Por el contrario, un cubo macizo, grande y denso enfría el vaso rápidamente sin desprender agua en exceso, permitiendo disfrutar los aromas originales de principio a fin.",
    ],
    imagen: "/img/hielo.png",
    volver: false,
  },
  {
    titulo: "Licores blancos vs. licores oscuros: qué define su color y cómo impacta en el cuerpo",
    parrafos: [
      "Existe la creencia errónea de que todos los destilados oscuros son naturalmente más fuertes en graduación que los transparentes. La realidad es que todos los licores salen completamente claros e incoloros del alambique tras la destilación; la diferencia visual y de sabor posterior depende exclusivamente del reposo y la maduración.",
      "Los destilados blancos (como el vodka, el gin o ciertos piscos transparentes) van directo del contenedor inerte (acero o vidrio) a la botella, preservando notas frescas, florales o puramente alcohólicas. Los destilados ámbar o dorados (como el ron añejo, el whisky o el brandy) adquieren ese color por contacto prolongado con la madera tostada de las barricas, absorbiendo taninos, azúcares naturales y aceites.",
    ],
    imagen: "/img/tipos-licor.png",
    volver: false,
  },
  {
    titulo: "Snacks infalibles: qué comer para acompañar destilados y resaltar sus notas",
    parrafos: [
      "Acompañar los destilados con la comida adecuada no solo cuida el cuerpo durante la junta, sino que potencia los sabores del licor. La alta graduación alcohólica pide bocados que limpien el paladar y equilibren la intensidad de cada sorbo.",
      "Para tragos cítricos o refrescantes a base de gin o pisco blanco, los quesos suaves (como mantecoso o de cabra), aceitunas verdes y frutos secos salados son el complemento perfecto. Si la preferencia va hacia whiskies o rones añejos, los frutos secos tostados (almendras, nueces) y trozos pequeños de chocolate semiamargo generan un contraste increíble con las notas a madera y vainilla del trago.",
    ],
    imagen: "/img/snacks-licor.png",
    volver: true,
  },
];

export default function Caso2() {
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