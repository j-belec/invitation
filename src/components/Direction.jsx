import { useEffect, useRef, useState } from "react";

export default function Direction() {
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
        className={`direction-container from-left ${
          isVisible ? "visible" : ""
        }`}
      >
        <p className="direction-p">
          Te esperamos para celebrar en Vivanco, Tigre a las 19:00 hs Gral.
          Bartolomé Mitre 74, Tigre
        </p>
        <a
          href="https://maps.app.goo.gl/SxCY8EY6nNo6Jnb39"
          target="_blank"
          rel="noopener noreferrer"
          className="direction-button"
        >
          Cómo llegar
        </a>
      </div>
    </div>
  );
}
