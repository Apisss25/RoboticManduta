export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 60 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
    },
    show: {
      y: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.35,
        delay: delay,
        ease: [0.15, 0.25, 0.25, 0.15],
      },
    },
  };
};
