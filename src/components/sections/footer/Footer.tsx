import styles from "./Footer.module.scss";
import GooeyCoupler from "../../coupler/GooeyCoupler";

interface LinkItem {
  name: string;
  desc: string;
  href: string;
  imgSrc: string;
}

const LINK_ITEMS: Array<LinkItem> = [
  {
    name: "github",
    desc: "github.com/oneachoice",
    href: "https://github.com/oneachoice",
    imgSrc: "/images/links/github.svg",
  },
  {
    name: "gmail",
    desc: "oneachoice@gmail.com",
    href: "mailto:oneachoice@gmail.com",
    imgSrc: "/images/links/gmail.svg",
  },
  {
    name: "codepen",
    desc: "oneachoice",
    href: "https://codepen.io/oneachoice",
    imgSrc: "/images/links/codepen.svg",
  },
];

export default function Footer() {
  return (
    <>
      <GooeyCoupler />
      <footer className={styles.footer}>
        <div className={styles.con}>
          <h2>{"< CONTACT >"}</h2>
          <ul>
            {LINK_ITEMS.map((linkItem) => {
              return (
                <li>
                  <Item
                    desc={linkItem.desc}
                    href={linkItem.href}
                    imgAlt={linkItem.name}
                    imgSrc={linkItem.imgSrc}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </>
  );
}

function Item(props: {
  href: string;
  imgSrc: string;
  imgAlt: string;
  desc: string;
}) {
  return (
    <a href={props.href} className={styles.link}>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <p>{props.desc}</p>
    </a>
  );
}
