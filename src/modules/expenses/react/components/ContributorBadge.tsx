import { motion } from "framer-motion";

export const ContributorBadge = ({ index }: { index: number }) => {
  const getColor = (index: number) => {
    if (index === 0 || index === 1 || index === 2)
      return "bg-yellow-500 border border-yellow-600";
    return "bg-gray-200";
  };

  const getGlowColor = (index: number) => {
    if (index === 0 || index === 1 || index === 2)
      return "rgba(234, 179, 8, 0.5)";
    return "rgba(229, 231, 235, 0)";
  };

  return (
    <div className="relative w-6 h-6">
      <motion.div
        className="absolute inset-0 rounded-full bg-transparent"
        initial={{ scale: 1 }}
        animate={{
          scale: [0.2, 1, 0.2],
          boxShadow: [
            `0 0 10px 5px ${getGlowColor(index)}`,
            `0 0 20px 10px ${getGlowColor(index)}`,
            `0 0 10px 5px ${getGlowColor(index)}`,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute inset-0 rounded-full flex items-center justify-center text-xs ${getColor(index)}`}
      >
        {index + 1}
      </motion.div>
    </div>
  );
};
