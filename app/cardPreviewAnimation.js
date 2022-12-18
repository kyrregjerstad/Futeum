gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();
let reduceMotion = false;

mm.add("(prefers-reduced-motion: reduce)", (context) => {
  return (reduceMotion = context.conditions.matches);
});

if (reduceMotion) {
  console.log("reduced enabled");
} else {
  ScrollTrigger.batch(".card-teaser", {
    once: true,
    start: "bottom bottom",

    onEnter: (batch) => {
      gsap.fromTo(
        batch,
        {
          delay: 0.1,
          opacity: 0,
          rotation: -2,
          scale: 1.2,
        },
        {
          opacity: 1,
          rotation: 0,
          scale: 1,
          stagger: 0.25,
          ease: "power1.inOut",
        }
      );
    },
  });

  ScrollTrigger.batch(".card-teaser-text", {
    once: true,

    onEnter: (batch) => {
      gsap.fromTo(
        batch,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 0.45,
          stagger: 0.2,
          ease: "power1.inOut",
        }
      );
    },
  });
}
