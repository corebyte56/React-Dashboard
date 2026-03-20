import { Bolt } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const SidebarSetting = () => {
  const [hover, setHover] = useState(false);

  return (
    <motion.a
      href="/"
      className="px-4 py-2 flex gap-2 items-center rounded text-[14px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ scale: 1.03, backgroundColor: "#f0f0f0" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: hover ? 1 : 0.7, x: hover ? 0 : -5 }}
        transition={{ duration: 0.2 }}
        className="text-[#7D7D7D]"
      >
        <Bolt />
      </motion.div>

      setting
    </motion.a>
  );
};

export default SidebarSetting;