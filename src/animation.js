export const slideInAnimation = {
  initial: {
    y: '100px',
    opacity: 0,
  },
  animate: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const staggerAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
