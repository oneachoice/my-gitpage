import { useRef } from "react";
import styles from "./Introduction.module.scss";
import { combineClassNames } from "../../../util/tools";
import { useScrollActive } from "../../../util/hooks/scroll-hook";

export default function Introduction() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isActive = useScrollActive(titleRef);

  return (
    <>
      <div className={styles.coupler}>
        <div className={styles.semicircle}></div>
      </div>
      <section id="introduction" className={styles.introduction} ref={titleRef}>
        <div className={styles.con}>
          <div
            className={combineClassNames(
              styles.title,
              isActive ? styles.active : ""
            )}
          >
            <h2>PURSUIT</h2>
          </div>
          <div
            className={combineClassNames(
              styles.desc,
              isActive ? styles.active : ""
            )}
          >
            <p>저는 사용자의 경험을 항상 최우선으로 두고 있습니다.</p>
            <p>
              디자인과 기술을 조화롭게 결합하여 사용자 중심의 제품을 만들기에
              전념하고 있습니다.
            </p>
            <p>
              제작하는 모든 솔루션에서 사용자들이 즐겁고 편리한 경험을 누릴 수
              있도록 신중한 고민과 개발 원칙을 적용하고 있습니다.
            </p>
            <p>기술과 디자인의 결합을 통해 최고의 제품을 창조하고,</p>
            <p>
              사용자들이 제품을 사용함으로써 얻게 되는 만족감을 증진시키는 것이
              제 목표입니다.
            </p>
            <p>
              또한, 사용자들의 피드백을 적극 수용하여 지속적인 개선을 추구하고
              있습니다.
            </p>
            <p>
              장인 정신을 바탕으로, 사용자와 제품을 연결하며 혁신적인 개발을
              지향합니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
