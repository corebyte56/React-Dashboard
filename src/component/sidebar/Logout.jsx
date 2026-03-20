import { LogOut } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Logout = () => {
  const [hover, setHover] = useState(false);

  return (
    <motion.a
      className="px-4 py-2 flex gap-2 items-center text-red-600 rounded cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ scale: 1.03, backgroundColor: "#ffe5e5" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: hover ? 1 : 0.7, x: hover ? 0 : -5 }}
        transition={{ duration: 0.2 }}
      >
        <LogOut />
      </motion.div>

      LogOut
    </motion.a>
  );
};

export default Logout;