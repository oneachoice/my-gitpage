import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <a href="#greeting">
          <LogoSVG />
        </a>
      </div>
      <ul>
        <li>
          <a href="#introduction">INTRO</a>
        </li>
        <li>
          <a href="#history">EXPERIENCE</a>
        </li>
      </ul>
    </nav>
  );
}

function LogoSVG() {
  const PATH_LENGTH = 100

  return (
    <svg viewBox="0 0 576 216" className={styles.oneachoice}>
      <circle id="O" cx="36" cy="36" r="27" />
      <g className={styles.motion}>
        <path
          pathLength={PATH_LENGTH}
          id="N"
          d="M81,63V9c0-0.4,54,54,54,54s0-54,0-54"
        />
        <line pathLength={PATH_LENGTH} id="e-3" x1="81.6" y1="81" x2="135.6" y2="81" />
        <polyline
          pathLength={PATH_LENGTH}
          id="e-2"
          points="81,81 81.6,135 135.6,135 	"
        />
        <line
          pathLength={PATH_LENGTH}
          id="e-1"
          x1="81.6"
          y1="108"
          x2="135.6"
          y2="108"
        />
        <polyline
          pathLength={PATH_LENGTH}
          id="A"
          points="180,81 153,135 207,135 180,81 "
        />
        <polyline
          pathLength={PATH_LENGTH}
          id="C"
          points="279,81 225,81 225,135 279,135 "
        />
        <circle pathLength={PATH_LENGTH} id="O2" cx="323.4" cy="180" r="27" />
        <line pathLength={PATH_LENGTH} id="h-1" x1="225" y1="153" x2="225" y2="207" />
        <line pathLength={PATH_LENGTH} id="h-3" x1="279" y1="153" x2="279" y2="207" />
        <line pathLength={PATH_LENGTH} id="h-2" x1="225" y1="180" x2="279" y2="180" />
        <line
          pathLength={PATH_LENGTH}
          id="i-1"
          x1="368.4"
          y1="153"
          x2="422.4"
          y2="153"
        />
        <line
          pathLength={PATH_LENGTH}
          id="i-2"
          x1="395.4"
          y1="153"
          x2="395.4"
          y2="207"
        />
        <line
          pathLength={PATH_LENGTH}
          id="i-3"
          x1="368.4"
          y1="207"
          x2="422.4"
          y2="207"
        />
        <polyline
          pathLength={PATH_LENGTH}
          id="C2"
          points="494.4,153 440.4,153 440.4,207 494.4,207 "
        />
      </g>
      <line
        id="e-3_00000145016370342668278870000013813322283791281080_"
        x1="513"
        y1="153"
        x2="567"
        y2="153"
      />
      <polyline
        id="e-2_00000098192832081716419990000011647512153846647168_"
        points="512.4,153 513,207 567,207 	"
      />
      <line
        id="e-1_00000057146656755074838630000014495210277197850801_"
        x1="513"
        y1="180"
        x2="567"
        y2="180"
      />
      <rect id="r2" x="513" y="9" width="54" height="54" />
      <rect id="r1" x="9" y="153" width="54" height="54" />
    </svg>
  );
}
