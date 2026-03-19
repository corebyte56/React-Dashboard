import React, { useState } from "react";
import {
  ClipboardMinus,
  ChevronDown,
  LayoutDashboard,
  User,
  Globe,
  MessageCircle,
  Handshake,
  Database,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Sidebar link data
const links = [
  { title: "Dashboard", icon: <LayoutDashboard /> },
  { title: "Customers", icon: <User /> },
  { title: "All reports", icon: <ClipboardMinus /> },
  { title: "Geography", icon: <Globe /> },
  { title: "Conversations", icon: <MessageCircle /> },
  { title: "Deals", icon: <Handshake /> },
  { title: "Export", icon: <Database /> },
];

const SidebarCatagory = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col gap-2.5 text-[18px] py-4">
      {links.map((link, index) => (
        <motion.a
          key={index}
          href="/"
          className="px-3 py-2 flex gap-2 justify-between rounded"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02, backgroundColor: "#f0f0f0" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="flex gap-2.5 items-center">
            {link.icon}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
                x: hoveredIndex === index ? 0 : -10,
              }}
              transition={{ duration: 0.2 }}
              className="text-[#7D7D7D]"
            >
              
            </motion.div>
            {link.title}
          </span>

          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="text-[#7D7D7D]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.a>
      ))}
    </div>
  );
};

export default SidebarCatagory;