import styles from "./GooeyCoupler.module.scss";
import { useMemo } from "react";

export default function GooeyCoupler() {
  const bubbles = useMemo(() => {
    const bubbles = [];

    const BUBBLE_AMOUNT = 10;
    for (let i = 0; i < BUBBLE_AMOUNT; i++) {
      bubbles.push(
        <span
          key={i}
          className={styles.bubble}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        ></span>
      );
    }

    return bubbles;
  }, []);

  return (
    <div className={styles.coupler}>
      <div className={styles.bubbles}>{bubbles}</div>
      <GooeyFilter />
    </div>
  );
}

function GooeyFilter() {
  return (
    <svg>
      <defs>
        <filter id="gooey-filter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 17 -8"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}
