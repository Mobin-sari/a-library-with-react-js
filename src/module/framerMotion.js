const containerCards = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
};  
const itemCards = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
};

const containerSideCards = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 2
      }
    }
};  
const itemSideCards = {
    hidden: { y: 50, x: -50 ,opacity: 0.5 },
    visible: {
        y: 0,
        x: 0,
      opacity: 1
    }
};

export { itemCards, itemSideCards, containerCards, containerSideCards } 