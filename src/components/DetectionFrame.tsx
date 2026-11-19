import { motion } from "framer-motion";
import headshot from "../assets/headshot.png";

const TAGS = [
  { label: "Python", score: "0.99", top: "6%", left: "2%" },
  { label: "OCR", score: "0.97", top: "22%", right: "-4%" },
  { label: "Computer Vision", score: "0.98", bottom: "26%", left: "-8%" },
  { label: "OpenCV", score: "0.95", bottom: "4%", right: "4%" },
];

export default function DetectionFrame() {
  return (
    <div className="detect-stage" aria-hidden="true">
      <img className="detect-photo" src={headshot} alt="" />
      <div className="detect-frame" />
      <div className="detect-corner tl" />
      <div className="detect-corner tr" />
      <div className="detect-corner bl" />
      <div className="detect-corner br" />

      <motion.div
        className="detect-scanline"
        style={{ top: "8%" }}
        animate={{ top: ["8%", "92%", "8%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {TAGS.map((tag, i) => (
        <motion.div
          className="detect-tag"
          key={tag.label}
          style={{
            top: tag.top,
            bottom: tag.bottom,
            left: tag.left,
            right: tag.right,
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, -6] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1,
            times: [0, 0.15, 0.85, 1],
          }}
        >
          {tag.label} <span className="v">{tag.score}</span>
        </motion.div>
      ))}
    </div>
  );
}
