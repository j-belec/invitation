import { useEffect, useRef, useState } from "react";

export default function Assistance() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Solo una vez
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div
        className={`assistance-container from-left ${
          isVisible ? "visible" : ""
        }`}
      >
        <h4 className="assistance-h">Venis?</h4>
        <a
          className="assistance-button"
          href="https://forms.gle/L5GAEieodWJko543A"
          target="_blank"
          rel="noopener noreferrer"
        >
          Confirma asistencia
        </a>
        <h4 className="assistance-h">¡Te esperamos!</h4>
      </div>
    </div>
  );
}
