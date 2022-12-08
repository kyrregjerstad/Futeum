gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline();

timeline.to(".scroll-anim-a", {
  scrollTrigger: {
    trigger: ".scroll-anim-a",
    start: "top center",
    scrub: 3,
  },
  duration: 5,
  rotation: 5,
  scale: 1.25,
  y: -50,
});

timeline.to(".scroll-anim-b", {
  scrollTrigger: {
    trigger: ".scroll-anim-b",
    start: "top center",
    scrub: 3,
  },
  duration: 5,
  scale: 1.5,
  rotation: -15,
  y: -60,
});

timeline.to(".scroll-anim-c", {
  scrollTrigger: {
    trigger: ".scroll-anim-c",
    start: "top center",
    scrub: 3,
  },
  duration: 5,
  scale: 1.1,
  // x: -20,
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
