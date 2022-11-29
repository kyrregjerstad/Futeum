gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline();

timeline.to("scroll-anim-a", {
  scrollTrigger: {
    trigger: "scroll-anim-a",
    start: "top center",
    scrub: 3,
  },
  duration: 5,
  rotation: 10,
  scale: 1.5,
});

timeline.to(".scroll-anim-b", {
  scrollTrigger: {
    trigger: ".scroll-anim-b",
    start: "top center",
    scrub: 3,
  },
  duration: 5,
  scale: 2,
  y: -120,
});

timeline.to(".scroll-anim-c", {
  scrollTrigger: {
    trigger: ".scroll-anim-c",
    start: "top center",
    scrub: 3,
  },
  duration: 5,
  scale: 1.1,
  x: -20,
  // y: -120,
});
timeline.to(".scroll-anim-d", {
  scrollTrigger: {
    trigger: ".scroll-anim-d",
    start: "top center",
    scrub: 3,
  },
  duration: 5,
  scale: 1.03,
  // x: 10,
  // y: -120,
});

// timeline.from(".card-background", {
//   scrollTrigger: {
//     trigger: ".card-background",
//     toggleActions: "restart none none none",
//   },
//   duration: 5,
//   rotation: 15,
//   scale: 1.5,
// });
// timeline.to(
//   ".card-foreground",
//   {
//     scrollTrigger: {
//       trigger: ".card-background",
//       toggleActions: "restart none none none",
//     },
//     duration: 5,
//     scale: 2,
//     y: -100,
//   },
//   0
// );

// gsap.from(".card-teaser", {
//   scrollTrigger: {
//     trigger: ".card-teaser",
//     start: "top bottom",
//   },
//   ease: "slow",
//   duration: 0.4,
//   rotation: -2,
//   scale: 1.2,
//   opacity: 0,
//   stagger: 0.25,
// });

ScrollTrigger.batch(".card-teaser", {
  once: true,
  // paused: true,
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
