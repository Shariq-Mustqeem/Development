"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimationGsap = () => {
  const imageRef = useRef(null);
  const leftAnimation = useRef(null);
  const topAnimation = useRef(null);
  const rightAnimation = useRef(null);
  const bottomAnimation = useRef(null);

  useLayoutEffect(() => {
    const animateWithScrollTrigger = (
      ref,
      fromVars,
      toVars,
      trigger,
      startOffset,
      delay = 0
    ) => {
      gsap.fromTo(ref.current, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: trigger.current,
          start: `top ${startOffset}%`,
          toggleActions: "play none none none",
        },
        delay: delay,
      });
    };

    animateWithScrollTrigger(
      imageRef,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1 },
      imageRef,
      80,
      0.2
    );
    animateWithScrollTrigger(
      leftAnimation,
      { x: -100, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 1 },
      leftAnimation,
      80,
      0.2
    );
    animateWithScrollTrigger(
      topAnimation,
      { y: -100, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1 },
      topAnimation,
      80,
      0.2
    );
    animateWithScrollTrigger(
      rightAnimation,
      { x: 100, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 1 },
      rightAnimation,
      80,
      0.5
    );
    animateWithScrollTrigger(
      bottomAnimation,
      { y: 100, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1 },
      leftAnimation,
      85,
      0.5
    );
    const inputOptionAnimation = document.querySelectorAll(
      ".custom-animation-one-by-one"
    );

    inputOptionAnimation.forEach((input, index) =>
      gsap.fromTo(
        input,
        { x: -100, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: input,
            start: "left 85%",
            end: "left 15%",
            toggleActions: "play play none none",
            once: true,
          },
        }
      )
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return {
    imageRef,
    leftAnimation,
    topAnimation,
    rightAnimation,
    bottomAnimation,
  };
};

export default AnimationGsap;
