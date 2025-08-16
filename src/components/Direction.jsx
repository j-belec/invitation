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
          Te esperamos para celebrar <br />
          en Vivanco <br />
          Gral. Bartolomé Mitre 74, Tigre <br />
          19:00 hs
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
