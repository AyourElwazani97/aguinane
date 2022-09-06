import { useEffect, useRef } from "react";
import React from "react";
import gsap, { Sine } from "gsap";
import SplitText from "../utils/Split3.min";
function Hero({ styles }) {
  gsap.registerPlugin(SplitText);
  const hero = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    const spltiHeroTitle = new SplitText(".overflows", {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText(".overflows", {
      type: "lines",
      linesClass: "lineParent",
    });
    tl.to(hero.current, {
      css: {
        visibility: "visible",
      },
    });
    tl.to(spltiHeroTitle.lines, {
      y: 0,
      opacity: 1,
      stagger: 0.5,
      ease: Sine.easeOut,
      duration: 2,
    });
  }, []);
  return (
    <div ref={hero} className={styles._hero}>
      <div className={styles._hero_child}>
        <div>
          <h1 className="overflows">AGUINANE ⴰⴳⵓⵉⵏⴰⵏⴻ</h1>
        </div>
        <div>
          <p className="overflows">
            We are Sorry, Site still under Constructions...
          </p>
        </div>
      </div>
      <video autoPlay muted controls={false} loop={true}>
        <source src="./AguinaneHero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;
