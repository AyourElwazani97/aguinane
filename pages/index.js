import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import gsap, { Sine } from "gsap";
import SplitText from "../utils/Split3.min";
export default function Home({ styles }) {
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
    setInterval(() => {
      const numb = Math.random() * 10;
      const arrColors = ["red", "yellow", "#000", "violet"];
      const bgValue = numb.toFixed(0);
      console.log(arrColors.forEach((e) => console.log(e)));
    }, 5000);
  }, []);
  return (
    <div>
      <Head>
        <title>Aguinane</title>
        <meta name="description" content="agauinane" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      </div>
    </div>
  );
}
