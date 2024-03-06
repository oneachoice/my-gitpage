import { useRef } from "react";
import styles from "./History.module.scss";
import { useScrollActive } from "../../../util/hooks/scroll-hook";
import { combineClassNames } from "../../../util/tools";

export default function History() {
  const sectionRef = useRef<HTMLElement>(null);
  const isActive = useScrollActive(sectionRef);

  return (
    <>
      <div className={styles.gap}></div>
      <section id="history" className={styles.history} ref={sectionRef}>
        <div className={styles.con}>
          <h1 className={isActive ? styles.active : ""}>HISTORY</h1>
          <ul>
            <li>
              <div
                className={combineClassNames(
                  styles.experience,
                  isActive ? styles.active : ""
                )}
              >
                <div className={styles.period}>
                  <div>
                    <h2>
                      2020<span></span>
                    </h2>
                    <h2>
                      <span></span>2022
                    </h2>
                  </div>
                </div>
                <div className={styles.career}>
                  <h3>국방부 ∙ 합동참모본부</h3>
                  <p>전장체계시스템(Battlefield Systems) 관리</p>
                  <p>윈도우 MIC 접근제어 관리</p>
                  <p>네트워크 유지보수 및 연결관리</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div className={styles.gap}></div>
    </>
  );
}
