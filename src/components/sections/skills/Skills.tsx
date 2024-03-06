import styles from "./Skills.module.scss";
import { useEffect, useState } from "react";

const SKILL_LOGOS = [
  {
    name: "css",
    fileName: "css.svg",
  },
  {
    name: "html",
    fileName: "html.svg",
  },
  {
    name: "javascript",
    fileName: "js.svg",
  },
  {
    name: "linux",
    fileName: "linux.svg",
  },
  {
    name: "nextjs",
    fileName: "nextjs.svg",
  },
  {
    name: "nodejs",
    fileName: "nodejs.svg",
  },
  {
    name: "react",
    fileName: "react.svg",
  },
  {
    name: "scss",
    fileName: "scss.svg",
  },
  {
    name: "sql",
    fileName: "sql.svg",
  },
  {
    name: "typescript",
    fileName: "ts.svg",
  },
];

export default function Skills() {
  const angle = useAngle();

  const skillLogos = SKILL_LOGOS.map((skillLogo, index) => {
    const orbitAngle = (360 / SKILL_LOGOS.length) * index;
    const correctionAngle = -1 * (360 / SKILL_LOGOS.length) * index - angle;

    return (
      <li
        key={skillLogo.name}
        style={{
          transform: `rotate(${orbitAngle}deg)`,
        }}
      >
        <img
          className={styles.logo}
          src={`/images/skills/${skillLogo.fileName}`}
          alt={skillLogo.name}
          style={{
            transform: `rotate(${correctionAngle}deg)`,
          }}
        />
      </li>
    );
  });

  return (
    <section className={styles.skills}>
      <div className={styles.con}>
        <h2 className={styles.title}>SKILLS</h2>
        <ul
          className={styles.circle}
          style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
        >
          {skillLogos}
        </ul>
      </div>
    </section>
  );
}

function useAngle() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    requestAnimationFrame(function spin() {
      const spinSpeed = 360 / 60 / 30;

      setAngle((angle) => {
        if (angle > 360) return spinSpeed;
        return angle + spinSpeed;
      });

      requestAnimationFrame(spin);
    });
  }, []);

  return angle;
}
