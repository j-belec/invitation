import { useState } from "react";

export default function Details() {
  const [isDressOpen, setIsDressOpen] = useState(false);
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  return (
    <div className="details-container">
      <h4 className="section-title">Te compartimos más detalles</h4>
      <div className="wrapper">
        <div className="accordion">
          <div className="item" onClick={() => setIsDressOpen((prev) => !prev)}>
            <div className="title">
              <h2>Dresscode</h2>
              <span>{isDressOpen ? "▲" : "▼"}</span>
            </div>
            <div className={isDressOpen ? "content show" : "content"}>
              <p>Elegante*</p>
              <p>
                Los colores claros los reservamos para los novios, pero queremos
                que brilles siendo vos.
              </p>
              <p>
                Elegí algo cómodo ... ¡y preparate para darlo todo en la pista!
              </p>
            </div>
          </div>
          <div className="item" onClick={() => setIsGiftOpen((prev) => !prev)}>
            <div className="title">
              <h2>Regalo</h2>
              <span>{isGiftOpen ? "▲" : "▼"}</span>
            </div>
            <div className={isGiftOpen ? "content show" : "content"}>
              <p>
                El regalo es opcional, la asistencia obligatoria. Pero si queres
                tener un detalle con nosotros, que mejor regalo que nuestra luna
                de miel.
              </p>
              <p>Datos bancarios:</p>
              <p>Azar.paloma.pasion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
