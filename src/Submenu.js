import { useGlobalContext } from "./context";
import { useEffect, useRef } from "react";

function Submenu() {
  const { submenu, isShowSubmenu, categoryPosition } = useGlobalContext();
  const { page, links } = submenu[0];
  const refSubmenu = useRef(null);

  useEffect(() => {
    refSubmenu.current.style.left = `${categoryPosition - ((refSubmenu.current.offsetWidth - 40) / 2)}px`
    //40 -> (20+20) padding value
  }, [categoryPosition])

  console.log(categoryPosition)

  return (
    <article className={isShowSubmenu ? "submenu-container show-submenu" : "submenu-container"}
      ref={refSubmenu}>
      <section className="submenu-details">
        <h3>{page}</h3>
        <ul className="links">
          {
            links.map((link, index) => {
              const { label, icon, url } = link;
              return (
                <li key={index}>
                  <span>{icon}</span>
                  <a href={url}>{label}</a>
                </li>
              )
            })
          }
        </ul>
      </section>
    </article>
  )
};

export default Submenu;