import { motion } from "framer-motion";

const TAGS = [
  { label: "Python", score: "0.99", top: "6%", left: "2%" },
  { label: "OCR", score: "0.97", top: "22%", right: "-4%" },
  { label: "Computer Vision", score: "0.98", bottom: "26%", left: "-8%" },
  { label: "OpenCV", score: "0.95", bottom: "4%", right: "4%" },
];

export default function DetectionFrame() {
  return (
    <div className="detect-stage" aria-hidden="true">
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

      <div className="detect-core">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <path d="M8 6V4.5a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 4.5V6" />
          <circle cx="12" cy="12.5" r="3.2" />
        </svg>
      </div>

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
