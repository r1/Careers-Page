/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#332b54"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default function Team() {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });

  const fadeIn = {
    visible: {
      opacity: 1,
      transition: { delay: 0.4, duration: 0.6, ease: easing },
    },
    hidden: { opacity: 0, transition: { duration: 0.6, ease: easing } },
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        delay: 0.4,
        duration: 0.6,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        delay: 0.4,
        duration: 0.6,
      },
    },
  };

  const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col">
      <div className="flex items-center justify-between">
        <div>
          <motion.h2
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={fadeIn}
            className="text-3xl lg:text-5xl"
          >
            Meet the team
          </motion.h2>
        </div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={fadeIn}
          className="flex h-7 space-x-5"
        >
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </motion.div>
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={fadeIn}
      >
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={list}
        >
          <div ref={sliderRef} className="keen-slider mt-9">
            <motion.div variants={item} className="keen-slider__slide">
              <img src="https://wik1.vercel.app/images/stock.jpg" />
              <h2 className="mt-4 text-lg">Phil Smith</h2>
              <p className="text-md mt-2">
                Phil is CEO of NINE4 and the company's founder. Before starting
                NINE4, he was a Senior Designer at Microsoft — where he helped
                to design product features used by millions of people. Outside
                work, Phil's calendar is mainly violin practice, listening to
                music, and meeting up with friends.
              </p>
            </motion.div>
            <motion.div variants={item} className="keen-slider__slide">
              <img src="https://wik1.vercel.app/images/stock.jpg" />
              <h2 className="mt-4 text-lg">Phil Smith</h2>
              <p className="text-md mt-2">
                Phil is CEO of NINE4 and the company's founder. Before starting
                NINE4, he was a Senior Designer at Microsoft — where he helped
                to design product features used by millions of people. Outside
                work, Phil's calendar is mainly violin practice, listening to
                music, and meeting up with friends.
              </p>
            </motion.div>
            <motion.div variants={item} className="keen-slider__slide">
              <img src="https://wik1.vercel.app/images/stock.jpg" />
              <h2 className="mt-4 text-lg">Phil Smith</h2>
              <p className="text-md mt-2">
                Phil is CEO of NINE4 and the company's founder. Before starting
                NINE4, he was a Senior Designer at Microsoft — where he helped
                to design product features used by millions of people. Outside
                work, Phil's calendar is mainly violin practice, listening to
                music, and meeting up with friends.
              </p>
            </motion.div>
            <motion.div variants={item} className="keen-slider__slide">
              <img src="https://wik1.vercel.app/images/stock.jpg" />
              <h2 className="mt-4 text-lg">Phil Smith</h2>
              <p className="text-md mt-2">
                Phil is CEO of NINE4 and the company's founder. Before starting
                NINE4, he was a Senior Designer at Microsoft — where he helped
                to design product features used by millions of people. Outside
                work, Phil's calendar is mainly violin practice, listening to
                music, and meeting up with friends.
              </p>
            </motion.div>
            <motion.div variants={item} className="keen-slider__slide">
              <img src="https://wik1.vercel.app/images/stock.jpg" />
              <h2 className="mt-4 text-lg">Phil Smith</h2>
              <p className="text-md mt-2">
                Phil is CEO of NINE4 and the company's founder. Before starting
                NINE4, he was a Senior Designer at Microsoft — where he helped
                to design product features used by millions of people. Outside
                work, Phil's calendar is mainly violin practice, listening to
                music, and meeting up with friends.
              </p>
            </motion.div>
            <motion.div variants={item} className="keen-slider__slide">
              <img src="https://wik1.vercel.app/images/stock.jpg" />
              <h2 className="mt-4 text-lg">Phil Smith</h2>
              <p className="text-md mt-2">
                Phil is CEO of NINE4 and the company's founder. Before starting
                NINE4, he was a Senior Designer at Microsoft — where he helped
                to design product features used by millions of people. Outside
                work, Phil's calendar is mainly violin practice, listening to
                music, and meeting up with friends.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
