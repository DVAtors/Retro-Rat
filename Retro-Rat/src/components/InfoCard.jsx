import { motion } from 'motion/react';
import './InfoCard.css';
import imgStar1 from '../assets/Star 2.png';
import imgStar2 from '../assets/Star 3.png';

// Smart Animate transition — using motion (closest i can get to smart animate in figma i think)
const smartAnimate = {
  type: 'spring',
  stiffness: 220,
  damping: 26,
  mass: 0.9,
};

function Star({ src, rest, hover, fadeOnHover = false }) {
  return (
    <motion.img
      src={src}
      alt=""
      className="info-card__star"
      variants={{
        rest: {
          left: rest.left,
          top: rest.top,
          width: rest.width,
          height: rest.height,
          rotate: rest.rotate,
          opacity: 0,
        },
        hover: hover
          ? {
              left: hover.left,
              top: hover.top,
              width: hover.width,
              height: hover.height,
              rotate: hover.rotate,
              opacity: 1,
            }
          : {
              opacity: fadeOnHover ? 0 : 1,
            },
      }}
      transition={smartAnimate}
    />
  );
}

export default function InfoCard({
  title = 'Vintage Tech Marketplace',
  subtitle = 'Buy and sell authentic retro electronics from verified collectors',
}) {
  return (
    <motion.div
      className="info-card"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <motion.div
        className="info-card__stripe info-card__stripe--gray"
        variants={{
          rest: { left: -555 },
          hover: { left: 1900 },
        }}
        transition={smartAnimate}
      />
      <motion.div
        className="info-card__stripe info-card__stripe--white"
        variants={{
          rest: { left: -508 },
          hover: { left: 1900 },
        }}
        transition={smartAnimate}
      />
      <motion.div
        className="info-card__stripe info-card__stripe--light"
        variants={{
          rest: { left: -441 },
          hover: { left: 1900 },
        }}
        transition={smartAnimate}
      />

      {/* The Text */}
      <div className="info-card__content">
        <h2 className="info-card__title">{title}</h2>
        <p className="info-card__subtitle">{subtitle}</p>
      </div>

      <Star
        src={imgStar1}
        rest={{ left: 555, top: 5, width: 89.967, height: 89.755, rotate: 43.41}}
        hover={{ left: 15.71, top: 24.25, width: 47.898, height: 46.862, rotate: -79.3 }}
      />
      <Star
        src={imgStar2}
        rest={{ left: 43, top: 25, width: 47.19, height: 47.079, rotate: 43.41 }}
        hover={{ left: 793, top: 80, width: 47.898, height: 46.862, rotate: -79.3 }}
      />
    </motion.div>
  );
}