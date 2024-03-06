import { useEffect, useRef, useState } from "react";
import styles from "./Greeting.module.scss";

export default function Greeting() {
  const [h2Ref, textShadow] = useTextShadowEffect();

  useGreetingScrollDownEffet();

  return (
    <section id="greeting" className={styles.greeting}>
      <div className={styles.title}>
        <h2 ref={h2Ref} style={{ textShadow: textShadow }}>
          ONEACHOICE
        </h2>
      </div>
    </section>
  );
}

function useTextShadowEffect(): [React.RefObject<HTMLHeadingElement>, string] {
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const [textShadow, setTextShadow] = useState<string>(
    `0px 0px 3px rgba(0,0,0, 0.6)`
  );

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);

    function mouseMoveHandler(target: MouseEvent) {
      const SHADOW_SIZE = 30;
      const SHADOW_COLOR = "rgba(0,0,0, 0.6)";

      if (!h2Ref.current) return;

      const h2Coordinate = h2Ref.current.getBoundingClientRect();

      const h2CenterX = h2Coordinate.left + h2Coordinate.width / 2;
      const h2CenterY = h2Coordinate.top + h2Coordinate.height / 2;

      const shadowX =
        ((h2CenterX - target.clientX) / window.innerWidth) * SHADOW_SIZE;
      const shadowY =
        ((h2CenterY - target.clientY) / window.innerHeight) * SHADOW_SIZE;

      setTextShadow(() => `${shadowX}px ${shadowY}px 3px ${SHADOW_COLOR}`);
    }
  }, []);

  return [h2Ref, textShadow];
}

function useGreetingScrollDownEffet() {
  useEffect(() => {
    window.addEventListener("wheel", (event) => {
      if (window.scrollY < 100 && event.deltaY > 0) {
        const introSection = document.getElementById("introduction");
        if (introSection) window.scrollTo(0, introSection.offsetTop);
      }
    });
  }, []);
}
